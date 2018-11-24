import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { EventEmitter } from '@angular/core/src/event_emitter';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { ScrollingModule } from '@angular/cdk/scrolling';


import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PhotosComponent } from './photos/photos.component';
import { PictureComponent } from './picture/picture.component';
import { PinComponent } from './pin/pin.component';
import { PictureInitComponent } from './picture-init/picture-init.component';
import { PhotosInitComponent } from './photos-init/photos-init.component';


const routes: Routes = [

  { path: 'pines/:i', component: PinComponent },
];


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PhotosComponent,
    PictureComponent,
    PinComponent,
    PictureInitComponent,
    PhotosInitComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    NgbModule,
    ScrollingModule,
    InfiniteScrollModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
