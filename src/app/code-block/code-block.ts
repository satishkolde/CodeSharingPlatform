import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { CodeService } from '../services/code.service';
import { ActivatedRoute } from '@angular/router';
import { CodeOutline } from '../code-outline/code-outline';
import { ShareBlock } from '../share-block/share-block';

@Component({
  selector: 'app-code-block',
  imports: [CommonModule, ReactiveFormsModule,CodeOutline,ShareBlock],
  templateUrl: './code-block.html',
  styleUrl: './code-block.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CodeBlock implements OnInit {
  codeBlockInput = new FormControl('');
  sharedButton: boolean = true;
  lines = 0;
  outlineText: string[] = [];

  constructor(private codeService: CodeService, private ref: ChangeDetectorRef, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.queryParamMap.subscribe(params => {
      const id = params.get('id');
      if(id){
        this.codeService.getCode(id).subscribe({
          next: (data:any) =>{
            this.codeBlockInput.setValue(data.text);
            this.sharedButton = false;
            this.ref.detectChanges();
          },
          error: (err) => {
            console.log(err);
          }
        })
      }
      else {
        this.codeBlockInput.setValue('');
        this.sharedButton = true;
      }
    })
    this.codeBlockInput.valueChanges.subscribe(newCodeBlockValue => {
      if(newCodeBlockValue){
        this.codeService.setData(newCodeBlockValue);
        this.lines = (newCodeBlockValue.match(/\n/g) || []).length;
        this.outlineText = newCodeBlockValue.split("\n");
      }else{
        this.lines = 0;
        this.outlineText = [];
      }
    });
  }

}
