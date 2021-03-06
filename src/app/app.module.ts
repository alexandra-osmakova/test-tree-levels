import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatIconModule} from '@angular/material/icon'
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CdkTreeModule} from '@angular/cdk/tree';
import {CdkTableModule} from '@angular/cdk/table';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppNavComponent } from './app-nav/app-nav.component';
import { MainPageComponent } from './main-page/main-page.component';
import { MainPageMenuComponent } from './main-page-menu/main-page-menu.component';
import { MainPageTableComponent } from './main-page-table/main-page-table.component';

@NgModule({
  declarations: [
    AppComponent,
    AppNavComponent,
    MainPageComponent,
    MainPageMenuComponent,
    MainPageTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CdkTreeModule,
    MatIconModule,
    CdkTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
