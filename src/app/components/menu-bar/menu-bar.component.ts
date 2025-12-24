import { Component, OnInit } from '@angular/core'
import { Tema, TemaService } from '../../services/tema.service'

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.css']
})
export class MenuBarComponent implements OnInit {
  temaAtual: Tema = 'claro'

  constructor(private temaService: TemaService) {}

  ngOnInit(): void {
    this.temaAtual = this.temaService.obterTema()
  }

  alternarTema(): void {
    this.temaAtual = this.temaService.alternar()
  }
}
