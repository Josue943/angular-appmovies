import { Component, OnInit } from '@angular/core';
import { PeliculasService } from 'src/app/services/peliculas.service';
import { ActivatedRoute} from '@angular/router'

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styles: []
})
export class PeliculaComponent implements OnInit {

  peliculas:any;
  regresa:string;
  busqueda:string;
  constructor(
    private pelicula:PeliculasService,
    private route :ActivatedRoute
  ) {
      this.regresa = "";
      this.busqueda =""
    this.route.params.subscribe(      //con esto vemos cual es el id que nos pasan y de una ves hacemos el service y se lo enviamos
     
      data=> {
        this.regresa=data['pag']
          if (data['busqueda']){
            this.busqueda = data['busqueda']
          }

        this.pelicula.verPelicula(data['id']) //tambien guardamos el de la pagina para luego regresarla con eso
        .subscribe(
          final => {
          this.peliculas=final
          
          })
         })

   }

  ngOnInit() {
  
  }

 
    


}
