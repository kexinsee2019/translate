import {Component} from '@angular/core';
import {TranslocoService} from '@ngneat/transloco';
import {ActivatedRoute, Router} from '@angular/router';

export const SITE_LANGUAGES = [
  {key: 'af', value: 'Afrikaans'},
  {key: 'az', value: 'Azərbaycanca'},
  {key: 'id', value: 'Bahasa Indonesia'},
  {key: 'ms', value: 'Bahasa Melayu'},
  {key: 'su', value: 'Basa Sunda'},
  {key: 'bs', value: 'Bosanski'},
  {key: 'ca', value: 'Català'},
  {key: 'ceb', value: 'Cebuano'},
  {key: 'ny', value: 'Chichewa'},
  {key: 'sn', value: 'Chishona'},
  {key: 'co', value: 'Corsican'},
  {key: 'cy', value: 'Cymraeg'},
  {key: 'da', value: 'Dansk'},
  {key: 'de', value: 'Deutsch'},
  {key: 'et', value: 'Eesti'},
  {key: 'en', value: 'English'},
  {key: 'en-GB', value: 'English (United Kingdom)'},
  {key: 'es', value: 'Español'},
  {key: 'es-419', value: 'Español (Latinoamérica)'},
  {key: 'eu', value: 'Euskara'},
  {key: 'fil', value: 'Filipino'},
  {key: 'fr', value: 'Français'},
  {key: 'fr-CA', value: 'Français (Canada)'},
  {key: 'fy', value: 'Frysk'},
  {key: 'ga', value: 'Gaeilge'},
  {key: 'gl', value: 'Galego'},
  {key: 'gd', value: 'Gàidhlig'},
  {key: 'ha', value: 'Hausa'},
  {key: 'haw', value: 'Hawaiian'},
  {key: 'hr', value: 'Hrvatski'},
  {key: 'ig', value: 'Igbo'},
  {key: 'zu', value: 'Isizulu'},
  {key: 'it', value: 'Italiano'},
  {key: 'jv', value: 'Javanese'},
  {key: 'sw', value: 'Kiswahili'},
  {key: 'lv', value: 'Latviešu'},
  {key: 'lt', value: 'Lietuvių'},
  {key: 'hu', value: 'Magyar'},
  {key: 'mg', value: 'Malagasy'},
  {key: 'mt', value: 'Malti'},
  {key: 'nl', value: 'Nederlands'},
  {key: 'no', value: 'Norsk'},
  {key: 'pl', value: 'Polski'},
  {key: 'pt-BR', value: 'Português (Brasil)'},
  {key: 'pt-PT', value: 'Português (Portugal)'},
  {key: 'ro', value: 'Română'},
  {key: 'st', value: 'Sesotho'},
  {key: 'sq', value: 'Shqip'},
  {key: 'sk', value: 'Slovenčina'},
  {key: 'sl', value: 'Slovenščina'},
  {key: 'so', value: 'Soomaali'},
  {key: 'fi', value: 'Suomi'},
  {key: 'sv', value: 'Svenska'},
  {key: 'mi', value: 'Te Reo'},
  {key: 'vi', value: 'Tiếng Việt'},
  {key: 'tk', value: 'Turkmen'},
  {key: 'tr', value: 'Türkçe'},
  {key: 'xh', value: 'isiXhosa'},
  {key: 'ht', value: 'kreyòl'},
  {key: 'yo', value: 'Èdè Yorùbá'},
  {key: 'is', value: 'Íslenska'},
  {key: 'cs', value: 'Čeština'},
  {key: 'el', value: 'Ελληνικά'},
  {key: 'uz', value: 'Ўзбек'},
  {key: 'be', value: 'Беларуская'},
  {key: 'bg', value: 'Български'},
  {key: 'mk', value: 'Македонски'},
  {key: 'mn', value: 'Монгол'},
  {key: 'ru', value: 'Русский'},
  {key: 'sr', value: 'Српски'},
  {key: 'uk', value: 'Українська'},
  {key: 'ky', value: 'кыргызча'},
  {key: 'tg', value: 'тоҷикӣ'},
  {key: 'kk', value: 'Қазақ Тілі'},
  {key: 'hy', value: 'Հայերեն'},
  {key: 'yi', value: 'ייִדיש'},
  {key: 'sd', value: 'سنڌي'},
  {key: 'ne', value: 'नेपाली'},
  {key: 'mr', value: 'मराठी'},
  {key: 'hi', value: 'हिन्दी'},
  {key: 'bn', value: 'বাংলা'},
  {key: 'pa', value: 'ਪੰਜਾਬੀ'},
  {key: 'gu', value: 'ગુજરાતી'},
  {key: 'ta', value: 'தமிழ்'},
  {key: 'te', value: 'తెలుగు'},
  {key: 'kn', value: 'ಕನ್ನಡ'},
  {key: 'ml', value: 'മലയാളം'},
  {key: 'si', value: 'සිංහල'},
  {key: 'th', value: 'ไทย'},
  {key: 'lo', value: 'ລາວ'},
  {key: 'my', value: 'ဗမာ'},
  {key: 'ka', value: 'ქართული'},
  {key: 'am', value: 'አማርኛ'},
  {key: 'km', value: 'ខ្មែរ'},
  {key: 'ku', value: 'Kurdî'},
  {key: 'he', value: 'עברית'},
  {key: 'ur', value: 'اردو'},
  {key: 'ar', value: 'العربية'},
  {key: 'fa', value: 'فارسی'},
  {key: 'ps', value: 'پښتو'},
  {key: 'zh-CN', value: '中文（简体中文)'},
  {key: 'zh-HK', value: '中文（繁體中文)'},
  {key: 'ja', value: '日本語'},
  {key: 'ko', value: '한국어'},
];

export function languageCodeNormalizer(languageCode) {
  let [navigatorParam] = languageCode.split('-');
  if (navigatorParam === 'zh') {
    // Handle simplified (china) vs traditional (hong kong, taiwan) chinese
    navigatorParam = ['zh-CN', 'zh-Hans'].includes(languageCode) ? 'zh-CN' : 'zh-HK';
  }
  if (navigatorParam === 'pt') {
    // Handle brazilian vs european portuguese
    navigatorParam = languageCode;
  }
  if (navigatorParam === 'iw') {
    // Handle Hebrew
    navigatorParam = 'he';
  }
  return navigatorParam;
}

@Component({
  selector: 'app-language-selector',
  templateUrl: './language-selector.component.html',
  styleUrls: ['./language-selector.component.scss'],
})
export class LanguageSelectorComponent {
  current: string;

  languages = this.groupLanguages();

  constructor(private router: Router, private route: ActivatedRoute, private transloco: TranslocoService) {
    this.current = transloco.getActiveLang();
  }

  private groupLanguages() {
    const languageGroups = [];
    let lastGroup = {label: 'A', languages: []};
    let didCrossZ = false;
    for (const language of SITE_LANGUAGES) {
      let label = language.value.charAt(0);
      const isAZ = label.charCodeAt(0) > 64 && label.charCodeAt(0) < 91;
      if (!isAZ || didCrossZ) {
        didCrossZ = true;
        label = 'OTHER';
      }

      if (label !== lastGroup.label) {
        languageGroups.push(lastGroup);
        lastGroup = {label, languages: []};
      }
      lastGroup.languages.push(language);
    }

    languageGroups.push(lastGroup);
    return languageGroups;
  }

  async change(event: Event) {
    const lang = (event.target as HTMLSelectElement).value;
    this.transloco.setActiveLang(lang);

    await this.router.navigate([], {
      relativeTo: this.route,
      queryParams: {lang},
      queryParamsHandling: 'merge',
    });
  }
}
