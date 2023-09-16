import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Post } from 'src/app/model/post';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent {
  @Input() postData?: Post;
  @Input() preferArray: Post[] | undefined;
  @Output() addPreferArray = new EventEmitter<Post>();
  isFavorite: boolean = false;
  @Output() removePreferArray = new EventEmitter<Post>();
 
  @Input() isInPreferComponent: boolean = false;

  ngOnInit(){
  }

  addToPrefer() {
    this.isFavorite = !this.isFavorite;
    this.addPreferArray.emit(this.postData);
    
  }

  removeFromPrefer() {
    this.removePreferArray.emit(this.postData);
  }
}
