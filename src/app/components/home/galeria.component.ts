import { Component, OnInit,Input} from '@angular/core';
import { PeliculaComponent } from '../pelicula/pelicula.component';
  //input necesario para pasar info 

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styles: []
})
export class GaleriaComponent implements OnInit {

            //del archivo que recibimos a el archivo que va guardar eso
//recibir archivos
  @Input('peliculas') peliculas;
  @Input('titulo') titulo;

  constructor() { }

  ngOnInit() {
  }

}
