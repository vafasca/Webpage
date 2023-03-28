import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  responsiveNav!: HTMLElement | null;
  nav!: HTMLElement | null;
  test!: boolean;
  showNav = true;
  showNav2 = false;
  about = '/about';

  constructor() { }

  ngOnInit(): void {
  }

  toggleResponsiveNav() {
    this.responsiveNav = document.getElementById('responsive-nav');
    this.nav = document.getElementById('prueba');
    console.log(this.responsiveNav);
    console.log(this.nav);
    if (this.responsiveNav !== null && this.nav !== null) {
    this.responsiveNav.style.display = 'inline-block';
    }
  }
  // toggleResponsiveNav(){
  //   console.log(this.showNav);
  //   this.showNav = !this.showNav;
  //   this.showNav2 = !this.showNav;
  // }
}
