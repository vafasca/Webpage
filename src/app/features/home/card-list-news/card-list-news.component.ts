import { Component, OnInit } from '@angular/core';
import { NewsCard } from '../models/news-card.model';

@Component({
  selector: 'app-card-list-news',
  templateUrl: './card-list-news.component.html',
  styleUrls: ['./card-list-news.component.css']
})
export class CardListNewsComponent implements OnInit {

  cards: NewsCard[] = [
    {
      imageUrl: '../../../../assets/images/background-card4.jpg',
      title: 'Perfomance Engineer',
      published: '15 days ago',
      description: 'Storytelling in enterprise apps is an art of connecting the dots for the knowledge workers by positioning them at the centre of the enterprise apps and reimagining their pain points'
    },
    {
      imageUrl: '../../../../assets/images/background-card1.jpg',
      title: 'Quality Assurance',
      published: '15 days ago',
      description: 'Storytelling in enterprise apps is an art of connecting the dots for the knowledge workers by positioning them at the centre of the enterprise apps and reimagining their pain points'
    },
    {
      imageUrl: '../../../../assets/images/background-card3.jpg',
      title: 'Quality Assurance',
      published: '15 days ago',
      description: 'Storytelling in enterprise apps is an art of connecting the dots for the knowledge workers by positioning them at the centre of the enterprise apps and reimagining their pain points'
    },
    {
      imageUrl: '../../../../assets/images/background-card2.jpg',
      title: 'Quality Assurance',
      published: '15 days ago',
      description: 'Storytelling in enterprise apps is an art of connecting the dots for the knowledge workers by positioning them at the centre of the enterprise apps and reimagining their pain points Storytelling in enterprise apps is an art of connecting the dots for the knowledge workers by positioning them at the centre of the enterprise apps and reimagining their pain points Storytelling in enterprise apps is an art of connecting the dots for the knowledge workers by positioning them at the centre of the enterprise apps and reimagining their pain points Storytelling in enterprise apps is an art of connecting the dots for the knowledge workers by positioning them at the centre of the enterprise apps and reimagining their pain points'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
