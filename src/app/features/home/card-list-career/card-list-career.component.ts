import { Component, OnInit } from '@angular/core';
import { Card } from '../models/card.model';

@Component({
  selector: 'app-card-list-career',
  templateUrl: './card-list-career.component.html',
  styleUrls: ['./card-list-career.component.css']
})
export class CardListCareerComponent implements OnInit {

  cards: Card[] = [
    {
      imageUrl: '../../../../assets/images/background-card4.jpg',
      title: 'Perfomance Engineer',
      location: 'Location: Bolivia (Hybrid)',
      published: '15 days ago'
    },
    {
      imageUrl: '../../../../assets/images/background-card1.jpg',
      title: 'Quality Assurance',
      location: 'Location: Bolivia (Hybrid)',
      published: '15 days ago'
    },
    {
      imageUrl: '../../../../assets/images/background-card3.jpg',
      title: 'Quality Assurance',
      location: 'Location: Bolivia (Hybrid)',
      published: '15 days ago'
    },
    {
      imageUrl: '../../../../assets/images/background-card2.jpg',
      title: 'Quality Assurance',
      location: 'Location: Bolivia (Hybrid)',
      published: '15 days ago'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
