import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { CoursesService } from "./Services/courses.service";
@Injectable()
export class CourseResolverService implements Resolve<any>{
    constructor(private courseService:CoursesService){}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
     return this.courseService.getAllCourses().then((data:any)=>{
        return data;
    })
    }

}