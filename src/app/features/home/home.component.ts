import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  hola: string = 'https://dl.dropboxusercontent.com/s/b4ej0tf2pe2ycz3/a.png'

  constructor() { }

  ngOnInit(): void {
  }

}
