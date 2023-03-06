import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IDeactivateComponent } from '../candeactivate-guard.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit,IDeactivateComponent{
  userId:any='';
  firstName: any;
  lastName: any;
  country: any;
  subject: any;
constructor(private route:ActivatedRoute){}
  ngOnInit(): void {
   console.warn("user id is",this.route.snapshot.paramMap.get('id'))
   this.userId=this.route.snapshot.paramMap.get('id')
  }
   canExit(){
    if(this.firstName || this.lastName || this.country || this.subject){
     return confirm('You have unsaved changes. Do you really want to discard changes')
    }else{
      return true;
    }
   }
}
