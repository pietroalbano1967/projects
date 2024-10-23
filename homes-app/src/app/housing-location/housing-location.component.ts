import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocation } from '../housinglocation';

@Component({
  selector: 'app-housing-location',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class ="Listing">
      <img class="Listing-photo" [src]="housingLocation.photo"
      alt= "Exterior photo of {{housingLocation.name}}">
      <h2 class="Listing-heading">{{housingLocation.name}}</h2>
      <p class="Listing-location">{{housingLocation.city}},
      {{housingLocation.state}}</p>
    </section>
  `,
  styleUrls: ['./housing-location.component.css']
})
export class HousingLocationComponent {
  @Input() housingLocation!:HousingLocation;
}
 