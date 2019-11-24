import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { MovieShow } from 'src/app/classes/movie-show';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private service: MoviesService) { }

  moviesUp = [];
  moviesDown = [];
  stars = [];
  middleStars = [];
  ngOnInit() {
    this.getMovies();
  }

  getMovies() {
    let up = [];
    let down = [];
    this.service.getMovies().subscribe(movies => up = movies.slice(0, 5));
    this.service.getMovies().subscribe(movies => down = movies.slice(5, 10));
    for (let i = 0; i < up.length; i++) {
      this.calcCalification(up[i].stars)
      this.moviesUp.push([up[i], this.stars, this.middleStars]);
      this.stars = [];
      this.middleStars = [];
    }
    for (let i = 0; i < down.length; i++) {
      this.calcCalification(down[i].stars)
      this.moviesDown.push([down[i], this.stars, this.middleStars]);
      this.stars = [];
      this.middleStars = [];
    }
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
