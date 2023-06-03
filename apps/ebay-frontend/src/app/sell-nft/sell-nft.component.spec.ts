import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellNFTComponent } from './sell-nft.component';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

describe('SellNFTComponent', () => {
  let component: SellNFTComponent;
  let fixture: ComponentFixture<SellNFTComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SellNFTComponent],
      imports: [RouterTestingModule]
    }).compileComponents();

    fixture = TestBed.createComponent(SellNFTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
