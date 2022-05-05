import {Component, OnDestroy} from '@angular/core';
import { NbThemeService } from '@nebular/theme';
import { forkJoin, Observable } from 'rxjs';
import { map, takeWhile } from 'rxjs/operators' ;
import { SolarData } from '../../@core/data/solar';
import { DashboardService } from './dashboard.service';

interface CardSettings {
  title: string;
  iconClass: string;
  type: string;
}

@Component({
  selector: 'ngx-dashboard',
  styleUrls: ['./dashboard.component.scss'],
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent implements OnDestroy {

  private alive = true;
  public listData: number[];
  solarValue: number;
  lightCard: CardSettings = {
    title: 'Light',
    iconClass: 'nb-lightbulb',
    type: 'primary',
  };
  rollerShadesCard: CardSettings = {
    title: 'Roller Shades',
    iconClass: 'nb-roller-shades',
    type: 'success',
  };
  wirelessAudioCard: CardSettings = {
    title: 'Wireless Audio',
    iconClass: 'nb-audio',
    type: 'info',
  };
  coffeeMakerCard: CardSettings = {
    title: 'Coffee Maker',
    iconClass: 'nb-coffee-maker',
    type: 'warning',
  };

  statusCards: string;

  commonStatusCardsSet: CardSettings[] = [
    this.lightCard,
    this.rollerShadesCard,
    this.wirelessAudioCard,
    this.coffeeMakerCard,
  ];

  statusCardsByThemes: {
    default: CardSettings[];
    cosmic: CardSettings[];
    corporate: CardSettings[];
    dark: CardSettings[];
  } = {
    default: this.commonStatusCardsSet,
    cosmic: this.commonStatusCardsSet,
    corporate: [
      {
        ...this.lightCard,
        type: 'warning',
      },
      {
        ...this.rollerShadesCard,
        type: 'primary',
      },
      {
        ...this.wirelessAudioCard,
        type: 'danger',
      },
      {
        ...this.coffeeMakerCard,
        type: 'info',
      },
    ],
    dark: this.commonStatusCardsSet,
  };

  constructor(private themeService: NbThemeService,
              private solarService: SolarData,
              private dashboardService: DashboardService) {
    this.themeService.getJsTheme()
      .pipe(takeWhile(() => this.alive))
      .subscribe(theme => {
        this.statusCards = this.statusCardsByThemes[theme.name];
    });
  }

  ngOnInit(): void {
    const getTotalView = this.dashboardService.getTotalView();
    const getTotalMoney = this.dashboardService.getTotalMoney();
    const getTotalOrder = this.dashboardService.getTotalOrder();
    const getTotalUser = this.dashboardService.getTotalUser();

    forkJoin([getTotalView, getTotalMoney, getTotalOrder, getTotalUser]).pipe(map(el => el.map(el => el.body))).subscribe(res => {
      console.log(res);
      if (res) {
        this.listData = res;
      }
    });
  }

  ngOnDestroy() {
    this.alive = false;
  }
}
