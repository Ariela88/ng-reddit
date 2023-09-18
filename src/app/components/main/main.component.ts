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
      "name": "Simpson",
      "value": "simpson"
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
      "name": "Rock",
      "value": "rock_and_roll"
    },{
      "name": "South Park",
      "value": "southpark"
    },
    {
      "name": "Big Bang Theory",
      "value": "bigbangtheory"
    }
  ]


  constructor(
    private connectionService: ConnectionService,
    private storageService: StorageService
  ) {


  }

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
