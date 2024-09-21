import { Component, OnInit } from '@angular/core';
import { CustomNewsCard } from '../models/custom-news-card.model';

@Component({
  selector: 'app-custom-card-list-news',
  templateUrl: './custom-card-list-news.component.html',
  styleUrls: ['./custom-card-list-news.component.css']
})
export class CustomCardListNewsComponent implements OnInit {

  customCards: CustomNewsCard[] = [
    {
      imageCustomUrl: 'https://www.digitalharbor.com/wp-content/uploads/2022/08/0822_Blog_Banner-354x222.png',
      titleCustom: 'Next Big Thing: Storytelling in Enterprise Apps!',
      publishedCustom: '15 days ago',
      descriptionCustom: 'Storytelling in enterprise apps is an art of connecting the dots for the knowledge workers by positioning them at the centre of the enterprise apps and reimagining their pain points into an opportunity to transform and grow.'
    },
    {
      imageCustomUrl: 'https://www.digitalharbor.com/wp-content/uploads/2022/06/Blog-Banner-Header-354x222.png',
      titleCustom: 'Who are Knowledge Workers and Why UX is often Ignored for Them?',
      publishedCustom: '15 days ago',
      descriptionCustom: 'Knowledge Worker is a new-age word used for the white-collar professionals who work on machines and perform administrative, clerical and intellectual tasks. These knowledge workers are high-level professionals who use theoretical and analytical knowledge and go through formal training to develop products and services. Today, the position of knowledge workers is at a very valuable level as they have a lot to offer to the business world.'
    },
    {
      imageCustomUrl: 'https://www.digitalharbor.com/wp-content/uploads/2022/05/Blog-banner-1x-354x222.png',
      titleCustom: '4 Must-Haves that Knowledge Workers Never Knew, Never Asked, Never Got!',
      publishedCustom: '15 days ago',
      descriptionCustom: '“Knowledge Workers”, are the people who play an integral role in driving a successful journey for any organization by offering their skills and expertise in a specific domain. These knowledge workers are the sources of innovation, idea-building, strategizing and smart work that happens within a company. Though knowledge workers offer a vast range of services to the enterprise world, however, they are deprived of many “WOW” enterprise apps that they never knew, never asked for, and never got. '
    },
    {
      imageCustomUrl: 'https://www.digitalharbor.com/wp-content/uploads/2021/12/Blog-banner-–-1-354x222.png',
      titleCustom: 'Divorce the Legacy Enterprise Apps: Think Social Enterprise Apps',
      publishedCustom: '15 days ago',
      descriptionCustom: 'Enterprise applications are the backbone to operate the business, solve critical issues, and connect at a large scale within the enterprise industry. It also helps companies collaborate within its horizon as well as with other companies, and of course, with the data, information, and more. These enterprise applications are everything a company blindly depends on as they are used as long as company exists and passed on to another company, which is why these apps generally create a “Legacy.”'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
