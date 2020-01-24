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
  cadastrado: boolean;
  nomePessoa: string;
  funcionarios: [];
  nomeFuncionario: string;
  ultimoId = 0;

  novo() {
    this.funcionarios.push({
      id: ++this.ultimoId,
      nome: this.nomeFuncionario
    });
  }

  cadastrar(event: any) {
    console.log(event);
    this.cadastrado = true;
    this.nomePessoa = event.value;
  }

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
