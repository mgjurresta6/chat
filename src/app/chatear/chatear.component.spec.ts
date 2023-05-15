import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatearComponent } from './chatear.component';

describe('ChatearComponent', () => {
  let component: ChatearComponent;
  let fixture: ComponentFixture<ChatearComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChatearComponent]
    });
    fixture = TestBed.createComponent(ChatearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
