import { DataService } from './../services/data.service';
import { Component, OnInit } from '@angular/core';




@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  name:string;
  age:number;
  email:string;
  address: Address;
  hobbies: string[];
  hello:any;
  posts: Post[];

  constructor(private dataService:DataService) {
    
   }

  ngOnInit() {
    console.log('ngOInit run')

    this.name = 'George Nikoglou';
    this.age = 30;
    this.email = 'georgenison@gmail.com'
    this.address = {
      street: 'Labrinidou 20',
      city: 'Drama',
      state:'East Macedonia'
    }
    this.hobbies = ['Write Code','Watch Movies','Listen to music']
    this.hello = 'come on';

    this.dataService.getPosts().subscribe((posts) => {
      console.log(posts)
      this.posts = posts;
    })
  }

  onClick(){
    this.name='Stella Georgiadou';
    this.hobbies.push('New Hobby');
  }

  addHobby(hobby){
    console.log(hobby);
    this.hobbies.unshift(hobby);
    return false;
  }

  deleteHobby(hobby){
    for(let i = 0; i< this.hobbies.length; i++){
      if(this.hobbies[i] == hobby){
        this.hobbies.splice(i , 1);
      }
    }
  }

}

interface Address {
  street: string;
  city: string;
  state: string;
}

interface Post {
  body:string;
  id: number;
  title:string;
  userId:number;
}
