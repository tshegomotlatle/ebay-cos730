import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MintNFTComponent } from './mint-nft.component';

describe('MintNFTComponent', () => {
  let component: MintNFTComponent;
  let fixture: ComponentFixture<MintNFTComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MintNFTComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MintNFTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
