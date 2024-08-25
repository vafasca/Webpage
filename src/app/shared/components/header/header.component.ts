import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  isNavActive: boolean = false;
  logo: string = '../../../../assets/images/HD-BLANCO.png';

  constructor() {}

  toggleNav() {
    this.isNavActive = !this.isNavActive;
  }

  @HostListener('document:click', ['$event'])
  onClickOutside(event: MouseEvent) {
    const clickedElement = event.target as HTMLElement;
    const navMenu = document.querySelector('.nav-menu');
    const burgerIcon = document.querySelector('.burger-icon');

    if (
      !navMenu?.contains(clickedElement) &&
      !burgerIcon?.contains(clickedElement) &&
      this.isNavActive
    ) {
      this.isNavActive = false;
    }
  }

  ngOnInit(): void {}
}
