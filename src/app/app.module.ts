import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './modules/home/home.module';
import { UserLayoutComponent } from './shared/user-layout/user-layout.component';
import { ProjectModule } from './modules/project/project.module';
import { DocumentationModule } from './modules/documentation/documentation.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppService } from './app.service';
import { SwiperModule } from 'swiper/angular';
import { SharedModule } from './shared/components/shared.module';
import { AboutModule } from './modules/about/about.module';

@NgModule({
  declarations: [AppComponent, UserLayoutComponent],
  imports: [
    FontAwesomeModule,
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    ProjectModule,
    DocumentationModule,
    AboutModule,
    SharedModule,
    SwiperModule,
  ],
  providers: [AppService],
  bootstrap: [AppComponent],
})
export class AppModule {}
