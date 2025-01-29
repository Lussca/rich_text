import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { BrowserModule } from '@angular/platform-browser';
import { MatButtonModule } from '@angular/material/button';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LinkDialogComponent } from './components/link-dialog.component';

@Component({
  selector: 'app-root',
  imports: [
    FormsModule,
    MatDialogModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule
  ],
  styleUrl: './app.component.scss',
  templateUrl: './app.component.html',
})
export class AppComponent {
  @ViewChild('editor', { static: false }) editorRef!: ElementRef;
  editorContent: string = '';

  constructor(private dialog: MatDialog) {}

  format(command: string): void {
    document.execCommand(command, false, '');
  }
  
  insertLink(): void {
    const dialogRef = this.dialog.open(LinkDialogComponent, {
      width: '400px',
    });

    dialogRef.afterClosed().subscribe((url: string | null) => {
      if (url) {
        document.execCommand('createLink', false, url);
      }
    });
  }
}
