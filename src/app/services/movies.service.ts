import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MovieShow } from '../classes/movie-show';
import { MOVIES } from '../mocks/movies';
import { Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private http: HttpClient) { }
  private moviesUrl = 'localhost:9999/api/gateway/moviesservice/movie';

  /*
  getMovies() {
    return this.http.get<MovieShow[]>(this.moviesUrl);
  }*/
  getMovies(): Observable<MovieShow[]> {
    return of(MOVIES);
  }
}
