import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-parent-to-child-comm',
    template: `
        <h2>
            {{"Hello : " + parentData}}
        </h2>
    `,
    styles: []
})
export class ComponentParentToChildCommComponent implements OnInit {

    /**
     * this variable name is same with parent data property name
     */
    // @Input() public parentData;

    /**
     * aliasing parent data property name
     */
    @Input('parentData') public pData;

    constructor() { }

    ngOnInit() {
    }

}
