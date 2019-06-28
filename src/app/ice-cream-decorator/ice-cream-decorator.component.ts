/*
 * File: /Users/tonymedrano/Desktop/ice-cream-decorators/src/app/ice-cream-decorator/ice-cream-decorator.component.ts
 * Project: /Users/tonymedrano/Desktop/ice-cream-decorators
 * Created Date: Friday June 28th 2019
 * Author: Tony Medrano <info@tonymedrano.com>
 * -----------------------------------------------------
 * Last Modified: Friday June 28th 2019 6:10:17 pm
 * Modified By: Tony Medrano
 * -----------------------------------------------------
 * Copyright (c) 2019 Tony Medrano Development
 */

import { Component } from '@angular/core';
import Emoji from "../emoji-decorator/emoji-decorator";

@Component({
  selector: 'app-ice-cream-decorator',
  templateUrl: './ice-cream-decorator.component.html',
  styleUrls: ['./ice-cream-decorator.component.scss']
})

export class IceCreamDecoratorComponent {
   //. Deorator in Angular (TypeScript) #2
  @Emoji(`🍊`) fruit = 'orange'
  @Emoji(`🍦`) flavor = 'vanilla'

  constructor(){
    console.info(this.fruit);
  }
}
