import { Component, ElementRef, Input } from '@angular/core';
import {WindowReference} from '../window-reference';

@Component({
  selector: 'tweet',
  templateUrl: './twitter.component.html',
  styleUrls: ['./twitter.component.css']
})
export class TwitterComponent {
  tweetId:string = "";

  @Input('tweetId') set setTweetId(tweetId:string){
    this.tweetId = tweetId;
    let win = WindowReference.get();
    win.twttr.ready(() => { 
      win.twttr.widgets.createTweet(this.tweetId, this.elem.nativeElement)
    });
  }

  constructor(private elem:ElementRef) { 
    console.log("called");
    console.log(this.tweetId)
  }
}