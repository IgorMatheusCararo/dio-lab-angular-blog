import { Injectable } from '@angular/core'

@Injectable({
  providedIn: 'root'
})
export class FavoritosService {
  private chaveStorage = 'blog_favoritos'

  listarIds(): string[] {
    try {
      const bruto = localStorage.getItem(this.chaveStorage)
      const ids = bruto ? JSON.parse(bruto) : []
      return Array.isArray(ids) ? ids.map(String) : []
    } catch {
      return []
    }
  }

  private salvar(ids: string[]): void {
    localStorage.setItem(this.chaveStorage, JSON.stringify(ids))
  }

  estaFavorito(id: string): boolean {
    return this.listarIds().includes(String(id))
  }

  alternar(id: string): boolean {
    const alvo = String(id)
    const ids = this.listarIds()

    if (ids.includes(alvo)) {
      const atualizados = ids.filter(x => x !== alvo)
      this.salvar(atualizados)
      return false
    }

    this.salvar([...ids, alvo])
    return true
  }

  limpar(): void {
    this.salvar([])
  }
}
