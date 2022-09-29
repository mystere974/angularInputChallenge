import { Component, OnInit } from '@angular/core';

import { Developper } from '../models/developper.model';
import { Skill } from '../models/skill.model';

@Component({
  selector: 'app-developper',
  templateUrl: './developper.component.html',
  styleUrls: ['./developper.component.css']
})
export class DevelopperComponent implements OnInit {

  
  model: Developper= new Developper('valJean', 'jean', 25, '','le portrait de Jean ValJean', [
    new Skill('Vitesse', 'Triforce', 'A_Link_To_The_Past'),
    new Skill('Agilité', 'Champignon','Mari-O')
  ]);

  constructor() { }

  ngOnInit(): void {
    
  }

}
