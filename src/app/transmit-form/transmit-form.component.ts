import { Component } from '@angular/core';

import { Hero } from '../hero';

@Component({
  selector: 'app-transmit-form',
  templateUrl: './transmit-form.component.html',
  styleUrls: ['./transmit-form.component.css']
})
export class HeroFormComponent {

  model = new Hero(1, 'http://url', 'demo_app', 'ramya', 'logon_journy');

  submitted = false;

  onSubmit() { this.submitted = true; 
  
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
