import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
} from "@angular/forms";
import { Router } from "@angular/router";
import { MatSnackBar } from "@angular/material/snack-bar";
import { BlogService } from "../../../service/blog.service";
@Component({
  selector: "app-create-blog",
  templateUrl: "./create-blog.component.html",
  styleUrls: ["./create-blog.component.css"],
})
export class CreateBlogComponent implements OnInit {
  constructor(
    private blogService: BlogService,
    private snackbar: MatSnackBar,
    private router: Router
  ) {}

  ngOnInit(): void {}

  blogForm = new FormGroup({
    blogTitle: new FormControl("", Validators.required),
    content: new FormControl("", Validators.required),
    keywords: new FormControl("", Validators.required),
    imageSrc: new FormControl("", Validators.required),
    subHeading1: new FormControl("", Validators.required),
    content1: new FormControl("", Validators.required),
    imageSrc1: new FormControl("", Validators.required),
    subHeading2: new FormControl("", Validators.required),
    content2: new FormControl("", Validators.required),
    imageSrc2: new FormControl("", Validators.required),
    subHeading3: new FormControl("", Validators.required),
    content3: new FormControl("", Validators.required),
    imageSrc3: new FormControl("", Validators.required),
  });

  addBlog() {
    this.blogService.addBlog(this.blogForm.value).subscribe(() => {
      this.snackbar.open("Blog Added Successfully", "", {
        duration: 5000,
        verticalPosition: "top",
      });
      this.router.navigate(["/main/listblog"]);
    });
  }
}
