import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-view-all-post',
  templateUrl: './view-all-post.component.html',
  styleUrls: ['./view-all-post.component.css']
})
export class ViewAllPostComponent {

  constructor(private api: ApiService){
    api.fetchPost().subscribe(
      (response)=>{
        this.data=response;
      }
    )
  }



  data:any=[]

}
