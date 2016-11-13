import { Injectable } from '@angular/core';
import * as marked from 'marked';

@Injectable()
export class MarkdownParser {
    private md:MarkedStatic;

    constructor() {
        this.md = marked;
    }

    parse(markdown: string): string {
        return this.md.parse(markdown);
    }
}