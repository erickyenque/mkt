import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-informative-section',
  templateUrl: './informative-section.component.html',
  styleUrls: ['./informative-section.component.css']
})
export class InformativeSectionComponent implements OnInit {
  
  img = 'https://pymstatic.com/87428/conversions/elementos-anuncio-publicidad-wide.jpg'

  constructor() { }

  ngOnInit(): void {
  }

}
