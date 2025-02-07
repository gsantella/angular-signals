import { Routes } from '@angular/router';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import { Page3Component } from './page3/page3.component';
import { C1Component } from './c1/c1.component';

export const routes: Routes = [
    {
        path: 'page1',
        component: Page1Component,
    },
    {
        path: 'page2',
        component: Page2Component,
    },
    {
        path: 'page3',
        component: Page3Component,
    },
    {
        path: 'c1',
        component: C1Component,
    },
];
