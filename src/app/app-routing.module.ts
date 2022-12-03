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
    path: 'my-coupons', 
    loadChildren: () => 
      import('./modules/my-coupons/my-coupons.module').then(m => m.MyCouponsModule)
  },
  { 
    path: 'perfil', 
    loadChildren: () => 
      import('./modules/perfil/perfil.module').then(m => m.PerfilModule)
  },
  { path: 'category', component: ListCategoryComponent },
  { path: '**', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
