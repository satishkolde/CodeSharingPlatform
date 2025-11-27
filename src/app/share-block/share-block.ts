import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { CodeService } from '../services/code.service';
import { ActivatedRoute, Router } from '@angular/router';
import {ClipboardModule} from '@angular/cdk/clipboard';

@Component({
  selector: 'app-share-block',
  imports: [ClipboardModule],
  templateUrl: './share-block.html',
  styleUrl: './share-block.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ShareBlock implements OnInit {
  shareSuccess: boolean = false;
  @Input() sharedButton!: boolean;
  shareLink: string = '';
  errorMessage: string = '';

  constructor(private codeServie:CodeService, private ref: ChangeDetectorRef, private router: Router,private route: ActivatedRoute){
  }

  ngOnInit(): void {
    this.route.queryParamMap.subscribe(params => {
      const id = params.get("id");
      this.shareLink = `${this.codeServie.frontBaseURL}/code?id=${id}`;
      this.ref.detectChanges();
    })
  }

  shareCode() {
    this.codeServie.uploadCode().subscribe({
      next: (data:any) => {
        this.codeServie.setData("");
        console.log("Should be navigated!");
        this.router.navigate(["/code"],{
          queryParams:{
            id:data.id
          }
        });
      },
      error: (err) => {
        this.errorMessage = err;
      }
    });
  }

  navigateToNew() {
    this.codeServie.setData('');
    this.router.navigate(["/code"]);
  }
}
