import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-link-dialog',
  standalone: true,
  template: `
    <h2 mat-dialog-title>Inserir Link</h2>
    <mat-dialog-content>
      <mat-form-field appearance="outline" class="full-width">
        <mat-label>Digite a URL:</mat-label>
        <input matInput [(ngModel)]="url" placeholder="https://exemplo.com" />
      </mat-form-field>
    </mat-dialog-content>
    <mat-dialog-actions align="end">
      <button mat-button (click)="close()">Cancelar</button>
      <button mat-button color="primary" (click)="save()" [disabled]="!url">Inserir</button>
    </mat-dialog-actions>
  `,
  styles: [`.full-width { width: 100%; }`],
  imports: [
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    FormsModule
  ]
})
export class LinkDialogComponent {
  url: string = '';

  constructor(
    public dialogRef: MatDialogRef<LinkDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  save(): void {
    this.dialogRef.close(this.url);
  }

  close(): void {
    this.dialogRef.close(null);
  }
}
