import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-resume-card',
  templateUrl: './resume-card.component.html',
  styleUrls: ['./resume-card.component.css']
})
export class ResumeCardComponent {
  @Input() title: string = "";
  @Input() description: string = "";
  @Input() period: string = "";
  @Input() subtitle: string = "";
  @Input() link: string = "";
}
