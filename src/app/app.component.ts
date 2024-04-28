import { Component } from '@angular/core';

import { Family } from './models/family.model';

@Component({
  selector: 'app-root',
  template: `
    <section class="sh-family-container">
      <h1>Family Organizer</h1>
      <app-parent [family]="familyData" />
      <button class="btn" (click)="updateFamilyData()">
        Update family data
      </button>
    </section>
  `,
  styleUrl: './app.component.scss',
})
export class AppComponent {
  public familyData: Family = {
    parent: 'Jane',
    childBrother: 'John',
    child: 'Alex',
    grandchild: 'Little Johnny',
  };

  public updateFamilyData(): void {
    this.familyData.grandchild = 'Little Johnny Jr.';
  }
}
