import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { MatMenuModule, MatSelectModule } from '@angular/material';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { By } from '@angular/platform-browser';

describe('AppComponent', () => {

  let fixture: ComponentFixture<AppComponent>;
  let appComponent: AppComponent;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent],
      imports: [MatMenuModule, MatSelectModule, NoopAnimationsModule]
    }).compileComponents().then(() => {
      fixture = TestBed.createComponent(AppComponent);
      appComponent = fixture.componentInstance;
      fixture.detectChanges();
    });
  }));

  it('should create the app', async(() => {
    expect(appComponent).toBeTruthy();
  }));

  it(`should have as title 'angular-testing-with-material'`, async(() => {
    expect(appComponent.title).toEqual('angular-testing-with-material');
  }));

  it('should render title in a h1 tag', async(() => {
    const compiledDom = fixture.debugElement.nativeElement;
    expect(compiledDom.querySelector('h1').textContent).toContain('Welcome to angular-testing-with-material!');
  }));

  it('should have a menu with 2 options (native click)', () => {
    const compiledDom = fixture.debugElement.nativeElement;
    compiledDom.querySelector('button').click();
    fixture.detectChanges();
    expect(fixture.debugElement.queryAll(By.css('.menu-item')).length).toEqual(2);
  });

  it('should have a menu with 2 options (view child)', () => {
    fixture.componentInstance.menuTrigger.openMenu();
    fixture.detectChanges();
    expect(fixture.debugElement.queryAll(By.css('.menu-item')).length).toEqual(2);
  });

  it('should have a select with 3 options (native click)', () => {
    const compiledDom = fixture.debugElement.nativeElement;
    compiledDom.querySelector('mat-select').click();
    fixture.detectChanges();
    expect(fixture.debugElement.queryAll(By.css('mat-option')).length).toEqual(3);
  });

  it('should have a select with 3 options (view child)', () => {
    fixture.componentInstance.foodSelect.open();
    fixture.detectChanges();
    expect(fixture.debugElement.queryAll(By.css('mat-option')).length).toEqual(3);
  });
});
