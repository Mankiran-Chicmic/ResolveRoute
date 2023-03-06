import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  courses=[
    {id:101,name:'Javascript for Beginners',author:'John Heiko',
     price:0.00,ratings:3.5,
     description:'In this course you will learn the fundamentals of javascript'
    },
    {id:101,name:'Javascript for Experienced',author:'Phone Heiko',
     price:0.01,ratings:3.5,
     description:'In this course you will learn the fundamentals of javascript'
    }
   ]
 
 
   getAllCourses():any{
     const courseList=new Promise((resolve,reject)=>{
       setTimeout(()=>{
         resolve(this.courses)
       },5000)
     });
     return courseList;
   }
  
}
