import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegistroMaestrosComponent } from './registro-maestros.component';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { MaestrosService } from 'src/app/services/maestros.service';
import { FacadeService } from 'src/app/services/facade.service';

describe('RegistroMaestrosComponent', () => {
  let component: RegistroMaestrosComponent;
  let fixture: ComponentFixture<RegistroMaestrosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistroMaestrosComponent ],
      imports: [ FormsModule, MatFormFieldModule, MatInputModule, MatIconModule ],
      providers: [
        { provide: Location, useValue: {} },
        { provide: ActivatedRoute, useValue: {} },
        { provide: Router, useValue: {} },
        { provide: MaestrosService, useValue: {} },
        { provide: FacadeService, useValue: {} }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroMaestrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
