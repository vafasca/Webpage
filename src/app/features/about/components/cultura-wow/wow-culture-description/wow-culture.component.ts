import { Component, OnInit } from '@angular/core';
import { StarBackgroundService } from 'src/app/shared/services/star-background.service';

@Component({
  selector: 'app-wow-culture',
  templateUrl: './wow-culture.component.html',
  styleUrls: ['./wow-culture.component.css']
})
export class WowCultureComponent implements OnInit {

  constructor(private backgroundService: StarBackgroundService) { }

  ngOnInit(): void {
    this.backgroundService.addStars('.star-container', 50);
  }

}
