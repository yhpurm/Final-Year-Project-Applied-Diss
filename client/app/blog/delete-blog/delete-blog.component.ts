import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { AuthService} from "../../services/auth.service";
import { BlogService } from '../../services/blog.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'app-welcome',
  templateUrl: 'delete-blog.component.html'
})
export class DeleteBlogComponent implements OnInit {
    message;
    messageClass;
    foundBlog = false;
    blog;
    currentUrl;
    processing;

  constructor( 
    private authService: AuthService,
    private formBuilder: FormBuilder,
    private blogService: BlogService,
    private activatedRoute: ActivatedRoute,
    private router: Router
   ) {
   }

   deleteBlog() {
    this.processing = true; // Disable buttons
    // Function for DELETE request
    this.blogService.deleteBlog(this.currentUrl.id).subscribe(data => {
      // Check if delete request worked
      if (!data.success) {
        this.messageClass = 'alert alert-danger'; 
        this.message = data.message; 
      } else {
        this.messageClass = 'alert alert-success'; 
        this.message = data.message; 
        // After two second timeout, route to blog page
        setTimeout(() => {
          this.router.navigate(['/blog']);
        }, 1500);
      }
    });

   }

  ngOnInit() {
    this.currentUrl = this.activatedRoute.snapshot.params; // Get URL paramaters on page load
    // Function for GET request to retrieve blog
    this.blogService.getSingleBlog(this.currentUrl.id).subscribe(data => {
      // Check if request was successful
      if (!data.success) {
        this.messageClass = 'alert alert-danger'; 
        this.message = data.message; 
      } else {
        // Create the blog object to use in HTML
        this.blog = {
          title: data.blog.title,
          body: data.blog.body,
          createdBy: data.blog.createdBy,
          createdAt: data.blog.createdAt
        }
        this.foundBlog = true;
      }
    });
  }

}