import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { AuthService} from "../services/auth.service";
import { BlogService } from '../services/blog.service';

@Component({
  moduleId: module.id,
  selector: 'app-welcome',
  templateUrl: 'blog.component.html'
})
export class BlogComponent implements OnInit {

    messageClass;
    message;
    newPost = false;
    loadingBlogs = false;
    form;
    processing;
    username = JSON.parse(localStorage.getItem('user'));
    blogPosts;
    submitButton;

  constructor( 
    private authService: AuthService,
    private formBuilder: FormBuilder,
    private blogService: BlogService
   ) {
       this.createNewBlogForm();
   }

  // Function to create new blog form
  createNewBlogForm() {
    this.form = this.formBuilder.group({
      title: ['', Validators.compose([
        Validators.required,
        Validators.maxLength(50),
        Validators.minLength(5)
      ])],
      body: ['', Validators.compose([
        Validators.required,
        Validators.maxLength(500),
        Validators.minLength(5)
      ])]
    })
  }


  // Function to display new blog form
  newBlogForm() {
    this.newPost = true; // Show new blog form
  }


  reloadBlogs() {
      this.loadingBlogs = true;
      this.getAllBlogs();
      // Get all blogs
      setTimeout(() => {
        this.loadingBlogs = false;
      }, 2000);

  }

  // Function to submit a new blog post
  onBlogSubmit() {
    this.processing = true; // Disable submit button
    this.disableFormNewBlogForm(); // Lock form
    // Create blog object from form fields
    const blog = {
      title: this.form.get('title').value, // Title field
      body: this.form.get('body').value, // Body field
      createdBy: this.username // CreatedBy field
    }

    // Function to save blog into database
    this.blogService.newBlog(blog).subscribe(data => {
      // Check if blog was saved to database or not
      if (!data.success) {
        this.messageClass = 'alert alert-danger'; // Return error class
        this.message = data.message; // Return error message
        this.processing = false; // Enable submit button
        this.enableFormNewBlogForm(); // Enable form
      } else {
        this.messageClass = 'alert alert-success'; // Return success class
        this.message = data.message; // Return success message
        this.getAllBlogs();
        // Clear form data after two seconds
        setTimeout(() => {
          this.newPost = false; // Hide form
          this.processing = false; // Enable submit button
          this.message = false; // Erase error/success message
          this.form.reset(); // Reset all form fields
          this.enableFormNewBlogForm(); // Enable the form fields
        }, 2000);
      }
    });
  }



  // Function to go back to previous page
  goBack() {
      window.location.reload(); // Clear all variable states
      }

  // Enable new blog form
  enableFormNewBlogForm() {
    this.form.get('title').enable(); // Enable title field
    this.form.get('body').enable(); // Enable body field
  }

  // Disable new blog form
  disableFormNewBlogForm() {
    this.form.get('title').disable(); // Disable title field
    this.form.get('body').disable(); // Disable body field
  }

    getAllBlogs() {
      // Function to GET all blogs from database
      this.blogService.getAllBlogs().subscribe(data => {
        this.blogPosts = data.blogs; // Assign array to use in HTML
      });
    }

    // Function to like blog
    likeBlog(id){
      this.blogService.likeBlog(id).subscribe(data => {
        this.getAllBlogs();
      });
      
    }
    // Function to dislike blog
    dislikeBlog(id){
      this.blogService.dislikeBlog(id).subscribe(data => {
        this.getAllBlogs();
      });
    }

    // Function to return what is in storage
    get user(): any {
      return JSON.parse(localStorage.getItem('user'));
    }



  ngOnInit() {
    this.username;
    this.getAllBlogs();


  }

}