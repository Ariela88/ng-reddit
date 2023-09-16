import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/model/post';
import { StorageService } from 'src/app/service/storage.service';

@Component({
  selector: 'app-prefer',
  templateUrl: './prefer.component.html',
  styleUrls: ['./prefer.component.scss']
})
export class PreferComponent implements OnInit {
  preferArray: Post[] = [];
  isInPreferComponent = true

  constructor(private storageService: StorageService) {}

  ngOnInit(): void {
    this.preferArray = this.storageService.load('preferArray') || [];
  }

  removePostFromPrefer(post: Post) {
    
    this.preferArray = this.preferArray.filter((p) => p.id !== post.id);
    
    this.storageService.save('preferArray', this.preferArray);
  }
}
