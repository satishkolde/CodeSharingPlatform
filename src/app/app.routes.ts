import { Routes } from '@angular/router';
import { CodeBlock } from './code-block/code-block';

export const routes: Routes = [
    {path:'',redirectTo:'code',pathMatch:"full"},
    {path:'code',component:CodeBlock}
];
