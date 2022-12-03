import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule,Routes } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';
import { AppComponent } from './app.component';
import { HomeComponent } from './dashboard/home/home.component';
import { AboutUsComponent } from './dashboard/about-us/about-us.component';
import { MenusComponent } from './dashboard/menus/menus.component';

const routes:Routes =[
  {path:'',redirectTo:'/home' ,pathMatch:'full'},
  {path:'home/about-us',component:AboutUsComponent},
  {path:'home/menus',component:MenusComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutUsComponent,
    MenusComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [{provide: APP_BASE_HREF, useValue: '/home'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
