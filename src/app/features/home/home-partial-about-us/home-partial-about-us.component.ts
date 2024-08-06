import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-partial-about-us',
  templateUrl: './home-partial-about-us.component.html',
  styleUrls: ['./home-partial-about-us.component.css']
})
export class HomePartialAboutUsComponent implements OnInit {
  mostrar: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  hideImage() {
    this.mostrar = false;
    const videoFrame = document.getElementById('videoFrame') as HTMLIFrameElement;
    const videoSrc = videoFrame.src;
    videoFrame.src = videoSrc + "&autoplay=1";
  }
}
