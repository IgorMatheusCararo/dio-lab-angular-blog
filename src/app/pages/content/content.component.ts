import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { Artigo } from '../../models/artigo.model'
import { ArtigosService } from '../../services/artigos.service'
import { FavoritosService } from '../../services/favoritos.service'

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  artigo?: Artigo
  naoEncontrado = false
  favorito = false

  constructor(
    private route: ActivatedRoute,
    private artigosService: ArtigosService,
    private favoritosService: FavoritosService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(valor => {
      const id = valor.get('id')
      if (!id) {
        this.naoEncontrado = true
        this.artigo = undefined
        return
      }

      const artigo = this.artigosService.buscarPorId(id)
      if (!artigo) {
        this.naoEncontrado = true
        this.artigo = undefined
        return
      }

      this.naoEncontrado = false
      this.artigo = artigo
      this.favorito = this.favoritosService.estaFavorito(artigo.id)
    })
  }

  alternarFavorito(): void {
    if (!this.artigo) return
    this.favorito = this.favoritosService.alternar(this.artigo.id)
  }

  obterDataFormatada(): string {
    if (!this.artigo?.dataPublicacao) return ''
    const data = new Date(this.artigo.dataPublicacao)
    return isNaN(data.getTime()) ? '' : data.toLocaleDateString('pt-BR')
  }

  obterLeituraMinutos(): number {
    const texto = (this.artigo?.conteudo || '').trim()
    if (!texto) return 0
    const palavras = texto.split(/\s+/).filter(Boolean).length
    return Math.max(1, Math.ceil(palavras / 200))
  }
}
