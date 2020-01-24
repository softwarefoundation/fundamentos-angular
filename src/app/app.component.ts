import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nome = 'Fundamento Angular';


  adicionar() {
    console.log('Adicionando: " ${this.nome');
  }

}
