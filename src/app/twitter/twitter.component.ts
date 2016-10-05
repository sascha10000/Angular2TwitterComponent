import { Component, ElementRef, Input } from '@angular/core';
import {WindowReference} from '../window-reference';

@Component({
  selector: 'tweet',
  templateUrl: './twitter.component.html',
  styleUrls: ['./twitter.component.css']
})
export class TwitterComponent {
  tweetId:string;

  @Input('tweetId') set setTweetId(tweetId:string){
    this.tweetId = tweetId;

    let win = WindowReference.get();
    console.log(win.twttr);
    if(win.twttr.init){
      this.createWidget();
    }
    else {
      win.twttr.ready(this.createWidget);
    }
  }

  constructor(private elem:ElementRef) { }

  createWidget(){
    console.log(this.tweetId);
    WindowReference.get().twttr.widgets.createTweet(this.tweetId, this.elem.nativeElement);
  }
}