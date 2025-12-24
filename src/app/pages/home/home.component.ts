import { Component, OnInit } from '@angular/core'
import { Artigo } from '../../models/artigo.model'
import { ArtigosService } from '../../services/artigos.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  textoPesquisa = ''
  categoriaSelecionada = ''

  categorias: string[] = []
  artigosFiltrados: Artigo[] = []

  artigoDestaque?: Artigo
  artigosLista: Artigo[] = []

  constructor(private artigosService: ArtigosService) {}

  ngOnInit(): void {
    this.categorias = this.artigosService.listarCategorias()
    this.aplicarFiltros()
  }

  aplicarFiltros(): void {
    this.artigosFiltrados = this.artigosService.filtrar(this.textoPesquisa, this.categoriaSelecionada)
    this.artigoDestaque = this.artigosFiltrados.length ? this.artigosFiltrados[0] : undefined
    this.artigosLista = this.artigosFiltrados.slice(1)
  }

  limparFiltros(): void {
    this.textoPesquisa = ''
    this.categoriaSelecionada = ''
    this.aplicarFiltros()
  }
}
