import { Component, OnInit, Input, EventEmitter, Output, ViewChild, ElementRef, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: []
})
export class IncrementadorComponent implements OnInit {

  @ViewChild('txtProgress', null) txtProgress: ElementRef;

  @Input() leyenda: string = 'Leyenda';
  @Input() progreso: number = 50;

  @Output() cambioValor: EventEmitter<number> = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  onChanges(newValue: number) {
    // Realiza la seleccion de un input en especifico por medio de vanilla javascript
    // let elemHtml: any = document.getElementsByName('progreso')[0];

    if (newValue >= 100) {
      this.progreso = 100;
    } else if (newValue <= 0) {
      this.progreso = 0;
    } else {
      this.progreso = newValue;
    }
    // elemHtml.value = Number(this.progreso);

    // Realiza la seleccion de un input en especifico por medio del decorador @ViewChild
    this.cambioValor.emit(this.progreso);
    this.txtProgress.nativeElement.value = this.progreso;
  }

  cambiarValor(valor: number) {
    this.progreso = this.progreso + valor;
    if (this.progreso >= 100) {
      this.progreso = 100;
    } else if (this.progreso <= 0) {
      this.progreso = 0;
    }
    this.txtProgress.nativeElement.value = this.progreso;
    this.cambioValor.emit(this.progreso);
    this.txtProgress.nativeElement.focus();
  }

}
