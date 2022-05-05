import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { NbCardModule, NbTreeGridModule, NbIconModule, NbInputModule, NbRadioModule, NbDatepickerModule, NbButtonModule, NbDialogModule, NbSelectModule } from '@nebular/theme';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { ThemeModule } from '../../@theme/theme.module';
import { TablesRoutingModule } from '../tables/tables-routing.module';
import { MoviesComponent } from './movies.component';
import { DialogCreateMovieComponent } from './dialog-create-movie/dialog-create-movie.component';



@NgModule({
  declarations: [MoviesComponent, DialogCreateMovieComponent],
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
export class MoviesModule { }
