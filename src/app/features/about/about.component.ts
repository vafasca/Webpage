import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  isButtonVisible: boolean = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isButtonVisible = window.pageYOffset > 300;
  }

  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  constructor() { }

  ngOnInit(): void {
  }

}
