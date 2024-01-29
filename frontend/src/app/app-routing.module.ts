import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/pages/login/login.component';
import { HomeComponent } from './components/pages/home/home.component';
import { PerfilComponent } from './components/pages/perfil/perfil.component';
import { AdminComponent } from './components/pages/avaliacoes/admin/admin.component';
import { ColaboradorComponent } from './components/pages/avaliacoes/colaborador/colaborador.component';
import { ColaboradoresComponent } from './components/pages/colaboradores/colaboradores.component';
import { TreinamentosComponent } from './components/pages/home/treinamentos/treinamentos.component';
import { OpineComponent } from './components/pages/home/opine/opine.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'treinamentos', component: TreinamentosComponent},
  { path: 'opine', component: OpineComponent},
  { path: 'login', component: LoginComponent },
  { path: 'perfil', component: PerfilComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'colaborador', component: ColaboradorComponent },
  { path: 'colaboradores', component: ColaboradoresComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
