
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatSidenavModule } from '@angular/material/sidenav';
import { PrimaryHeaderComponent } from './primary-header.component';

describe('PrimaryHeaderComponent', () => {
  let component: PrimaryHeaderComponent;
  let fixture: ComponentFixture<PrimaryHeaderComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      imports: [MatSidenavModule],
      declarations: [PrimaryHeaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrimaryHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
