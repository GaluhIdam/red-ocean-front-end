import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { HeroComponent } from './components/hero/hero.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { ProjectShowcaseComponent } from './components/project-showcase/project-showcase.component';
import { LatestDocumentationComponent } from './components/latest-documentation/latest-documentation.component';
import { SharedModule } from 'src/app/shared/components/shared.module';

@NgModule({
  declarations: [
    HomeComponent,
    HeroComponent,
    CategoriesComponent,
    ProjectShowcaseComponent,
    LatestDocumentationComponent,
  ],
  imports: [CommonModule, HomeRoutingModule, SharedModule],
})
export class HomeModule {}
