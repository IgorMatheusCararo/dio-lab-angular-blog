import { Injectable } from '@angular/core'

export type Tema = 'claro' | 'escuro'

@Injectable({
  providedIn: 'root'
})
export class TemaService {
  private chaveStorage = 'blog_tema'
  private temaAtual: Tema = 'claro'

  iniciar(): void {
    const salvo = this.lerDoStorage()
    this.temaAtual = salvo
    this.aplicarNoDocumento(this.temaAtual)
  }

  obterTema(): Tema {
    return this.temaAtual
  }

  alternar(): Tema {
    this.temaAtual = this.temaAtual === 'claro' ? 'escuro' : 'claro'
    localStorage.setItem(this.chaveStorage, this.temaAtual)
    this.aplicarNoDocumento(this.temaAtual)
    return this.temaAtual
  }

  private lerDoStorage(): Tema {
    const valor = (localStorage.getItem(this.chaveStorage) || '').toLowerCase()
    return valor === 'escuro' ? 'escuro' : 'claro'
  }

  private aplicarNoDocumento(tema: Tema): void {
    const corpo = document.body
    corpo.dataset['tema'] = tema
  }
}
