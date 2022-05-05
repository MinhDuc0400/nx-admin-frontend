import { Injectable } from '@angular/core';
import { order } from '../../../environments/environment';
import { ApiService } from '../../service/api.service';
export interface IUser {
  id: number;
  fullName: string;
  email: string;
  mobile: string;
  sex: boolean;
  dateOfBirth: Date;
  password: string;
  position: string;
  image: string;
  status: boolean;
}

export interface IOrder {
  id: number;
  startAt: Date;
  endAt: Date;
  status: boolean;
  user: IUser;
}
@Injectable({
  providedIn: 'root',
})
export class OrderService {

  constructor(
    private apiService: ApiService,
  ) { }

  findAll() {
    return this.apiService.getData<IOrder[]>(`${order}find-all`);
  }
}
