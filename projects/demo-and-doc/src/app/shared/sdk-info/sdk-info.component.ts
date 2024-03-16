import { Component, Input, OnInit } from '@angular/core';
import { BnAnimateOnScrollComponent } from '@binom/sdk-animation/aos';
import { BnPrismBoxComponent } from '@binom/sdk-prism/code-box';

@Component({
  selector: 'app-sdk-info',
  standalone: true,
  imports: [BnPrismBoxComponent, BnAnimateOnScrollComponent],
  templateUrl: './sdk-info.component.html',
  styleUrl: './sdk-info.component.scss'
})
export class SdkInfoComponent implements OnInit {

  @Input() sdk:string = '';
  @Input() version:string = '';
  @Input() assets:string[] = [];


  code:string = '';
  code2:string = '';
  code3:string = '';

  constructor(){
    
  }

  ngOnInit(): void {
    this.code = 'npm install @binom/' + this.sdk
    this.code2 =  `"compilerOptions": {
  "paths": {
    "@binom/${this.sdk}/*": [
    "@binom/${this.sdk}/*"
    ],
    "@binom/${this.sdk}": [
      "@binom/${this.sdk}"
    ], ...`;

      this.code3 = `"yourApp": {
    "projectType": "application",
    ...
    "architect": {
      "build": {
        "builder": "@angular-devkit/build-angular:application",
        "options": {
          ...
          "assets": [
            "projects/yourApp/src/favicon.ico",
            "projects/yourApp/src/assets",
            {
              "glob": "**/*",
              "input": "@binom/${this.sdk}/assets",
              "output": "assets"
            } ...`;
  
  }



}
