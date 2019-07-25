import { Component, OnInit } from '@angular/core';
import { PeliculasService } from 'src/app/services/peliculas.service';

import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

    peliculasPopulares:[];
    peliculasInfantiles:[];
    peliculasActuales:[];

    

  constructor(
    private peliculas : PeliculasService,
    private router : Router
  ) { }

  ngOnInit() {
    this.getPopulares()
    this.getPeliculasActuales()
    this.getPeliculasInfantiles()
  }

  getPopulares(){
      this.peliculas.getPopulares().subscribe(
        data =>{
        
          this.peliculasPopulares = data;
          //console.log(this.peliculasPopulares)
        }
      )
  }


    getPeliculasInfantiles(){
      this.peliculas.getPeliculasInfantiles().subscribe(
        data=>{
          
          this.peliculasInfantiles = data;
        }
      )

    }

    getPeliculasActuales(){
      this.peliculas.getPeliculasActuales().subscribe(
        data=>{
         
          this.peliculasActuales = data;
          console.log(data)
        }
      )

    }

    verPelicula(pelicula:any){

      let peliculaId;

      peliculaId = pelicula.id;
  
        
          //usamos el router para abrir otra pagina con el id
        this.router.navigate(['/pelicula',peliculaId])
    }
   


   

}