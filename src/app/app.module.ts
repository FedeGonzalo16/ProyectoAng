import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
/* Routing */
import { AppRoutingModule } from './app-routing.module';
/* Partials */
import { FooterComponent } from './partials/footer/footer.component';
import { HeaderComponent } from './partials/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { NosotrosComponent } from './pages/nosotros/nosotros.component';
import { GaleriaComponent } from './pages/galeria/galeria.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { LoginComponent } from './pages/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    NosotrosComponent,
    GaleriaComponent,
    ContactoComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {  }
