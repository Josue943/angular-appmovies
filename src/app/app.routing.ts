import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
//rutas
import {HomeComponent } from './components/home/home.component'
import { SearchComponent } from './components/search/search.component';
import { PeliculaComponent } from './components/pelicula/pelicula.component';

const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'search', component: SearchComponent },
    { path: 'search/:texto', component: SearchComponent },//se creo para usar el buscar del navbar
    { path: 'pelicula/:id/:pag', component: PeliculaComponent },//datos que necesito
    { path: 'pelicula/:id/:pag/:busqueda', component: PeliculaComponent }, //para que guarde la busqueda por si se regreso a esa pag
    { path: '**', pathMatch:'full', redirectTo: 'home' }
];

export const appRoutingProvider: any[]= [];
export const routing:ModuleWithProviders = RouterModule.forRoot(routes);