import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectRoutingModule } from './project-routing.module';
import { ProjectComponent } from './project.component';
import { HeroComponent } from './components/hero/hero.component';
import { WebsiteComponent } from './components/website/website.component';
import { MobileComponent } from './components/mobile/mobile.component';
import { SwiperModule } from 'swiper/angular';


@NgModule({
  declarations: [
    ProjectComponent,
    HeroComponent,
    WebsiteComponent,
    MobileComponent,
  ],
  imports: [CommonModule, ProjectRoutingModule, SwiperModule],
})
export class ProjectModule {}
