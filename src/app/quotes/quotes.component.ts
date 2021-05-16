import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';



@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {

  quotes: Quote[] = [
    new Quote(1, "You have the chance to change the world.Just do it", "Martin Mylles", "Nike", new Date(2021, 7, 15)),
    new Quote(2, "This country gives you a chance to be whatever you want to be.All that matters is how big you can dream.", "Martin Mylles", "Nelson Mandela", new Date(2021, 1, 20)),
    new Quote(3, "If your ship does not come in,swim out to it.", "Martin Mylles", "Anonymous", new Date(2021, 2, 12)),
    new Quote(4, "Don’t Let Yesterday Take Up Too Much Of Today", "Martin Mylles", "Will Smith", new Date(2021, 4, 12)),
    new Quote(5, "The human spirit must prevail over technology", "Martin Mylles", "Albert Einsten", new Date(2021, 4, 12))
  ];

  // toggle between description and quote logic

  toggleDetails(index) {
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }

  completeQuote(isComplete, index) {
    if (isComplete) {
      this.quotes.splice(index, 1);
    }
  }

  // function that deletes
  deleteQuote(isComplete, index) {
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete ${this.quotes[index].name}? `);
      if (toDelete) {
        this.quotes.splice(index, 1);
      }
    }
  }
  //  function that adds new goals
  addNewQuote(quote) {
    let goalLength = this.quotes.length;
    quote.id = goalLength + 1;
    quote.completeDate = new Date(quote.completeDate)
    this.quotes.push(quote)
  }
 
  constructor() { }

  ngOnInit() {
  }

}
