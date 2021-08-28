import { Component, OnInit } from '@angular/core';
import { BlogService } from '../service/blog.service';
import { Blog } from '../model/blog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.scss'],
})
export class BlogsComponent implements OnInit {
  // blogs: Blog[] = null;

  constructor(public blogsService: BlogService, private router: Router) { }

  ngOnInit(): void {
  }

  deleteBlog(blog: Blog) {
    this.blogsService.blogs = this.blogsService.blogs.filter((b) => {
      if (b !== blog) {
        return b;
      }
    });
    console.log(this.blogsService.blogs)
  }

  onClickBlog(id: number) {
    this.router.navigate(['view-blog',id]);
  }
  onclickCreate(){
    this.router.navigate(['create-blog']);
  }
}
