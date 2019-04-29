import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

import { AstronautService } from './services/astronautservice.service';

import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';

import { FetchAstronautComponent } from './fetchastronaut/fetchastronaut.component';
import { AddAstronaut } from './addastronaut/addastronaut.component';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    FetchAstronautComponent,
    AddAstronaut
  ],
  imports: [
    CommonModule,
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      { path: 'fetch-astronaut', component: FetchAstronautComponent },
      { path: 'register-astronaut', component: AddAstronaut },
      { path: 'astronaut/edit/:id', component: AddAstronaut },
      { path: '**', redirectTo: 'home' }
    ])
  ],
  providers: [AstronautService],
  bootstrap: [AppComponent]
})
export class AppModule { }
