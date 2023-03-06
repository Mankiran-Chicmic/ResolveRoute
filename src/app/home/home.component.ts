import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CoursesService } from '../Services/courses.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit
{
  courses:any=[]
  constructor(private coursesService: CoursesService,private route:ActivatedRoute){}
  ngOnInit(): void {
    // //this.courses=this.courseService.courses
    // this.coursesService.getAllCourses().then((data: any)=>{
    //     this.courses=data;
    // })
    this.courses=this.route.snapshot.data['courses']
  }
 
}
