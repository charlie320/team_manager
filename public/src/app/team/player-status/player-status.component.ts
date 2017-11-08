import { Component, OnInit } from '@angular/core';
import { Player } from '../../player';
import { PlayerService } from '../../player.service';

@Component({
  selector: 'app-player-status',
  templateUrl: './player-status.component.html',
  styleUrls: ['./player-status.component.css']
})
export class PlayerStatusComponent implements OnInit {

  players: Player[];
  player: Player = new Player();
  game: number = 1;

  constructor(private _playerService: PlayerService) { }

  ngOnInit() {
    this.getPlayers();
  }

  whichGame(game){
    if(game == 1){
      this.game = 1;
      return this.game;
    }
    if(game == 2){
      this.game = 2;
      return this.game;
    }
    if(game == 3){
      this.game = 3;
      return this.game;
    }
    this.getPlayers();
  }

  getPlayers() {
    this._playerService.index(players => this.players = players);
  }

  updatePlayerStatus(player, status) {
    if(this.game == 1){
      player.game1 = status;
    }
    else if(this.game == 2){
      player.game2 = status;
    }
    else if(this.game == 3){
      player.game3 = status;
    }
    this._playerService.update(player, player => this.player = player);
  }

}
