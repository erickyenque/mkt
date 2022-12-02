import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { BannerComponent } from './components/banner/banner.component';
import { ListCategoriesComponent } from './components/list-categories/list-categories.component';
import { SearchComponent } from './components/search/search.component';
import { InformativeSectionComponent } from './components/informative-section/informative-section.component';
import { CategoriesSectionComponent } from './components/categories-section/categories-section.component';

@NgModule({
  declarations: [
    HomeComponent,
    BannerComponent,
    ListCategoriesComponent,
    SearchComponent,
    InformativeSectionComponent,
    CategoriesSectionComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
