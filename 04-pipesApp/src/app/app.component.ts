import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pipesApp';
  nombre: string = 'Braulio garcia';
  valor: number = 2404;
  mostrarNombre(){
    console.log( this.nombre );
    console.log( this.valor );
  }
}
