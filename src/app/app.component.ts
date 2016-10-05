import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  tweetList:string[] = [
    "783481715675193344",
    "783466783625928704"
  ];

  // gets the content of the input and prepends it to the tweetList!
  newId:string;
  addTweet(){
    if(this.newId != ""){
      this.tweetList.unshift(this.newId);
      this.newId = "";
    }
  }
}