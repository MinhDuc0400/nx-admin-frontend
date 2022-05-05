import { NgModule } from '@angular/core';
import { NbMenuModule } from '@nebular/theme';

import { ThemeModule } from '../@theme/theme.module';
import { PagesComponent } from './pages.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { ECommerceModule } from './e-commerce/e-commerce.module';
import { PagesRoutingModule } from './pages-routing.module';
import { MiscellaneousModule } from './miscellaneous/miscellaneous.module';
import { UsersModule } from './users/users.module';
import { MoviesComponent } from './movies/movies.component';
import { MoviesModule } from './movies/movies.module';
import { OrderComponent } from './order/order.component';
import { OrderModule } from './order/order.module';

@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    NbMenuModule,
    DashboardModule,
    ECommerceModule,
    MiscellaneousModule,
    UsersModule,
    MoviesModule,
    OrderModule,
  ],
  declarations: [
    PagesComponent,
  ],
})
export class PagesModule {
}
