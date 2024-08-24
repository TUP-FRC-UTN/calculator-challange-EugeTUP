import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {CalcViewComponent} from "../app/calc-view/calc-view.component";
import { CalcActionsComponent } from './calc-actions/calc-actions.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CalcViewComponent, CalcActionsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Calculator';
  
  nro1: number = 0;
  nro2: number = 0;
  result: number = 0;
  
  recibeNro1(event: number) {

    this.nro1 = event;
    console.log('El primer nro es: ', event);
  }

  recibeNro2(event: number) {
    this.nro2 = event;
    console.log('El segundo nro es: ', event);
  }

  recibeResultado(event: number) {
    this.result = event;
    console.log('El resultado es: ', event);
  }
}

