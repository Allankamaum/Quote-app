import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Quote} from '../quote';
@Component({
  selector: 'app-quote-details',
  templateUrl: './quote-details.component.html',
  styleUrls: ['./quote-details.component.css']
})
export class QuoteDetailsComponent implements OnInit {

  
@Input() quote: Quote; 
@Output() isComplete = new EventEmitter<boolean>();

upvotes:number;
downvotes:number;

quoteDelete(complete: boolean){
  this.isComplete.emit(complete);
}

constructor() {
  this.upvotes=0;
  this.downvotes=0;
 }
  ngOnInit() {
  }
upVote(){
  this.upvotes+=1;
}
downVote(){
  this.downvotes+=1;
}
}
