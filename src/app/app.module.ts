import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrincipalComponent } from './pages/principal/principal.component';
import { EstudianteRegistroComponent } from './pages/estudiante-registro/estudiante-registro.component';
import { InicioSesionComponent } from './pages/inicio-sesion/inicio-sesion.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { InfoEstudianteComponent } from './pages/info-estudiante/info-estudiante.component';
import { InfoMatriculasComponent } from './pages/info-matriculas/info-matriculas.component';
import { InfoDocenteComponent } from './pages/info-docente/info-docente.component';
import { InfoModalidadComponent } from './pages/info-modalidad/info-modalidad.component';
import { InfoOfertaComponent } from './pages/info-oferta/info-oferta.component';
import { autentificacion } from './domain/singleton';
import { PrincipalLogginComponent } from './pages/principal-loggin/principal-loggin.component';
import { AcercaDeComponent } from './pages/acerca-de/acerca-de.component';
import { MatriculasRegistroComponent } from './pages/matriculas-registro/matriculas-registro.component';
import { DocentesRegistroComponent } from './pages/docentes-registro/docentes-registro.component';
import { AsignaturasRegistroComponent } from './pages/asignaturas-registro/asignaturas-registro.component';
import { HorariosRegistroComponent } from './pages/horarios-registro/horarios-registro.component';
import { CalificacionesRegistroComponent } from './pages/calificaciones-registro/calificaciones-registro.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxToastNotifierModule } from 'ngx-toast-notifier';

@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponent,
    EstudianteRegistroComponent,
    InicioSesionComponent,
    RegistroComponent,
    InfoEstudianteComponent,
    InfoMatriculasComponent,
    InfoDocenteComponent,
    InfoModalidadComponent,
    InfoOfertaComponent,
    PrincipalLogginComponent,
    AcercaDeComponent,
    MatriculasRegistroComponent,
    DocentesRegistroComponent,
    AsignaturasRegistroComponent,
    HorariosRegistroComponent,
    CalificacionesRegistroComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgxToastNotifierModule.forRoot({
      timeOut: 2000,
      bgColors: {
        success: '#54a254',
        info: '#1976d2',
        warning: '#e09f26',
        danger: '#da2d2d',
       }
    }),
  ],
  providers: [autentificacion],
  bootstrap: [AppComponent]
})
export class AppModule { }
