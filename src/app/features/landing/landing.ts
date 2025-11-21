import { Component } from '@angular/core';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import {
  solarMenuDotsBold,
  solarHealthAndSafetyOutline,
  solarMagicStick2Outline,
  solarLightbulbMinimalisticOutline,
  solarSurgicalOutline,
  solarStarBold,
  solarMapPointOutline,
  solarPhoneCallingOutline,
  solarClockCircleOutline,
} from '@ng-icons/solar-icons';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [NgIconComponent],
  templateUrl: './landing.html',
  styleUrl: './landing.css',
  providers: [
    provideIcons({
      solarMenuDotsBold,
      solarHealthAndSafetyOutline,
      solarMagicStick2Outline,
      solarLightbulbMinimalisticOutline,
      solarSurgicalOutline,
      solarStarBold,
      solarMapPointOutline,
      solarPhoneCallingOutline,
      solarClockCircleOutline,
    }),
  ],
})
export class LandingComponent {}
