import { Component, OnInit } from '@angular/core';
import { MOVIES } from '../../mocks/movies';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.css']
})
export class InformationComponent implements OnInit {

  movie;
  stars = [];
  middleStars = [];

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.search();
    this.calcCalification(this.movie.stars);
  }

  search() {
    let id = +this.route.snapshot.paramMap.get('id');
    this.movie = MOVIES.find(x => x.id === id);
  }

  calcCalification(value: number) {
    let i = value;
    while (i - 20 >= 0) {
      this.stars.push(1);
      i -= 20;
    }
    console.log(i);
    if (i !== 0 && i - 20 < 0) {
      this.middleStars.push(1);
    }
  }
}
