import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrincipalComponent } from './pages/principal/principal.component';
import { InicioSesionComponent } from './pages/inicio-sesion/inicio-sesion.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { InfoEstudianteComponent } from './pages/info-estudiante/info-estudiante.component';
import { InfoMatriculasComponent } from './pages/info-matriculas/info-matriculas.component';
import { InfoDocenteComponent } from './pages/info-docente/info-docente.component';
import { InfoModalidadComponent } from './pages/info-modalidad/info-modalidad.component';
import { InfoOfertaComponent } from './pages/info-oferta/info-oferta.component';
import { PrincipalLogginComponent } from './pages/principal-loggin/principal-loggin.component';
import { AcercaDeComponent } from './pages/acerca-de/acerca-de.component';
import { EstudianteRegistroComponent } from './pages/estudiante-registro/estudiante-registro.component';
import { MatriculasRegistroComponent } from './pages/matriculas-registro/matriculas-registro.component';
import { DocentesRegistroComponent } from './pages/docentes-registro/docentes-registro.component';
import { AsignaturasRegistroComponent } from './pages/asignaturas-registro/asignaturas-registro.component';
import { HorariosRegistroComponent } from './pages/horarios-registro/horarios-registro.component';
import { CalificacionesRegistroComponent } from './pages/calificaciones-registro/calificaciones-registro.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  {path: "principal", component: PrincipalComponent},
  {path: "sesion", component: InicioSesionComponent },
  {path: "registro", component: RegistroComponent}, 
  {path: "infoEstudiante", component: InfoEstudianteComponent},
  {path: "infoMatricula", component: InfoMatriculasComponent},
  {path: "infoDocente", component: InfoDocenteComponent},
  {path: "infomodalidad", component: InfoModalidadComponent},
  {path: "infooferta", component: InfoOfertaComponent},
  {path: "principalLoggin", component: PrincipalLogginComponent},
  {path: "acercaDe", component: AcercaDeComponent},
  {path: "estudiante", component: EstudianteRegistroComponent},
  {path: "matricula", component: MatriculasRegistroComponent},
  {path: "docente", component: DocentesRegistroComponent},
  {path: "asignatura", component: AsignaturasRegistroComponent},
  {path: "horario", component: HorariosRegistroComponent},
  {path: "calificacion", component: CalificacionesRegistroComponent},
  {path: "a", component: AppComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
