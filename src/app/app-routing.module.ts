import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VariablesComponent } from './name/variables/variables.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/aboutComponent/about.component';
import { ProductComponent } from './product/product.component';
import { DatabindingComponent } from './databinding/databinding.component';

const routes: Routes = [
  { path: 'products', component: ProductComponent },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'variables', component: VariablesComponent },
  { path: 'databinding', component: DatabindingComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
