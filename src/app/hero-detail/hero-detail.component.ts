import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../hero';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  @Input() hero: Hero;
  newHeroForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location
  ) {
    this.__creeateNewHeroForm();
    this.newHeroForm.valueChanges.subscribe((data: any) => {
      this.hero.name = data.name;
    });
  }

  ngOnInit() {
    this.getHero();
  }

  __creeateNewHeroForm() {
    this.newHeroForm = new FormGroup({
      name: new FormControl('')
    });
  }

  onSelect(hero: Hero): void {
    this.hero = hero;
  }

  getHero(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.heroService.getHero(id).subscribe(hero => (this.hero = hero));
  }
  goBack(): void {
    this.location.back();
  }
}
