import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-code-outline',
  imports: [],
  templateUrl: './code-outline.html',
  styleUrl: './code-outline.css',
})
export class CodeOutline{
  @Input() text!: string[];
}
