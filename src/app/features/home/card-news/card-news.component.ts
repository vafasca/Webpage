import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-news',
  templateUrl: './card-news.component.html',
  styleUrls: ['./card-news.component.css']
})
export class CardNewsComponent implements OnInit {

  @Input() imageUrl!: string;
  @Input() title!: string;
  @Input() published!: string;
  @Input() description!: string

  constructor() { }

  ngOnInit(): void {
  }

}
