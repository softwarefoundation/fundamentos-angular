import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nome = 'Fundamento Angular';
  texto: string;
  frase: string;


  adicionar() {
    console.log('Adicionando:' + this.nome);
    console.log(`Nome:  ${this.nome}`);

    const numero = Math.round(Math.random() * 100);
    this.nome = 'joão' + numero;
  }

  alterarNome(event: any) {
    this.nome = event.target.value;
  }

  exibirNome(nome: string) {
    console.log(nome);
  }

  alterarTexto(event: any) {
    console.log(event.target.value);
    this.texto = event.target.value;
  }
}
