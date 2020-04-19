import { Component, OnInit } from '@angular/core';
import {
  faGithubSquare,
  faLinkedin,
  faSteamSquare,
  faInstagramSquare,
  faYoutubeSquare,
} from '@fortawesome/free-brands-svg-icons';

import { faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-connect-page',
  templateUrl: './connect-page.component.html',
  styleUrls: ['./connect-page.component.css'],
})
export class ConnectPageComponent implements OnInit {
  constructor() {}

  faGithubSquare = faGithubSquare;
  faLinkedin = faLinkedin;
  faSteamSquare = faSteamSquare;
  faInstagramSquare = faInstagramSquare;
  faYoutubeSquare = faYoutubeSquare;
  faEnvelopeSquare = faEnvelopeSquare;

  ngOnInit(): void {}
}
