import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  contactEmail1!: string;
  contactEmail2!: string;
  myEmail!: string;

  constructor() {
    this.contactEmail1 = 'talent.recruitment@dharbor.com';
    this.contactEmail2 = 'recursos.humanos@dharbor.com';
    this.myEmail = 'baov1995@gmail.com';
  }

  ngOnInit(): void {
  }

}
