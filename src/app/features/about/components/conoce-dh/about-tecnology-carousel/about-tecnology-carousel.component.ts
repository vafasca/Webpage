import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-tecnology-carousel',
  templateUrl: './about-tecnology-carousel.component.html',
  styleUrls: ['./about-tecnology-carousel.component.css']
})
export class AboutTecnologyCarouselComponent implements OnInit {

  slidesStore = [
    {
      id: 1,
      src: 'assets/images/1-150x150.png',
      alt: 'MySQL'
    },
    {
      id: 2,
      src: 'assets/images/2-150x150.png',
      alt: 'HTML 5'
    },
    {
      id: 3,
      src: 'assets/images/3-150x150.png',
      alt: 'Amazon Web Service'
    },
    {
      id: 4,
      src: 'assets/images/4-150x150.png',
      alt: 'Spring Boot'
    },
    {
      id: 5,
      src: 'assets/images/5-150x150.png',
      alt: 'NodeJS'
    },
    {
      id: 6,
      src: 'assets/images/6-150x150.png',
      alt: 'JavaScript'
    },
    {
      id: 7,
      src: 'assets/images/7-150x150.png',
      alt: 'Docker'
    },
    {
      id: 8,
      src: 'assets/images/8-150x150.png',
      alt: 'Azure'
    },
    {
      id: 9,
      src: 'assets/images/9-150x150.png',
      alt: 'Angular'
    }
  ];

  breakpoints = {
    0: {
      slidesPerView: 1
    },
    400:{
      slidesPerView: 2
    },
    650: {
      slidesPerView: 3
    },
    1200: {
      slidesPerView: 6
    }
  };

  constructor() { }

  ngOnInit(): void {
  }

}
