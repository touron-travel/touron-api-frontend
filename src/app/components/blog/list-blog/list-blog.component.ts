import { MatPaginator } from "@angular/material/paginator";
import { Component, OnInit, ViewChild } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Router } from "@angular/router";

import { MatTableDataSource } from "@angular/material/table";
import { MatSort } from "@angular/material/sort";
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from "@angular/animations";
import { BlogService } from "../../../service/blog.service";

@Component({
  selector: "app-list-blog",
  templateUrl: "./list-blog.component.html",
  styleUrls: ["./list-blog.component.css"],
  animations: [
    trigger("detailExpand", [
      state("collapsed", style({ height: "0px", minHeight: "0" })),
      state("expanded", style({ height: "*" })),
      transition(
        "expanded <=> collapsed",
        animate("225ms cubic-bezier(0.4, 0.0, 0.2, 1)")
      ),
    ]),
  ],
})
export class ListBlogComponent implements OnInit {
  blogData: MatTableDataSource<any>;
  searchKey;
  // expenseDetails:MatTableDataSource<any>
  expandedElement;
  blogs;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  constructor(
    private blogService: BlogService,
    private router: Router,
    private snackbar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.getBlog();
  }

  displayedColumns: string[] = [
    "no",
    "blogTitle",
    "content",
    "imageSrc",
    "keywords",
    "subHeading1",
    "content1",
    "imageSrc1",
    "subHeading2",
    "content2",
    "imageSrc2",
    "subHeading3",
    "content3",
    "imageSrc3",
    "actions",
  ];

  getBlog() {
    this.blogService.getBlog().subscribe((data: any) => {
      this.blogData = new MatTableDataSource(data);
      this.blogData.paginator = this.paginator;
      this.blogs = data;
      this.blogData.sort = this.sort;
      console.log(this.blogData);
    });
  }

  deleteBlog(id) {
    this.blogService.deleteBlog(id).subscribe(() => {
      this.snackbar.open("Tour Deleted Successfully", "", {
        duration: 5000,
        verticalPosition: "top",
      });
      this.router.navigate(["/main/listblog"]);
      this.getBlog();
    });
  }

  editBlog(id) {
    this.router.navigate([`/main/editblog/${id}`]);
  }

  onSearchClear() {
    this.searchKey = " ";
    this.applyFilter();
  }

  applyFilter() {
    this.blogData.filter = this.searchKey.trim().toLowerCase();
  }
}
