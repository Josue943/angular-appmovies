import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../../services/peliculas.service';
import { ActivatedRoute} from '@angular/router'

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
    resultados:any[];
    buscar :string="";  //con esto tomamos el valor del model

  constructor(  
    private peliculas:PeliculasService, 
    private route : ActivatedRoute
  ) {
    //para sacar los datos del parametro
    this.route.params.subscribe(
      data=>{
          if (data['texto']) {   //aqui pasamos los datos a el input
            this.buscar = data['texto']
            this.busqueda() //y llamamos la busqueda
            
          }
      }
    )
   }

  ngOnInit() {
   
  }



  busqueda(){
    this.peliculas.buscarPeliculas(this.buscar).subscribe(
      data =>{
        
          this. resultados = data;

      }
    )

  }


}
