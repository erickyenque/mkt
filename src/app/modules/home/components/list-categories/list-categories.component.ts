import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-categories',
  templateUrl: './list-categories.component.html',
  styleUrls: ['./list-categories.component.css']
})
export class ListCategoriesComponent implements OnInit {

  img = 'https://pymstatic.com/87428/conversions/elementos-anuncio-publicidad-wide.jpg'

  constructor() { }

  ngOnInit(): void {
  }

}
