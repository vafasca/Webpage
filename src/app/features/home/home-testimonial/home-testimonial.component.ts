import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-testimonial',
  templateUrl: './home-testimonial.component.html',
  styleUrls: ['./home-testimonial.component.css']
})
export class HomeTestimonialComponent implements OnInit {

  slidesStore = [
    {
      id: 1,
      src: 'https://digitalharborbolivia.com/wp-content/uploads/2023/05/Rommel.jpg',
      alt: 'Rommel Loayza',
      title: 'Ser un DHR',
      comment: 'Somos apasionados y estamos locos. Eso nos hace WOW y por eso vamos a cambiar el mundo.',
      name: 'Rommel Loayza',
      position: 'Software Architect'
    },
    {
      id: 2,
      src: 'https://digitalharborbolivia.com/wp-content/uploads/2023/05/Scott.jpg',
      alt: 'Scott Wood',
      title: 'Digital Harbor',
      comment: 'Digital Harbor is transforming how we work in unexpected and powerful ways',
      name: 'Scott Wood',
      position: 'Director of Engineering'
    },
    {
      id: 3,
      src: 'https://digitalharborbolivia.com/wp-content/uploads/2023/05/Mike.jpg',
      alt: 'Mike Tingey',
      title: 'Innovation at DH',
      comment: 'Innovation at DH is an idea that takes a leap beyond conventional thinking, which greatly improves the usability of a computer',
      name: 'Mike Tingey',
      position: 'Chief Architect'
    },
    {
      id: 4,
      src: 'https://digitalharborbolivia.com/wp-content/uploads/2023/05/Rohit.jpg',
      alt: 'Rohit Agarwal',
      title: 'Changing the World',
      comment: 'It requires to be curious to change the world, and to do it, it requires to have courage...',
      name: 'Rohit Agarwal',
      position: 'President and Chief Innovations Officer'
    }
  ];

  breakpoints = {
    0: {
      slidesPerView: 1
    },
    600: {
      slidesPerView: 2
    },
    1000: {
      slidesPerView: 3
    }
  };

  constructor() { }

  ngOnInit(): void {
  }

}
