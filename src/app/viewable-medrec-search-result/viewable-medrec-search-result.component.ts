import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-viewable-medrec-search-result',
  templateUrl: './viewable-medrec-search-result.component.html',
  styleUrls: ['./viewable-medrec-search-result.component.css']
})
export class ViewableMedrecSearchResultComponent implements OnInit {

  id;
  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.id = parseInt(params.get('id'));
    }); 
  }

}
