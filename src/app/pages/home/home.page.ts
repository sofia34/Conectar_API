import { Component } from '@angular/core';
import { UserService } from '../../services/user.service'; //primero hay que importar el servicio

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  // eslint-disable-next-line @typescript-eslint/ban-types
  pageTitle: String = 'Home';

  //posterior a la importación se debe agregar al constructor, porque hay que crear un metodo que nos permita listar
  constructor(private userService: UserService) {
    this.listarUser();

  }

  listarUser(){
    this.userService.obtenerListadoUsuarios()
    .then(respuesta =>{
      console.log(respuesta);
    },
    (error) =>{
      console.error(error);
    }
    );
  }

}
