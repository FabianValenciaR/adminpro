import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { retry, map, filter } from 'rxjs/operators';
import { ParseTreeResult } from '@angular/compiler';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: []
})
export class RxjsComponent implements OnInit {

  constructor() {


    this.regresaObservable()
      .subscribe(
        numero => console.log('Subs ', numero.valor),
        error => console.error('Error en el obs', error),
        () => console.log('El observador termino')
      );
  }

  ngOnInit() {
  }

  regresaObservable(): any {
    let obs: Observable<any> = new Observable(observer => {
      let contador = 0;
      let intervalo = setInterval(() => {

        contador++;

        const salida = {
          valor: contador
        };

        observer.next(salida)

        if (contador === 3) {
          clearInterval(intervalo);
          observer.complete();
        }

      }, 1000);
    }).pipe(
      filter((valor: number, index) => {

        if ((valor % 2) === 1) {
          return true;
        } else {
          return false;
        }

      })
    );
  }
}
