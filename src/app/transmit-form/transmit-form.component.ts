import { Component } from '@angular/core';

import { Hero } from '../hero';
declare const com: any;
declare const xmui: any;
declare const xmsdk: any;

let sdk = xmsdk.XmSdk();

@Component({
  selector: 'app-transmit-form',
  templateUrl: './transmit-form.component.html',
  styleUrls: ['./transmit-form.component.css']
})
export class HeroFormComponent {

  model;

  initTransmit() {
    this.model = new Hero(1, 'http://url', 'demo_app', 'ramya', 'logon_journy');
  }

  constructor() {
    this.initTransmit();
  }


  submitted = false;

  onSubmit() {
    this.submitted = true;

  }


  newHero() {
    this.model = new Hero(1, '', '', '', '');
  }


  //////// NOT SHOWN IN DOCS ////////

  // Reveal in html:
  //   Name via form.controls = {{showFormControls(heroForm)}}
  showFormControls(form: any) {
    return form && form.controls.name &&
      form.controls.name.value; // Dr. IQ
  }

  /////////////////////////////

}
