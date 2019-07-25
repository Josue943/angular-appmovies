import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(
    private router : Router
  ) { }

  ngOnInit() {
  }

    //recibimos el dato
  buscarPelicula(texto:string){
      if (texto.length==0) {
        return; //para que no haga nada si solo le da enviar
      }
          /// para navegar a otra pagina
        this.router.navigate(['search',texto])
      
  }
}
