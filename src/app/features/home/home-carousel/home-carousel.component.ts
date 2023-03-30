import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-carousel',
  templateUrl: './home-carousel.component.html',
  styleUrls: ['./home-carousel.component.css']
})
export class HomeCarouselComponent implements OnInit {

  items = [
    { image: 'https://via.placeholder.com/300x150', title: 'Item 1', description: 'Description 1' },
    { image: 'https://via.placeholder.com/300x150', title: 'Item 2', description: 'Description 2' },
    { image: 'https://via.placeholder.com/300x150', title: 'Item 3', description: 'Description 3' },
    { image: 'https://via.placeholder.com/300x150', title: 'Item 4', description: 'Description 4' },
    { image: 'https://via.placeholder.com/300x150', title: 'Item 5', description: 'Description 5' }
  ];

  currentSlide: number = 0;

  constructor() { }

  ngOnInit() {

  }


}
