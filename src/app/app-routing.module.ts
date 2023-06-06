import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VariablesComponent } from './name/variables/variables.component';

const routes: Routes = [{ path: 'variables', component: VariablesComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
