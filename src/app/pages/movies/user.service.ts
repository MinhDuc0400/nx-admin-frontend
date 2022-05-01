import { Injectable } from '@angular/core';
import { user } from '../../../environments/environment';
import { ApiService } from '../../service/api.service';

export interface IUser {
  id?: number;
  fullName: string;
  email: string;
  mobile: string;
  sex: boolean;
  dateOfBirth: Date;
  password: string;
  position: string;
  image: string;
  status?: boolean;
}

@Injectable({
  providedIn: 'root',
})



export class UserService {

  constructor(
    private apiService: ApiService,
  ) { }

  deleteUserById(id: string) {
    return this.apiService.deleteData<string>(`${user}delete/${id}`);
  }

  editUser(body: IUser) {
    return this.apiService.putData<IUser>(`${user}update/`, body);
  }

  getUserById(id: string) {
    return this.apiService.getData<IUser>(`${user}find/${id}`);
  }

  addUser(body: IUser) {
    return this.apiService.postData<IUser>(`${user}insert/`, body);
  }

  getAll() {
    return this.apiService.getData<IUser[]>(`${user}find-all`);
  }
}
