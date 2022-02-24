import { Component, OnInit } from '@angular/core';
import {FetchInfoService} from '../fetch-info.service';

@Component({
  selector: 'app-viewable-area',
  templateUrl: './viewable-area.component.html',
  styleUrls: ['./viewable-area.component.css']
})
export class ViewableAreaComponent implements OnInit {

  longText = `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog
  from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was
  originally bred for hunting.`;

  //initialize variable in constructor for handling http requests 
  constructor() { }

  ngOnInit(): void {
    //subscribe to FetchInfoServive to access the right data
  }

}
