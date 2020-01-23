import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nome = 'Fundamento Angular';
  idade = 13;

  getIdade() {
    return this.idade;
  }
}
