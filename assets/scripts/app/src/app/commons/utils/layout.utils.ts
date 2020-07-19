import { HeaderComponent } from '../../components/partials/header/header.component';

/* 
 * CONTENT ONLY LAYOUT 
 * 
*/
export function ContentOnly(content) {
    return { content }
}

/* 
 * LAYOUT WITH HEADER NAV
 * 
*/
export function NavContentOnly(Content) {
    return {
        header: HeaderComponent,
        content: Content
    }
}