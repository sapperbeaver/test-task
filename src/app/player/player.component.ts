import {Component, EventEmitter, Input, Output} from '@angular/core';
import { Player } from '../scoreboard/player.model';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent {
  @Input() self: Player;
  @Output() ratingUp = new EventEmitter();
  @Output() ratingDown = new EventEmitter();
  @Output() remove = new EventEmitter();
  @Output() change = new EventEmitter();
  public flag: boolean = true;
  
}
