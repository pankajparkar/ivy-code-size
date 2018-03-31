import { Component, ɵrenderComponent as renderComponent } from '@angular/core';
import * as i0 from "@angular/core";
export class HelloWorld {
    constructor() {
        this.name = 'World!';
    }
}
/** @nocollapse */
HelloWorld.ctorParameters = () => [];
HelloWorld.ngComponentDef = i0.ɵdefineComponent({ type: HelloWorld, selector: [[["hello-world"], null]], factory: function HelloWorld_Factory() { return new HelloWorld(); }, template: function HelloWorld_Template(ctx, cm) { if (cm) {
        i0.ɵE(0, "h3");
        i0.ɵT(1);
        i0.ɵe();
    } i0.ɵt(1, i0.ɵi1("Hello ", ctx.name, "")); } });
renderComponent(HelloWorld);
