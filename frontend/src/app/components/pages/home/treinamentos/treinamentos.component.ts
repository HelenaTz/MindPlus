import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import * as Chart from 'chart.js';

@Component({
  selector: 'app-teste',
  template: `
    <!-- ... (o mesmo código anterior) ... -->
  `,
  styles: []
})
export class TesteComponent implements AfterViewInit {
  // ... (o mesmo código anterior) ...
  @ViewChild('grafico') grafico: ElementRef;

  ngAfterViewInit() {
    // ...
  }

  gerarGrafico() {
    const contexto = (this.grafico.nativeElement as HTMLCanvasElement).getContext('2d');
    const chart = new Chart(contexto, {
      type: 'bar',
      data: {
        labels: ['Ansiedade', 'Depressão', 'Estresse'],
        datasets: [{
          label: 'Resultado',
          data: this.respostas,
          backgroundColor: ['blue', 'green', 'red']
        }]
      },
      options: {
        title: {
          display: true,
          text: 'Resultado do Teste'
        },
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    });

    this.graficoGerado = true;
  }
}
