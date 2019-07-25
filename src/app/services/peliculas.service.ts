import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {
  private apikey: string = "f9b276a8a665a41333c2def2f632a2e4";
  peliculas : []; //lo usaremos para guardar la busqueda

  constructor(
    private http:HttpClient,
   
  ) { }

  getQuery(query:string){
    
    let urls = `https://api.themoviedb.org/3${query}&api_key=${
      this.apikey
      }&language=es&callback=JSONP_CALLBACK`;

        return this.http.jsonp(urls,"")

  }

    getPopulares(){
    return this.getQuery('/discover/movie?sort_by=popularity.desc')
    .pipe(
      map((data: any) => data.results))
    
    }


      getPeliculasActuales(){
        return this.getQuery('/discover/movie?primary_release_date.gte=2018-09-15&primary_release_date.lte=2018-10-22')
        .pipe(
          map((data: any) => data.results))
      }

      getPeliculasInfantiles(){
        return this.getQuery('/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc')
        .pipe(
          map((data: any) => data.results))
      }


      buscarPeliculas(busqueda:string){
        let url= `https://api.themoviedb.org/3/search/movie?query=${ busqueda }&sort_by=popularity.desc&api_key=${ this.apikey }&language=es&callback=JSONP_CALLBACK`;
         return this.http.jsonp(url,"") 
        .pipe(
          map((data:any) =>{ 
          this.peliculas = data.results;
       return  data.results
          }))
        }

  

         verPelicula(id){

          let url= `https://api.themoviedb.org/3/movie/${id}?&api_key=${ this.apikey }&language=es&callback=JSONP_CALLBACK`;
          return this.http.jsonp(url,"") 
          
        }


}

