import { Component } from '@angular/core';
import { Post } from 'src/app/model/post';
import { ConnectionService } from 'src/app/service/connection.service';
import { PostComponent } from '../post/post.component';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {

  postData: Post[] = [];

  constructor(private connectionService: ConnectionService) {}

  async ngOnInit(): Promise<void> {
    try {
      const posts = await this.connectionService.getPost();
      console.log(posts); // Visualizza i dati nella console
      this.postData = posts;
    } catch (error) {
      console.error('Errore nella chiamata HTTP:', error);
    }
  }
  

  
  
}
