import { Component, OnInit } from '@angular/core'
import { Artigo } from '../../models/artigo.model'
import { ArtigosService } from '../../services/artigos.service'
import { FavoritosService } from '../../services/favoritos.service'

@Component({
  selector: 'app-favoritos',
  templateUrl: './favoritos.component.html',
  styleUrls: ['./favoritos.component.css']
})
export class FavoritosComponent implements OnInit {
  artigos: Artigo[] = []

  constructor(
    private artigosService: ArtigosService,
    private favoritosService: FavoritosService
  ) {}

  ngOnInit(): void {
    this.carregar()
  }

  carregar(): void {
    const ids = this.favoritosService.listarIds()
    const todos = this.artigosService.listar()
    this.artigos = todos.filter(a => ids.includes(a.id))
  }

  limpar(): void {
    this.favoritosService.limpar()
    this.carregar()
  }
}
