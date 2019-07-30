import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { FormGroup, FormControl } from '@angular/forms';
import { HEROES } from '../mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes = HEROES.list;
  newHeroForm: FormGroup;
  selectedHero;

  constructor() {
    this.__creeateNewHeroForm();
    this.newHeroForm.valueChanges.subscribe((data: any) => {
      this.selectedHero.name = data.name;
    });
  }

  ngOnInit() {}

  __creeateNewHeroForm() {
    this.newHeroForm = new FormGroup({
      name: new FormControl('')
    });
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}
