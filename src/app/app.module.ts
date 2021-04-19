import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CarruselComponent } from './home/carrusel/carrusel.component';
import { FormasComponent } from './home/formas/formas.component';
import { FooterComponent } from './footer/footer.component';
import { ReproductorComponent } from './home/reproductor/reproductor.component';
import { HomeComponent } from './home/home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RobertoPageComponent } from './roberto-page/roberto-page.component';
<<<<<<< HEAD
import { EzequielComponent } from './ezequiel/ezequiel.component';
=======
import { GerardoComponent } from './gerardo/gerardo.component';
import { ZaratebisComponent } from './zaratebis/zaratebis.component';
import { DanielComponent } from './daniel/daniel.component';
>>>>>>> 15478e79b10fdcca14ac54d9803b57a681571f1b


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CarruselComponent,
    FormasComponent,
    ReproductorComponent,
    FooterComponent,
    HomeComponent,
    RobertoPageComponent,
<<<<<<< HEAD
    EzequielComponent
=======
    GerardoComponent,
    ZaratebisComponent,
    DanielComponent
>>>>>>> 15478e79b10fdcca14ac54d9803b57a681571f1b
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
