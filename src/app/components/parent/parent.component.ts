import { Component, Input } from '@angular/core';
import { Family } from '../../models/family.model';

@Component({
  selector: 'app-parent',
  template: `
    <h2 class="sh-parent-title">Parent: {{ family.parent }}</h2>
    <section class="sh-parent-container">
      <app-child-default [family]="family" />
      <app-child-onpush [family]="family" />
    </section>
  `,
  styleUrl: './parent.component.scss',
})
export class ParentComponent {
  @Input({
    required: true,
  })
  family!: Family;
}
