import { Injectable } from '@angular/core';
import { Post } from '../model/post';

@Injectable({
  providedIn: 'root'
})
export class ConnectionService {
  constructor() {}

  async getPost(): Promise<Post[]> {
    try {
      const response = await fetch('https://api.reddit.com/search.json?q=crypto=new');
      if (!response.ok) {
        throw new Error('Errore nella richiesta HTTP');
      }
      const data = await response.json();
      const postsArray: Post[] = [];
      if (data.data && data.data.children) {
        for (const information of data.data.children) {
          postsArray.push(information.data);
        }
      }
      return postsArray;
    } catch (error) {
      console.error('Errore nel recupero dei post per la categoria:', error);
      throw error;
    }
  }
}
