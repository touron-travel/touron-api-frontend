import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
} from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";
import { MatSnackBar } from "@angular/material/snack-bar";
import { BlogService } from "../../../service/blog.service";

@Component({
  selector: "app-edit-blog",
  templateUrl: "./edit-blog.component.html",
  styleUrls: ["./edit-blog.component.css"],
})
export class EditBlogComponent implements OnInit {
  id;
  blogData;
  constructor(
    private route: ActivatedRoute,
    private snackbar: MatSnackBar,
    private router: Router,
    private blogService: BlogService
  ) {}

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

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.id = params.id;
      this.blogService.getBlogById(this.id).subscribe((data) => {
        this.blogData = data;
        // console.log(this.tourData)

        this.blogForm.get("blogTitle").setValue(this.blogData.blogTitle);
        this.blogForm.get("content").setValue(this.blogData.content);
        this.blogForm.get("keywords").setValue(this.blogData.keywords);
        this.blogForm.get("imageSrc").setValue(this.blogData.imageSrc);
        this.blogForm.get("imageSrc1").setValue(this.blogData.imageSrc1);
        this.blogForm.get("content1").setValue(this.blogData.content1);
        this.blogForm.get("subHeading1").setValue(this.blogData.subHeading1);
        this.blogForm.get("imageSrc2").setValue(this.blogData.imageSrc2);
        this.blogForm.get("content2").setValue(this.blogData.content2);
        this.blogForm.get("subHeading2").setValue(this.blogData.subHeading2);
        this.blogForm.get("imageSrc3").setValue(this.blogData.imageSrc3);
        this.blogForm.get("content3").setValue(this.blogData.content3);
        this.blogForm.get("subHeading3").setValue(this.blogData.subHeading3);
      });
    });
  }

  updateBlog() {
    // console.log(this.tourForm.value);
    this.blogService.updateBlog(this.blogForm.value, this.id).subscribe(() => {
      this.snackbar.open("Tour updated Successfully", "", {
        duration: 5000,
        verticalPosition: "top",
      });
      this.router.navigate(["/main/listblog"]);
    });
  }
}
