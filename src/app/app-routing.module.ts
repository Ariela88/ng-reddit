import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { PreferComponent } from './components/prefer/prefer.component';

const routes: Routes = [
  { path: 'main', component: MainComponent },
  {
    path: 'preferiti',
    component: PreferComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
