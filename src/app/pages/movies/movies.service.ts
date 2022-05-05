import { Injectable } from '@angular/core';
import { movie } from '../../../environments/environment';
import { ApiService } from '../../service/api.service';

interface MovieLink {
  id: number;
  url: string;
  episodeName: string;
}

export interface IMovie {
  id?: number;
  name: string;
  year: number;
  imdb: number;
  country: string;
  director: string;
  time: number;
  quality: string;
  category: string;
  trailer: string;
  content: string;
  type: string;
  episodeNumber: number;
  status?: boolean;
  createdAt?: Date;
  image: string;
  countView: number;
  movieLinks: MovieLink[];
}

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(
    private apiService: ApiService
  ) { }

  // name year country category type time episodeNumber

  deleteMovieById(id: string) {
    return this.apiService.deleteData<string>(`${movie}delete/${id}`);
  }

  editMovie(body: IMovie) {
    return this.apiService.putData<IMovie>(`${movie}update/`, body);
  }

  getMovieById(id: string) {
    return this.apiService.getData<IMovie>(`${movie}find/${id}`);
  }

  addMovie(body: IMovie) {
    return this.apiService.postData<IMovie>(`${movie}insert/`, body);
  }

  getAll() {
    return this.apiService.getData<IMovie[]>(`${movie}find-all`);
  }
}
