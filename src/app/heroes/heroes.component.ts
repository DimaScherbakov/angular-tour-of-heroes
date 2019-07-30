import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };

  newHeroForm: FormGroup;

  constructor() {
    this.__creeateNewHeroForm();
    this.newHeroForm.valueChanges.subscribe((data: any) => {
      this.hero.name = data.name;
    });
  }

  ngOnInit() {}

  __creeateNewHeroForm() {
    this.newHeroForm = new FormGroup({
      name: new FormControl(this.hero.name)
    });
  }
}
