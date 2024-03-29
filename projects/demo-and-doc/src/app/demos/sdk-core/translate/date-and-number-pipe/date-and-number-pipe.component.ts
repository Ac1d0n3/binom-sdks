import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { BnTranslateSwitchMenuComponent, CUSTOM_DATE_FORMATS, CustomDatePickerAdapter } from '@binom/sdk-core/translate';
import { DateAdapter, MAT_DATE_FORMATS } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import { FormsModule } from '@angular/forms';
import { LangChangeEvent, TranslateModule, TranslateService } from '@ngx-translate/core';
import { BnPrismBoxComponent } from '@binom/sdk-prism/code-box';
@Component({
  selector: 'app-date-and-number-pipe',
  standalone: true,
  imports: [CommonModule, TranslateModule, BnTranslateSwitchMenuComponent,MatFormFieldModule, MatInputModule, MatDatepickerModule,FormsModule, BnPrismBoxComponent],
  providers: [
    DatePipe,
    {provide: DateAdapter, useClass: CustomDatePickerAdapter},
    {provide: MAT_DATE_FORMATS, useValue: CUSTOM_DATE_FORMATS}

  ],
  changeDetection:ChangeDetectionStrategy.OnPush,
  templateUrl: './date-and-number-pipe.component.html',
  styleUrl: './date-and-number-pipe.component.scss'
})
export class DateAndNumberPipeComponent {
  langcode:string = 'en-US';
  testnum:number = 112277.1222
  constructor(public translate:TranslateService, private adapter: DateAdapter<Date>){
    this.langcode = this.translate.currentLang || 'en-US';
    this.translate.onLangChange.subscribe((event: LangChangeEvent) => { this.langcode = event.lang; this.getLangContent() }) ;
    this.getLangContent();
  }
  testdate:Date = new Date();

  private getLangContent(){
   
    this.adapter.setLocale(this.langcode.substring(0, 2))
   
  }



  code1 = ` import registerLocaleData from '&#64;angular/common';
  import localeEn from '&#64;angular/common/locales/en';
  import localeDe from '&#64;angular/common/locales/de';
  import localeDeExtra from '&#64;angular/common/locales/extra/de';
  registerLocaleData(localeEn, 'en');‚
  registerLocaleData(localeDe, 'de', localeDeExtra);`;

  code2 = `this.adapter.setLocale(this.langcode.substring(0, 2))`;
}
