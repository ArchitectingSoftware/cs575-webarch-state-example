import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';

import { StoreModule } from '@ngrx/store';
import { postReducer } from './reducers/post.reducer';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostListComponent } from './post-list/post-list.component';
import { MenuComponent } from './menu/menu.component'

import { Routes, RouterModule } from '@angular/router';
import { StateComponent } from './props/state/state.component';
import { StateChildComponent } from './props/state-child/state-child.component';
import { CarComponent } from './service/car/car.component';
import { DriverComponent } from './service/driver/driver.component';
import { DrivingSerice } from './service/driving.service';
import { GarageComponent } from './service/garage/garage.component'
 
const appRoutes: Routes = [
  {path: '', component:  MenuComponent},
  {path: 'redux', component: PostListComponent},
  {path: 'properties', component: StateComponent},
  {path: 'services', component: GarageComponent},
  { path: '**', redirectTo: '/' }
];

@NgModule({
  declarations: [
    AppComponent,
    PostListComponent,
    MenuComponent,
    StateComponent,
    StateChildComponent,
    CarComponent,
    DriverComponent,
    GarageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    StoreModule.forRoot({
      post: postReducer,
    })
  ],
  providers: [DrivingSerice],
  bootstrap: [AppComponent]
})
export class AppModule { }
