import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrowseNFTComponent } from './browse-nft.component';

describe('BrowseNFTComponent', () => {
  let component: BrowseNFTComponent;
  let fixture: ComponentFixture<BrowseNFTComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BrowseNFTComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BrowseNFTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
