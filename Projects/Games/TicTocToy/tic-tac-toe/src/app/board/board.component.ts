import { Component } from '@angular/core';
import { GameService } from '../game.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrl: './board.component.css'
})
export class BoardComponent {
  constructor(public gameService: GameService) {}
}
