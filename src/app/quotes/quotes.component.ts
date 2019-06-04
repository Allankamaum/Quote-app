import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Quote } from '../quote'


@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {

  quotes = [
    new Quote("Allan kamau", "Maya Angelou", "I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel", new Date()),
  ]
  deleteQuote(isComplete, index) {
    if (isComplete) {
      let toDelete = confirm(`Continue with deletion ${this.quotes[index].name}`)

      if (toDelete) {
        this.quotes.splice(index, 1)
      }
    }
  }


  name = new FormControl('')
  quote = new FormControl('')
  constructor() { }

  updateName() {
    this.name.setValue('talk');
    this.quote.setValue('talk')
  }

  addNewQuote(quote){
    this.quotes.push(quote);

  }


  ngOnInit() {
  }

}
