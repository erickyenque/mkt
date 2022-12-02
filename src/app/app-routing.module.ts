import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListCategoryComponent } from './components/list-category/list-category.component';

const routes: Routes = [
  { 
    path: 'home', 
    loadChildren: () => 
      import('./modules/home/home.module').then(m => m.HomeModule)
  },
  { 
    path: 'perfil', 
    loadChildren: () => 
      import('./modules/perfil/perfil.module').then(m => m.PerfilModule)
  },
  { path: 'category', component: ListCategoryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
