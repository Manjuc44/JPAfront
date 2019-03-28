import { Component, OnInit, Input } from '@angular/core';
import { Pocion } from '../pocion.model';

@Component({
  selector: 'app-pocion-grid',
  templateUrl: './pocion-grid.component.html',
  styleUrls: ['./pocion-grid.component.css']
})
export class PocionGridComponent implements OnInit {
  @Input() pociones:Pocion[];
  constructor() { }

  ngOnInit() {
  }

}
