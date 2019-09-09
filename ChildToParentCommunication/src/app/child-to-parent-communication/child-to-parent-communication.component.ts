import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'app-child-to-parent-comm',
    template: `
            <h2>
                {{"Hello " + name}}
            </h2>
            <button (click)="fireEvent()">Click Me</button>
        `,
        styles: []
})
export class ChildToParentCommunicationComponent implements OnInit {

    @Output() public childEvent = new EventEmitter();

    public name = "Dibyendu";
    
    constructor() { }

    ngOnInit() {
    }

    fireEvent()
    {
        this.childEvent.emit("Hey! I am your child");
    }

}
