import { Component, Input } from '@angular/core';
import { Content } from './content';

@Component({
    template: `
    <div class="header"></div>
        <div class="container">
            <sidebar></sidebar>
            <content></content>
        </div>
    `,
    selector: 'my-app',
    directives: [Content]
})
export class MyApp {

}
