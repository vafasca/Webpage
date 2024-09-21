import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-custom-news',
  templateUrl: './card-custom-news.component.html',
  styleUrls: ['./card-custom-news.component.css']
})
export class CardCustomNewsComponent implements OnInit {

  @Input() imageUrl!: string;
  @Input() title!: string;
  @Input() published!: string;
  @Input() description!: string

  constructor() { }

  ngOnInit(): void {
  }

}
