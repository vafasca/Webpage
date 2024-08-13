import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-career',
  templateUrl: './card-career.component.html',
  styleUrls: ['./card-career.component.css']
})
export class CardCareerComponent implements OnInit {

  @Input() imageUrl!: string;
  @Input() title!: string;
  @Input() location!: string;
  @Input() published!: string;

  constructor() { }

  ngOnInit(): void {
  }

}
