import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, SearchGifsResponse } from '../interface/gifs.interface';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private apiKey: string = 'Zft1giXV08P81bxPCsZMrx2j5vrl8mCW';
  private servicioUrl: string = 'https://api.giphy.com/v1/gifs';
  

  private _historial: string[] = [];
  
  public resultados:Gif[] = [];

  get historial(): string[]{
    return [...this._historial];
  }
  

  constructor ( private http: HttpClient ){

    this._historial = JSON.parse(localStorage.getItem('historial')!) || [];
    // resultados
    this.resultados = JSON.parse(localStorage.getItem('resultados')!) || '';
    // if(localStorage.getItem('historial')){
    //   this._historial = JSON.parse(localStorage.getItem('historial')!);
    // }

  }

  buscarGifs( query: string ): void {

    query = query.trim().toLowerCase();

    if( !this._historial.includes( query ) ){
      
      this._historial.unshift(query);
      
      this._historial = this._historial.splice(0,10);

      localStorage.setItem( 'historial', JSON.stringify( this._historial ) );

    }

    const params = new HttpParams()
        .set('api_key',this.apiKey)
        .set('limit', '10')
        .set('q', query);
    this.http.get<SearchGifsResponse>(`${ this.servicioUrl }/search`,{ params })
        .subscribe(( response: SearchGifsResponse ) => { 
          this.resultados =  response.data;
          localStorage.setItem( 'resultados', JSON.stringify( this.resultados ) );
        });

  }

}
