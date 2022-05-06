import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TreningerInfoComponent } from './treninger-info/treninger-info.component';
import { TreningerComponent } from './treninger/treninger.component';

const routes: Routes = [
  {path: 'treninger', component: TreningerComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
