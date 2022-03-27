import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GrafikComponent } from './grafik/grafik.component';

const routes: Routes = [
  {path: '', component: GrafikComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
