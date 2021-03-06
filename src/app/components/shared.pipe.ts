import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shared'
})
export class SharedPipe implements PipeTransform {

  transform(pelicula: any): any {

    // path url generica para obtener imagenes
    let url = "http://image.tmdb.org/t/p/w400";

    if (pelicula.poster_path) {
      return url + pelicula.poster_path;
    } else {
      if (pelicula.backdrop_path) {
        return url + pelicula.backdrop_path;
      } else {
        // Si la pelicula no tiene imagenes disponibles retorna una generica
        return "assets/img/noimage.png";
      }
    }
  }

}