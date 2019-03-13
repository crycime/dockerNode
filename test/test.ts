/**
 * Created with Cocos2d-x3.0 jsb.
 * User: lizizhen
 * Date: 2019/1/24
 * Time: 11:15
 *
 */
@类()
class Greeter {
    @类属性('world')
    greeting: string;

    constructor(message: string) {
        this.greeting = message;
    }

    @方法()
    greet(@方法属性('userId') a) {
        return 'Hello, ' + this.greeting;
    }
}

function 方法属性(paramName: string) {
    return function(target, methodName: string, paramIndex: number) {
        console.log(`方法属性{target:${target},methodName:${methodName},paramIndex:${paramIndex}`);
    };
}

function 类属性(value: string) {
    return function(target: any, propertyName: string) {
        console.log(`类属性{target:${target},propertyName:${propertyName}`);
    };
}

function 类() {
    return function(target: any) {
        console.log(`类{target:${target}`);
    };
}

function 方法() {
    return function(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        console.log(`方法{target:${target},propertyKey:${propertyKey},descriptor:${descriptor}`);
    };
}

const y = new Greeter('ssss');
y.greet(1);
