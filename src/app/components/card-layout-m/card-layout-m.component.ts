import {Component, OnInit} from '@angular/core';

export interface Tile {
  color :string;
  cols :number;
  rows :number;
  text :string;
}

@Component({
  selector: 'app-card-layout-m',
  templateUrl: './card-layout-m.component.html',
  styleUrls: ['./card-layout-m.component.css']
})
export class CardLayoutMComponent implements OnInit{

  constructor() { }

  ngOnInit() { }

  tiles : Tile[] = [
    {text: 'One', cols: 3, rows: 1, color: 'lightblue'},
    {text: 'Two', cols: 1, rows: 2, color: 'lightgreen'},
    {text: 'Three', cols: 1, rows: 1, color: 'lightpink'},
    {text: 'Four', cols: 2, rows: 1, color: '#DDBDF1'},
  ]
}
