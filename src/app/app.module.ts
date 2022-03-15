import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { PaginaErrorComponent } from './component/pagina-error/pagina-error.component';
import { ApLogoComponent } from './component/ap-logo/ap-logo.component';
import { RedesComponent } from './component/redes/redes.component';
import { HeaderComponent } from './component/header/header.component';
import { BannerComponent } from './component/banner/banner.component';
import { AcercaDeComponent } from './component/acerca-de/acerca-de.component';
import { ExperienciaComponent } from './component/experiencia/experiencia.component';
import { EducacionComponent } from './component/educacion/educacion.component';
import { SkillsComponent } from './component/skills/skills.component';
import { PortfolioService } from './services/portfolio.service';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './component/login/login.component';
import { ProyectosComponent } from './component/proyectos/proyectos.component';

@NgModule({
  declarations: [
    AppComponent,
    PaginaErrorComponent,
    ApLogoComponent,
    RedesComponent,
    HeaderComponent,
    BannerComponent,
    AcercaDeComponent,
    ExperienciaComponent,
    EducacionComponent,
    SkillsComponent,
    LoginComponent,
    ProyectosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,    
    NgCircleProgressModule.forRoot({})
  ],
  providers: [PortfolioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
