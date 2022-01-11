import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
/* Routing */
import { AppRoutingModule } from './app-routing.module';
/* Partials */
import { FooterComponent } from './partials/footer/footer.component';
import { HeaderComponent } from './partials/header/header.component';
/* Pages */
import { HomeComponent } from './pages/home/home.component';
import { NosotrosComponent } from './pages/nosotros/nosotros.component';
import { GaleriaComponent } from './pages/galeria/galeria.component';
import { LoginComponent } from './pages/login/login.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
/*  Services */
import { DataPageService } from './servicios/data-page.service';
/* HttpClient */
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    NosotrosComponent,
    GaleriaComponent,
    LoginComponent,
    ContactoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [DataPageService],
  bootstrap: [AppComponent]
})

export class AppModule {  }
