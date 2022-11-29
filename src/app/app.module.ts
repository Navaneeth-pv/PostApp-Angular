import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddPostComponent } from './add-post/add-post.component';
import { ViewAllPostComponent } from './view-all-post/view-all-post.component';
import { NavigationComponent } from './navigation/navigation.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http' ;

const myRoute:Routes=[
  {
    path:"add",
    component: AddPostComponent
  
  },
  {
    path:"viewall",
    component:ViewAllPostComponent
    
  }
  
]

@NgModule({
  declarations: [
    AppComponent,
    AddPostComponent,
    ViewAllPostComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRoute),
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
