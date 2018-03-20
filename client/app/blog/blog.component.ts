import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService} from "../services/auth.service";

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

  constructor( 
    private authService: AuthService
   ) {
   }


  // Function to display new blog form
  newBlogForm() {
    this.newPost = true; // Show new blog form
  }


  reloadBlogs() {
      this.loadingBlogs = true;
      // Get all blogs
      setTimeout(() => {
        this.loadingBlogs = false;
      }, 2000);

  }

  ngOnInit() {

  }

}