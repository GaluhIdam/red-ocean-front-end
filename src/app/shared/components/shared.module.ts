import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardArticleComponent } from './card-article/card-article.component';
import { CardProjectComponent } from './card-project/card-project.component';
import { CardProjectStackComponent } from './card-project-stack/card-project-stack.component';
import { HeaderSectionComponent } from './header-section/header-section.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { TruncatePipe } from 'src/app/core/utilities/truncate.pipe';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    CardArticleComponent,
    CardProjectComponent,
    CardProjectStackComponent,
    HeaderSectionComponent,
    TruncatePipe,
  ],
  exports: [
    CardArticleComponent,
    CardProjectComponent,
    CardProjectStackComponent,
    HeaderSectionComponent,
    TruncatePipe,
  ],
  imports: [CommonModule, RouterModule],
})
export class SharedModule {}
