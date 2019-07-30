import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../hero';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  @Input() hero: Hero;
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
      name: new FormControl('')
    });
  }

  onSelect(hero: Hero): void {
    this.hero = hero;
  }
}
