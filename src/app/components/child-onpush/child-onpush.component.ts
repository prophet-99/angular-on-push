import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { Family } from '../../models/family.model';

@Component({
  selector: 'app-child-onpush',
  template: `
    <h3 class="sh-child-title">Child (OnPush): {{ family.child }}</h3>
    <app-grandchild-onpush [family]="family" />
  `,
  styleUrl: './child-onpush.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChildOnpushComponent {
  @Input({ required: true }) public family!: Family;
}
