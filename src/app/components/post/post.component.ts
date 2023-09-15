import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Post } from 'src/app/model/post';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent {
  @Input() postData?:Post;
  @Input() preferArray:Post | undefined
  @Output() addPreferArray= new EventEmitter<Post>()


  addToPrefer() {
    this.addPreferArray.emit(this.postData); 
  }
  
}
