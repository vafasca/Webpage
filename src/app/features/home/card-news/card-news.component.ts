import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-card-news',
  templateUrl: './card-news.component.html',
  styleUrls: ['./card-news.component.css']
})
export class CardNewsComponent implements OnInit {

  @Input() iframeUrl!: string;
  @Input() title!: string;
  @Input() linkedInUrl!: string;

  safeIframeUrl!: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    // Sanitizado la URL del iframe
    this.safeIframeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.iframeUrl);
  }

}
