import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {HttpClientModule} from '@angular/common/http';

import { homeRoutes } from './home-routes';
import { HomeComponent } from './home/home.component';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    NgbTooltipModule,
    RouterModule.forChild(homeRoutes)
  ]
})
export class HomeModule { }
