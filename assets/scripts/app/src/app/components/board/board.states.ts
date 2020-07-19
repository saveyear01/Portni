import { ContentOnly, NavContentOnly } from "./../../commons/utils/layout.utils";
import { BaseComponent } from './base/base.component';
import { DashboardComponent } from './dashboard/dashboard.component';

export const BOARD_STATES: object[] = [
    {
        name:'board',
        url: '/home',
        views: NavContentOnly(BaseComponent),
        redirectTo: 'dashboard'
    },
    {
        name: 'dashboard',
        url: '/dashboard',
        parent: 'board',
        views: ContentOnly(DashboardComponent)
    }
] 