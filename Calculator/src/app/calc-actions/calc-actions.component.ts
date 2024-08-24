import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-calc-actions',
  standalone: true,
  imports: [],
  templateUrl: './calc-actions.component.html',
  styleUrl: './calc-actions.component.css'
})
export class CalcActionsComponent {

  @Input() n1: number = 0;
  @Input() n2: number = 0;
  @Output() rst = new EventEmitter<number>();

  result: number = 0;

  calculateResult(operacion: string) {


    console.log('Operacion: ', operacion);
    if (operacion === '+') {
      this.result = Number(this.n1) + Number(this.n2);
      console.log(this.n1);
      console.log(this.n2);
      console.log(this.result);
    } else if (operacion === '-') {
      this.result = this.n1 - this.n2;
      console.log(this.result);
    } else if (operacion === 'x') {
      this.result = this.n1 * this.n2;
      console.log(this.result);
    } else if (operacion === '/') {
      this.result = this.n1 / this.n2;
      console.log(this.result);
    }else if (operacion === '^') {
      this.result = Math.pow(this.n1, this.n2);
    }else if (operacion === 'CE') {
      this.result = Math.sqrt(this.n1);
    }

      

    this.rst.emit(this.result);
  }
}
