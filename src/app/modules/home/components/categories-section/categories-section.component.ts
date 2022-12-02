import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categories-section',
  templateUrl: './categories-section.component.html',
  styleUrls: ['./categories-section.component.css']
})
export class CategoriesSectionComponent implements OnInit {

  img = 'https://pymstatic.com/87428/conversions/elementos-anuncio-publicidad-wide.jpg'

  constructor() { }

  ngOnInit(): void {
  }

}
