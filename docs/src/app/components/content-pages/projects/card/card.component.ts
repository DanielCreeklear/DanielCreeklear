import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() title: string = "";
  @Input() subtitle: string = "";
  @Input() imagePath: string = "";
  @Input() text: string = "";
  @Input() linkGithub: string = "";
  @Input() linkVideo: string = "";
  @Input() linkDownload: string = "";
}
