import { Component, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-calc-view',
  standalone: true,
  imports: [],
  templateUrl: './calc-view.component.html',
  styleUrl: './calc-view.component.css'
})
export class CalcViewComponent {

  @Output() nro1 = new EventEmitter<number>();
  @Output() nro2 = new EventEmitter<number>();
  @Input() res: number = 0; 
  
  primero: number | undefined;
  segundo: number | undefined;
  

  

  valueNro1(event: any) {
    this.primero = event.target.value;
    console.log('Primer nro: ', this.primero);
  }
  valueNro2(event: any) {
    this.segundo = event.target.value;
    console.log('Segundo nro: ', this.segundo);
    this.cargarNros();
  }

  cargarNros() {
    
    this.nro1.emit(this.primero);
    this.nro2.emit(this.segundo);
  }
}


