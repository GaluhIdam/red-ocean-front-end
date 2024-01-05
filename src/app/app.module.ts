import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './modules/user/home/home.module';
import { UserLayoutComponent } from './shared/user-layout/user-layout.component';
import { ProjectModule } from './modules/user/project/project.module';
import { DocumentationModule } from './modules/user/documentation/documentation.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppService } from './app.service';

@NgModule({
  declarations: [
    AppComponent,
    UserLayoutComponent,
  ],
  imports: [
    FontAwesomeModule,
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    ProjectModule,
    DocumentationModule
  ],
  providers: [
    AppService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
