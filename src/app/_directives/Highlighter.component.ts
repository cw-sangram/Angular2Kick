import { HostBinding, Input, Directive } from "@angular/core";

@Directive({
    selector: '[Highlighter]'
})

export class HighlighterDirectiveComponent {
  @HostBinding('style.backgroundColor') @Input() highlightColor:string;
}
