import { NovaTransfereciaComponent } from './nova transferencia/nova-transferencia.component';
import { ExtratoComponent } from './extrato/extrato.component';
import { NgModule} from '@angular/core';
import { RouterModule } from '@angular/router';

import { Routes } from '@angular/router';

export const routes: Routes = [
  {path: '', redirectTo: 'extrato', pathMatch: 'full' },
  {path: 'extrato', component: ExtratoComponent},
  {path: 'nova-transferencia', component: NovaTransfereciaComponent},
];

@NgModule({
   imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class appRoutingModule{}
