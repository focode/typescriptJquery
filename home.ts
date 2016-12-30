/// <reference path="jquery.d.ts" />

import { AjaxContainer } from "./ajaxLib";

module Home {
    export class HomeContainer {
        private content: HTMLElement;

        constructor(value?: any) {
      //    document.body.innerHTML = value;
        var animal = new AjaxContainer();
        var el: HTMLElement = document.getElementById('grid1');
        $(el).css({"color": "blue" });


        }

      }


}

window.onload=() =>{
  var object1 = new Home.HomeContainer("ram");
}
