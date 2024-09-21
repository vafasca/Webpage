import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Webpage';

  ngAfterViewInit() {
    setTimeout(() => {
      const preloader = document.getElementById('preloader');
      if (preloader) {
        preloader.classList.add('fade-out');

        setTimeout(() => {
          preloader.remove();
        }, 1000);
      }
    }, 5000);
  }
}
