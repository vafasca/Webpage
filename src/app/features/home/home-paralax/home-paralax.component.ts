import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home-paralax',
  templateUrl: './home-paralax.component.html',
  styleUrls: ['./home-paralax.component.css']
})
export class HomeParalaxComponent implements OnInit {

  bgPositionY = 0;
  overlayOpacity = 0.5;
  contentScale = 1;
  constructor() { }
  @HostListener('window:scroll', [])
  onScroll(): void {
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    this.bgPositionY = scrollPosition * 0.5;
    this.overlayOpacity = 0.5 - scrollPosition / 1000; /* Cambia el 1000 por el valor de la altura de la sección para ajustar el efecto de superposición */
    this.contentScale = 1 - scrollPosition / 1000; /* Cambia el 1000 por el valor de la altura de la sección para ajustar el efecto de escala */
  }

  ngOnInit(): void {
  }

}
