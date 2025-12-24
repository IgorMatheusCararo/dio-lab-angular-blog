import { Injectable } from '@angular/core'
import { dataFake } from '../data/dataFake'
import { Artigo } from '../models/artigo.model'

@Injectable({
  providedIn: 'root'
})
export class ArtigosService {
  private artigos: Artigo[] = dataFake.map(item => ({
    id: item.id,
    titulo: item.title,
    descricao: item.description,
    fotoCapa: item.photoCover,
    conteudo: item.content,
    categoria: item.categoria,
    tags: item.tags,
    autor: item.autor,
    dataPublicacao: item.dataPublicacao
  }))

  listar(): Artigo[] {
    return [...this.artigos].sort((a, b) => (new Date(b.dataPublicacao).getTime() - new Date(a.dataPublicacao).getTime()))
  }

  buscarPorId(id: string): Artigo | undefined {
    return this.artigos.find(artigo => artigo.id === id)
  }

  listarCategorias(): string[] {
    return Array.from(new Set(this.artigos.map(a => a.categoria))).sort((a, b) => a.localeCompare(b))
  }

  filtrar(texto: string, categoria: string): Artigo[] {
    const termo = (texto || '').trim().toLowerCase()
    const categoriaNormalizada = (categoria || '').trim().toLowerCase()

    return this.listar().filter(artigo => {
      const bateTexto = !termo || (
        artigo.titulo.toLowerCase().includes(termo) ||
        artigo.descricao.toLowerCase().includes(termo) ||
        artigo.tags.some(t => t.toLowerCase().includes(termo))
      )

      const bateCategoria = !categoriaNormalizada || artigo.categoria.toLowerCase() === categoriaNormalizada

      return bateTexto && bateCategoria
    })
  }
}
