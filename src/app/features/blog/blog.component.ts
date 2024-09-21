import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
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
