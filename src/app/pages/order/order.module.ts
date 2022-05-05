import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { NbCardModule, NbTreeGridModule, NbIconModule, NbInputModule, NbRadioModule, NbDatepickerModule, NbButtonModule, NbSelectModule, NbDialogModule } from '@nebular/theme';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { ThemeModule } from '../../@theme/theme.module';
import { TablesRoutingModule } from '../tables/tables-routing.module';
import { OrderComponent } from './order.component';



@NgModule({
  declarations: [OrderComponent],
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
    NbSelectModule,
    NbDialogModule.forChild(),
  ],
})
export class OrderModule { }
