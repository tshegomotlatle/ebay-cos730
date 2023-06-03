import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from "@angular/router/testing";


import { BuyNFTComponent } from './buy-nft.component';
import { ActivatedRoute } from '@angular/router';

describe('BuyNFTComponent', () => {
  let component: BuyNFTComponent;
  let fixture: ComponentFixture<BuyNFTComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BuyNFTComponent],
      imports: [RouterTestingModule]
    }).compileComponents();

    fixture = TestBed.createComponent(BuyNFTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
