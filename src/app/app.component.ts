import { Component, OnInit } from "@angular/core";
import * as LogRocket from 'logrocket';
import { environment } from "src/environments/environment";

declare var window: any;
declare var dataLayer: any;

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
})
export class AppComponent implements OnInit {
  onActivate(event) {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'auto'
    });
  }

  ngOnInit(): void {
    if (environment.production) {
      window.dataLayer = window.dataLayer || [];
      function gtag() { dataLayer.push(arguments); }
      //@ts-ignore
      gtag('js', new Date());
      //@ts-ignore
      gtag('config', 'G-JBWNX0G3YF');
    }
  }
}
