import { Injectable } from '@angular/core';
import { statistic } from '../../../environments/environment';
import { ApiService } from '../../service/api.service';
export interface IStatistic {
  label: string[];
  data: number[];
}

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(
    private apiService: ApiService
  ) { }

  getTotalMoney() {
    return this.apiService.getData<number>(`${statistic}total-money`);
  }

  getTotalUser() {
    return this.apiService.getData<number>(`${statistic}total-user`);
  }

  getTotalOrder() {
    return this.apiService.getData<number>(`${statistic}total-order`);
  }

  getTotalView() {
    return this.apiService.getData<number>(`${statistic}total-view`);
  }

  getIncomeLast5Month() {
    return this.apiService.getData<IStatistic>(`${statistic}income-last-5-month`);
  }

  getUserTotalMoney() {
    return this.apiService.getData<IStatistic>(`${statistic}user-total-money`);
  }

  getMovieViewCount() {
    return this.apiService.getData<IStatistic>(`${statistic}movie-view-count`);
  }
}
