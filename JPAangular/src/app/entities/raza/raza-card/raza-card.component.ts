import { Component, OnInit, Input } from '@angular/core';
import { Raza } from '../raza.model';
import { Router } from '@angular/router';
import { RazaService } from '../raza.service';

@Component({
  selector: 'app-raza-card',
  templateUrl: './raza-card.component.html',
  styleUrls: ['./raza-card.component.css']
})
export class RazaCardComponent implements OnInit {

  @Input() race: Raza[];
  @Input() index: number;

  constructor(private router: Router, private _razaService: RazaService) {

  }

  ngOnInit() {
    
    //this._razaService.tipoBando();
  }

  verRaza() {
    this.router.navigate(['/razas', this.index]);
  }


}
