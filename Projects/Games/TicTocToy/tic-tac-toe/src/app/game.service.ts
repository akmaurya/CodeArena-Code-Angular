import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  currentPlayer: 'X' | 'O' = 'X';
  board: ('X' | 'O' | null)[] = Array(9).fill(null);
  winner: 'X' | 'O' | null = null;

  constructor() { }

  makeMove(idx: number): void {
    if (!this.board[idx] && !this.winner) {
      this.board[idx] = this.currentPlayer;
      this.winner = this.calculateWinner();
      this.currentPlayer = this.currentPlayer === 'X' ? 'O' : 'X';
    }
  }

  calculateWinner(): 'X' | 'O' | null {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];

    for (let line of lines) {
      const [a, b, c] = line;
      if (this.board[a] && this.board[a] === this.board[b] && this.board[a] === this.board[c]) {
        return this.board[a];
      }
    }
    return null;
  }

  resetGame(): void {
    this.board = Array(9).fill(null);
    this.currentPlayer = 'X';
    this.winner = null;
  }
}
