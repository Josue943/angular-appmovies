import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
//rutas
import { appRoutingProvider, routing } from './app.routing';

//http
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClientJsonpModule} from '@angular/common/http';
import { SharedPipe } from './components/shared.pipe';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SearchComponent } from './components/search/search.component';
import { PeliculaComponent } from './components/pelicula/pelicula.component';
import { GaleriaComponent } from './components/home/galeria.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SharedPipe,
    NavbarComponent,
    SearchComponent,
    PeliculaComponent,
    GaleriaComponent
  ],
  imports: [
    BrowserModule,
    routing,
    HttpClientModule,
    FormsModule,
    HttpClientJsonpModule
  ],
  providers: [
    appRoutingProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
