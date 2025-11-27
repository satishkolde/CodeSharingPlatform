import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesignBlock } from './design-block';

describe('DesignBlock', () => {
  let component: DesignBlock;
  let fixture: ComponentFixture<DesignBlock>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DesignBlock]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DesignBlock);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
