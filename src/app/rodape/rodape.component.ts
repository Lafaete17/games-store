import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rodape',
  templateUrl: './rodape.component.html',
  styleUrls: ['./rodape.component.scss']
})
export class RodapeComponent implements OnInit {

  currentYear: number = new Date().getFullYear();

  constructor() { }

  ngOnInit(): void {
  }

}

