import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShareBlock } from './share-block';

describe('ShareBlock', () => {
  let component: ShareBlock;
  let fixture: ComponentFixture<ShareBlock>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShareBlock]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShareBlock);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
