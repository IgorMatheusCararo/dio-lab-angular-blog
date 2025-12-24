import { Component, Input, OnInit } from '@angular/core'
import { FavoritosService } from '../../services/favoritos.service'

@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.css']
})
export class SmallCardComponent implements OnInit {
  @Input() photoCover: string = ''
  @Input() cardTitle: string = ''
  @Input() Id: string = '0'
  @Input() categoria: string = ''
  @Input() dataPublicacao: string = ''

  favorito = false

  constructor(private favoritosService: FavoritosService) {}

  ngOnInit(): void {
    this.favorito = this.favoritosService.estaFavorito(this.Id)
  }

  alternarFavorito(evento: Event): void {
    evento.preventDefault()
    evento.stopPropagation()
    this.favorito = this.favoritosService.alternar(this.Id)
  }

  obterDataFormatada(): string {
    if (!this.dataPublicacao) return ''
    const data = new Date(this.dataPublicacao)
    return isNaN(data.getTime()) ? '' : data.toLocaleDateString('pt-BR')
  }
}
