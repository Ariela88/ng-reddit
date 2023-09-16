import { Injectable } from '@angular/core';
import { Post } from '../model/post';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConnectionService {
  constructor(private http: HttpClient) {}

  // IL BEHAVIOR SUBJECT E' UNA VARIABILE DINAMICA, PERMETTE DI ESSERE CONTROLLATA DA QUALSIASI COMPONENTE E LE MODIFICHE SONO RUNTIME
  public postArray: BehaviorSubject<any> = new BehaviorSubject(null)

  getPosts(sub: string){
    let newSub = "aww"
    if(sub){
      newSub = sub
    }
    const tempArray: Post[] = [];

    this.http.get('https://www.reddit.com/r/'+ newSub +'/new.json').subscribe({
      next: (res: any) => {
        if(res && res !== null){
          let children = res["data"]["children"];
          children.map((child: any) => {
            const newPost:Post = {
              id: child.data.id,
              title: child.data.title,
              author: child.data.author,
              url: child.data.url,
            };
            tempArray.push(newPost);
          });
        }
      },
      error: err => console.log(err)
    })
    return tempArray

    // return fetch('https://www.reddit.com/r/'+ newSub +'/new.json')
    // .then(resp => resp.json())
    // .then(redditObj => redditObj.data)
    // .then(data => data.children)
    // .then(children => children.map((c:any) => {
    //   const newPost:Post = {
    //     id: c.data.id,
    //     title: c.data.title,
    //     author: c.data.author,
    //     url: c.data.url,
    //   }
    //   return newPost;
    // }))
  }
}
