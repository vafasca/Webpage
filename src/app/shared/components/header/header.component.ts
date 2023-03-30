import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  logo:string = "../../../../assets/images/Group-169413.png";

  constructor() { }

  ngOnInit(): void {
  }



}
