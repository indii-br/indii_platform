import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { createAvatar } from '@dicebear/avatars';
import * as style from '@dicebear/avatars-identicon-sprites';

@Component({
  selector: 'app-avatar-default',
  templateUrl: './avatar-default.component.html'
})
export class AvatarDefaultComponent implements OnInit {

  svgAvatar: any;
  @Input('seed') seed = null;

  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    if (this.seed) {
      const svgAvatar = createAvatar(style, {
        seed: this.seed,
        backgroundColor: '#FFFFFF',
        scale: 90
      });

      this.svgAvatar = this.sanitizer.bypassSecurityTrustHtml(svgAvatar)
    }
  }
}
