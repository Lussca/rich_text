import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet, 
    FormsModule, 
    MatInputModule, 
    MatFormFieldModule, 
    MatIconModule, 
    MatButtonModule
  ],
  styleUrl: './app.component.scss',
  template: `
  <div class="central">
    <div class="area">
      <div class="toolbar">
        <button mat-button (click)="format('bold')">
          <mat-icon>format_bold</mat-icon>
        </button>
        <button mat-button (click)="format('italic')">
          <mat-icon>format_italic</mat-icon>
        </button>
        <button mat-button (click)="format('underline')">
          <mat-icon>format_underlined</mat-icon>
        </button>
        <button mat-button (click)="format('justifyLeft')">
          <mat-icon>format_align_left</mat-icon>
        </button>
        <button mat-button (click)="format('justifyCenter')">
          <mat-icon>format_align_center</mat-icon>
        </button>
        <button mat-button (click)="format('justifyRight')">
          <mat-icon>format_align_right</mat-icon>
        </button>
        <button mat-button (click)="insertLink()">
          <mat-icon>link</mat-icon>
        </button>
      </div>

      <textarea matInput placeholder="" id="editor" class="editor" (input)="saveContent()"></textarea>
    </div>
    <div class="output">
      <div [innerHTML]="editorContent"></div>
    </div>
  </div>
  `,
})
export class AppComponent {
  editorContent: string = '';

  format(command: string): void {
    document.execCommand(command, false, '');
  }

  insertLink(): void {
    const url = prompt('Digite a URL:');
    if (url) {
      document.execCommand('createLink', false, url);
    }
  }

  saveContent(): void {
    const editor = document.getElementById('editor');
    this.editorContent = editor?.innerHTML || '';
    // alert('Conteúdo salvo com sucesso!');
  }
}
