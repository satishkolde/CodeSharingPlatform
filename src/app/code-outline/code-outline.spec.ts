import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeOutline } from './code-outline';

describe('CodeOutline', () => {
  let component: CodeOutline;
  let fixture: ComponentFixture<CodeOutline>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CodeOutline]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CodeOutline);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
