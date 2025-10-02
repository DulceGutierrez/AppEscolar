import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegistroAlumnosComponent } from './registro-alumnos.component';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { AlumnosService } from 'src/app/services/alumnos.service';
import { FacadeService } from 'src/app/services/facade.service';

describe('RegistroAlumnosComponent', () => {
  let component: RegistroAlumnosComponent;
  let fixture: ComponentFixture<RegistroAlumnosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistroAlumnosComponent ],
      imports: [ FormsModule, MatFormFieldModule, MatInputModule, MatIconModule ],
      providers: [
        { provide: Location, useValue: {} },
        { provide: ActivatedRoute, useValue: {} },
        { provide: Router, useValue: {} },
        { provide: AlumnosService, useValue: {} },
        { provide: FacadeService, useValue: {} }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroAlumnosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
