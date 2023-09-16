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

  public selectedValue: string = "";
  public categories: any[] = [
    {
      "name": "Anime",
      "value": "anime"
    },
    {
      "name": "Most liked",
      "value": "most_liked"
    },
    {
      "name": "Popolari",
      "value": "popular"
    },
    {
      "name": "Programmazione",
      "value": "programming"
    },
    {
      "name": "Italia",
      "value": "italy"
    }
  ]


  constructor(
    private connectionService: ConnectionService,
    private storageService: StorageService
  ) {
    
    
  }

  // async ngOnInit(): Promise<void> {
  //   try {
  //     this.preferArray = this.storageService.load('preferArray') || [];

  //     const posts = await this.connectionService.getPosts();
  //     this.postData = posts;
  //   } catch (error) {
  //     console.error('Errore nella chiamata HTTP:', error);
  //   }
  // }
  ngOnInit(): void {
    this.postData = this.connectionService.getPosts(this.selectedValue)
    
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

  viewValue(){
    this.postData = this.connectionService.getPosts(this.selectedValue)
  }
  
}
