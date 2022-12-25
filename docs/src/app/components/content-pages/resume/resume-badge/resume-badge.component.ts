import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-resume-badge',
  templateUrl: './resume-badge.component.html',
  styleUrls: ['./resume-badge.component.css']
})
export class ResumeBadgeComponent {
  @Input() image: string = "";
  @Input() title: string = "";
  @Input() link: string = "";
}
