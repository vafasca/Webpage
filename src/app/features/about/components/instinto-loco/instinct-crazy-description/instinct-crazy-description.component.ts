import { Component, OnInit } from '@angular/core';
import { StarBackgroundService } from 'src/app/shared/services/star-background.service';

@Component({
  selector: 'app-instinct-crazy-description',
  templateUrl: './instinct-crazy-description.component.html',
  styleUrls: ['./instinct-crazy-description.component.css']
})
export class InstinctCrazyDescriptionComponent implements OnInit {

  constructor(private backgroundService: StarBackgroundService) { }

  ngOnInit(): void {
    this.backgroundService.addStars('.star-container', 50);
  }

}
