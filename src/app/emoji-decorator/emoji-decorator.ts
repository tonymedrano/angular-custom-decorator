/*
 * File: /Users/tonymedrano/Desktop/ice-cream-decorators/src/app/emoji-decorator/emoji-decorator.ts
 * Project: /Users/tonymedrano/Desktop/ice-cream-decorators
 * Created Date: Friday June 28th 2019
 * Author: Tony Medrano <info@tonymedrano.com>
 * -----------------------------------------------------
 * Last Modified: Friday June 28th 2019 6:11:58 pm
 * Modified By: Tony Medrano
 * -----------------------------------------------------
 * Copyright (c) 2019 Tony Medrano Development
 */

 //. Deorator in Angular (TypeScript) #1

const Emoji = (emoji: string): void => {
    console.log('Who comes first?!...', emoji);
    
    return (target: Object, key: string | symbol) => {
        let val = target[key]

        const getter = () => {
            return val
        }

        const setter = (next: string) => {
            console.log(`${next} is the flavor!...`);
            val = `${emoji} ${next} ${emoji}`
        }

        Object.defineProperty(target, key, {
            get: getter,
            set: setter,
            enumerable: true,
            configurable: true
        })
    }
}

export default Emoji