import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyNFTComponent } from './my-nft.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('MyNFTComponent', () => {
  let component: MyNFTComponent;
  let fixture: ComponentFixture<MyNFTComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MyNFTComponent],
      imports: [HttpClientTestingModule]
    }).compileComponents();

    fixture = TestBed.createComponent(MyNFTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
