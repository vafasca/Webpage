import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-custom-news',
  templateUrl: './card-custom-news.component.html',
  styleUrls: ['./card-custom-news.component.css']
})
export class CardCustomNewsComponent implements OnInit {

  @Input() imageCustomUrl!: string;
  @Input() titleCustom!: string;
  @Input() publishedCustom!: string;
  @Input() descriptionCustom!: string

  constructor() { }

  ngOnInit(): void {
  }

}
