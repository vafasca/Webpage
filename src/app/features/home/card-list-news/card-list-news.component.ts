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
      iframeUrl: 'https://www.linkedin.com/embed/feed/update/urn:li:share:7239629441776128001',
      title: 'Next Big Thing: Storytelling in Enterprise Apps!',
      linkedInUrl: 'https://www.linkedin.com/feed/update/urn:li:share:7239629441776128001'
    },
    {
      iframeUrl: 'https://www.linkedin.com/embed/feed/update/urn:li:share:7238906490269433856',
      title: 'Who are Knowledge Workers and Why UX is often Ignored for Them?',
      linkedInUrl: 'https://www.linkedin.com/feed/update/urn:li:share:7239629441776128002'
    },
    {
      iframeUrl: 'https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7229200598112350208',
      title: 'Who are Knowledge Workers and Why UX is often Ignored for Them?',
      linkedInUrl: 'https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7229200598112350208'
    },
    {
      iframeUrl: 'https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7194353418793062402',
      title: 'Who are Knowledge Workers and Why UX is often Ignored for Them?',
      linkedInUrl: 'https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7194353418793062402'
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
