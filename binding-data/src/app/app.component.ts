import { Component } from '@angular/core';
import { Homeservice } from './service/home.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public xyx:any="hai";
  public mn:any="ad";
  twoway(event:any){
    let a=event.target.value;
    this.xyx=a;
  }
  getClass(mn:any){
   return "retun_mn_value_"+mn;
  }
  changeheight(event:any){
   var currentEleRef=event.target;
   var rowHeight=currentEleRef.offsetHeight;
   var adjustHeight=2*rowHeight;
   currentEleRef.style.height=adjustHeight+"px";
   currentEleRef.style.padding="100px";
   currentEleRef.style.marginRight= "100px";
  }
  changeHeight(event:any){
    var currentEleRef=event.target;
    if(!currentEleRef) return;
    var rowHeight=currentEleRef.offsetHeight;
    var rowWidth=currentEleRef.offsetWidth;
   var nextEleRef=currentEleRef.nextElementSibling;
   nextEleRef.style.height=rowHeight+"px";
   nextEleRef.style.width=rowWidth+"px";
   nextEleRef.style.marginLeft="20px";
   }

   public display=true;
    public users:any=[];
   constructor(private homeservices:Homeservice){
 
   }
   fetchdata(){
       this.homeservices.getuser().subscribe( (res)=> {this.users=res;})
   }
 }
