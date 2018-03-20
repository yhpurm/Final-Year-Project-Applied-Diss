"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var auth_service_1 = require("../services/auth.service");
var blog_service_1 = require("../services/blog.service");
var BlogComponent = /** @class */ (function () {
    function BlogComponent(authService, formBuilder, blogService) {
        this.authService = authService;
        this.formBuilder = formBuilder;
        this.blogService = blogService;
        this.newPost = false;
        this.loadingBlogs = false;
        this.username = JSON.parse(localStorage.getItem('user'));
        this.createNewBlogForm();
    }
    // Function to create new blog form
    BlogComponent.prototype.createNewBlogForm = function () {
        this.form = this.formBuilder.group({
            title: ['', forms_1.Validators.compose([
                    forms_1.Validators.required,
                    forms_1.Validators.maxLength(50),
                    forms_1.Validators.minLength(5)
                ])],
            body: ['', forms_1.Validators.compose([
                    forms_1.Validators.required,
                    forms_1.Validators.maxLength(500),
                    forms_1.Validators.minLength(5)
                ])]
        });
    };
    // Function to display new blog form
    BlogComponent.prototype.newBlogForm = function () {
        this.newPost = true; // Show new blog form
    };
    BlogComponent.prototype.reloadBlogs = function () {
        var _this = this;
        this.loadingBlogs = true;
        // Get all blogs
        setTimeout(function () {
            _this.loadingBlogs = false;
        }, 2000);
    };
    // Function to submit a new blog post
    BlogComponent.prototype.onBlogSubmit = function () {
        var _this = this;
        this.processing = true; // Disable submit button
        this.disableFormNewBlogForm(); // Lock form
        // Create blog object from form fields
        var blog = {
            title: this.form.get('title').value,
            body: this.form.get('body').value,
            createdBy: this.username // CreatedBy field
        };
        // Function to save blog into database
        this.blogService.newBlog(blog).subscribe(function (data) {
            // Check if blog was saved to database or not
            if (!data.success) {
                _this.messageClass = 'alert alert-danger'; // Return error class
                _this.message = data.message; // Return error message
                _this.processing = false; // Enable submit button
                _this.enableFormNewBlogForm(); // Enable form
            }
            else {
                _this.messageClass = 'alert alert-success'; // Return success class
                _this.message = data.message; // Return success message
                _this.getAllBlogs();
                // Clear form data after two seconds
                setTimeout(function () {
                    _this.newPost = false; // Hide form
                    _this.processing = false; // Enable submit button
                    _this.message = false; // Erase error/success message
                    _this.form.reset(); // Reset all form fields
                    _this.enableFormNewBlogForm(); // Enable the form fields
                }, 2000);
            }
        });
    };
    // Function to go back to previous page
    BlogComponent.prototype.goBack = function () {
        window.location.reload(); // Clear all variable states
    };
    // Enable new blog form
    BlogComponent.prototype.enableFormNewBlogForm = function () {
        this.form.get('title').enable(); // Enable title field
        this.form.get('body').enable(); // Enable body field
    };
    // Disable new blog form
    BlogComponent.prototype.disableFormNewBlogForm = function () {
        this.form.get('title').disable(); // Disable title field
        this.form.get('body').disable(); // Disable body field
    };
    // Function to get all blogs from the database
    BlogComponent.prototype.getAllBlogs = function () {
        var _this = this;
        // Function to GET all blogs from database
        this.blogService.getAllBlogs().subscribe(function (data) {
            _this.blogPosts = data.blogs; // Assign array to use in HTML
        });
    };
    Object.defineProperty(BlogComponent.prototype, "user", {
        // Functions to return what is in storage
        get: function () {
            return JSON.parse(localStorage.getItem('user'));
        },
        enumerable: true,
        configurable: true
    });
    BlogComponent.prototype.ngOnInit = function () {
        this.username;
        this.getAllBlogs();
    };
    BlogComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-welcome',
            templateUrl: 'blog.component.html'
        }),
        __metadata("design:paramtypes", [auth_service_1.AuthService,
            forms_1.FormBuilder,
            blog_service_1.BlogService])
    ], BlogComponent);
    return BlogComponent;
}());
exports.BlogComponent = BlogComponent;
//# sourceMappingURL=blog.component.js.map