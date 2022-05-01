import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  NbCardModule,
  NbTreeGridModule,
  NbIconModule,
  NbInputModule,
  NbDialogModule,
  NbButtonModule,
  NbRadioModule,
  NbDatepickerModule } from '@nebular/theme';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { ThemeModule } from '../../@theme/theme.module';
import { TablesRoutingModule } from '../tables/tables-routing.module';
import { UsersComponent } from './users.component';
import { DialogCreateUserComponent } from './dialog-create-user/dialog-create-user.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [UsersComponent, DialogCreateUserComponent],
  imports: [
    CommonModule,
    NbCardModule,
    NbTreeGridModule,
    ReactiveFormsModule,
    NbIconModule,
    NbInputModule,
    ThemeModule,
    NbRadioModule,
    TablesRoutingModule,
    Ng2SmartTableModule,
    NbDatepickerModule,
    NbButtonModule,
    NbDialogModule.forChild(),
  ],
})
export class UsersModule { }
