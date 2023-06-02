import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyNFTComponent } from './my-nft.component';

describe('MyNFTComponent', () => {
  let component: MyNFTComponent;
  let fixture: ComponentFixture<MyNFTComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MyNFTComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MyNFTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
