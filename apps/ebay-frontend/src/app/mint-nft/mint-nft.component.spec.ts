import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MintNFTComponent } from './mint-nft.component';
import { HttpClientTestingModule } from '@angular/common/http/testing'

describe('MintNFTComponent', () => {
  let component: MintNFTComponent;
  let fixture: ComponentFixture<MintNFTComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MintNFTComponent],
      imports: [HttpClientTestingModule]
    }).compileComponents();

    fixture = TestBed.createComponent(MintNFTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
