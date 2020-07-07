import { Injectable } from '@angular/core';
import { Router, Params } from '@angular/router';

@Injectable()
export class NavigationService {

  constructor(
    private router: Router
  ) { }

  private navigateTo(pageName?: string, params?: Params, merge: boolean = true) {
    if (!params) {
      params = {};
    }
    const path = pageName === undefined ? [] : ['/' + pageName];
    if (params) {
      this.router
        .navigate(path, { queryParams: params, queryParamsHandling: merge ? 'merge' : null });
    } else {
      this.router.navigate(path);
    }
  }

  navigateToHomepage() {
    this.navigateTo('');
  }

  navigateToLogin() {
    this.navigateTo('/auth/login');
  }
}
