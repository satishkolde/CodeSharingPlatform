import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CodeService {
  codeBlock = signal<string>('');
  frontBaseURL = "http://localhost:4200"
  baseURL = "http://localhost:3000";

  constructor(private http: HttpClient){
    
  }

  setData(newCodeBlock: string) {
    this.codeBlock.set(newCodeBlock);
  }

  uploadCode() {
    const uploadData = {"text":this.codeBlock()};
    return this.http.post(`${this.baseURL}/code`,uploadData);
  }

  getCode(id: any) {
    return this.http.get(`${this.baseURL}/code/${id}`);
  }

}
