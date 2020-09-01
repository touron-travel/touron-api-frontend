import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class BlogService {
  uri = "https://touronapi.herokuapp.com";
  //  uri = 'http://localhost:3000';
  constructor(private http: HttpClient) {}

  getBlog() {
    return this.http.get(`${this.uri}/blog`);
  }

  getBlogById(id) {
    return this.http.get(`${this.uri}/blog/edit/${id}`);
  }

  addBlog(value) {
    console.log(value);
    const city = {
      blogTitle: value.blogTitle,
      imageSrc: value.imageSrc,
      content: value.content,
      keywords: value.keywords,
      subHeading1: value.subHeading1,
      imageSrc1: value.imageSrc1,
      content1: value.content1,
      subHeading2: value.subHeading2,
      imageSrc2: value.imageSrc2,
      content2: value.content2,
      subHeading3: value.subHeading3,
      imageSrc3: value.imageSrc3,
      content3: value.content3,
    };

    return this.http.post(`${this.uri}/blog`, city);
  }

  updateBlog(value, id) {
    console.log(value);
    const city = {
      blogTitle: value.blogTitle,
      imageSrc: value.imageSrc,
      content: value.content,
      keywords: value.keywords,
      subHeading1: value.subHeading1,
      imageSrc1: value.imageSrc1,
      content1: value.content1,
      subHeading2: value.subHeading2,
      imageSrc2: value.imageSrc2,
      content2: value.content2,
      subHeading3: value.subHeading3,
      imageSrc3: value.imageSrc3,
      content3: value.content3,
    };
    console.log(city);
    return this.http.post(`${this.uri}/blog/edit/${id}`, city);
  }

  deleteBlog(id) {
    return this.http.post(`${this.uri}/blog/delete/${id}`, id);
  }
}
