import { Component, OnInit } from '@angular/core';
import { GifsService } from '../../gifs/services/gifs.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent{
  
  get historial(): string[]{
    return this.gifsService.historial;
  }

  buscar( termino: string ): void{
    this.gifsService.buscarGifs( termino );
  }

  constructor( private gifsService: GifsService ){}



}
