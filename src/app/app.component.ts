import { Component, OnInit } from '@angular/core'
import { TemaService } from './services/tema.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angular-blog'

  constructor(private temaService: TemaService) {}

  ngOnInit(): void {
    this.temaService.iniciar()
  }
}
