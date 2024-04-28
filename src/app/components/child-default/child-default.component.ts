import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-child-default',
  template: `
    <h3 class="sh-child-title">Child (Default): {{ childName }}</h3>
  `,
  styleUrl: './child-default.component.scss',
})
export class ChildDefaultComponent {
  @Input({ required: true }) public childName!: string;
}
