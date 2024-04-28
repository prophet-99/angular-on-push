import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { Family } from '../../models/family.model';

@Component({
  selector: 'app-grandchild-onpush',
  template: `
    <p class="sh-grandchild-title">
      Grandchild (OnPush): {{ family.grandchild }}
    </p>
  `,
  styleUrl: './grandchild-onpush.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GrandchildOnpushComponent {
  @Input({ required: true }) public family!: Family;
}
