import { Component, Input } from '@angular/core';

import { Family } from '../../models/family.model';

@Component({
  selector: 'app-child-default',
  template: `
    <h3 class="sh-child-title">Child (Default): {{ family.child }}</h3>
  `,
  styleUrl: './child-default.component.scss',
})
export class ChildDefaultComponent {
  @Input({ required: true }) public family!: Family;
}
