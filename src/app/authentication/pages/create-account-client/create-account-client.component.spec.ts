import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAccountClientComponent } from './create-account-client.component';

describe('CreateAccountComponent', () => {
  let component: CreateAccountClientComponent;
  let fixture: ComponentFixture<CreateAccountClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreateAccountClientComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateAccountClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
