import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { Http, Headers, RequestOptions } from '@angular/http';

@Injectable()
export class BlogService {

  options;
  domain = this.authService.domain;

  constructor(
    private authService: AuthService,
    private http: Http
  ) { }

    // Function to create headers, add token, to be used in HTTP requests
    createAuthenticationHeaders() {
        this.authService.loadToken(); // Get token so it can be attached to headers
        // Headers configuration options
        this.options = new RequestOptions({
          headers: new Headers({
            'Content-Type': 'application/json', // Format set to JSON
            'authorization': this.authService.authToken // Attach token
          })
        });
      }

    // Function to create a new blog post
    newBlog(blog) {
        this.createAuthenticationHeaders(); // Create headers
        return this.http.post("http://localhost:8080" + '/blogs/newBlog', blog, this.options).map(res => res.json());
    }

    // Function to get all blogs from the database
    getAllBlogs() {
      this.createAuthenticationHeaders(); // Create headers
      return this.http.get("http://localhost:8080" + '/blogs/allBlogs', this.options).map(res => res.json());
    }

    // Function to delete a blog
    deleteBlog(id) {
      this.createAuthenticationHeaders(); // Create headers
      return this.http.delete("http://localhost:8080" + '/blogs/deleteBlog/' + id, this.options).map(res => res.json());
    }

    // Function to get the blog using the id
    getSingleBlog(id) {
    this.createAuthenticationHeaders(); // Create headers
    return this.http.get("http://localhost:8080" + '/blogs/singleBlog/' + id, this.options).map(res => res.json());
  }

    // Function to like a blog post
    likeBlog(id) {
      const blogData = { id: id };
      return this.http.put("http://localhost:8080" + '/blogs/likeBlog/', blogData, this.options).map(res => res.json());
    }
  
    // Function to dislike a blog post
    dislikeBlog(id) {
      const blogData = { id: id };
      return this.http.put("http://localhost:8080" + '/blogs/dislikeBlog/', blogData, this.options).map(res => res.json());
    }

}