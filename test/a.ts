import log from 'log-decorator';

class A {
    constructor() {}
    @log
    get(a, b, c) {
        return 3;
    }
}
