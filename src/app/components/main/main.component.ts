import { Component } from '@angular/core';
import { Post } from 'src/app/model/post';
import { ConnectionService } from 'src/app/service/connection.service';
import { StorageService } from 'src/app/service/storage.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent {
  postData: Post[] = [];
  preferArray: Post[] = [];
  isInPreferComponent = false

  constructor(
    private connectionService: ConnectionService,
    private storageService: StorageService
  ) {}

  async ngOnInit(): Promise<void> {
    try {
      this.preferArray = this.storageService.load('preferArray') || [];

      const posts = await this.connectionService.getPosts();
      this.postData = posts;
    } catch (error) {
      console.error('Errore nella chiamata HTTP:', error);
    }
  }

  addPreferArray(post: Post) {
    const isAlreadyAdded = this.preferArray.some(
      (existingPost) => existingPost.id === post.id
    );
  
    if (!isAlreadyAdded) {
      this.preferArray.push(post); 
      this.storageService.save('preferArray', this.preferArray);
    }
  }
  
}
