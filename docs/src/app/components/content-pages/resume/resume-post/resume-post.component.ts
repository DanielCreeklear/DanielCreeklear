import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-resume-post',
  templateUrl: './resume-post.component.html',
  styleUrls: ['./resume-post.component.css']
})
export class ResumePostComponent {
  @Input() text: string = "";
  @Input() image: string = "";
}
