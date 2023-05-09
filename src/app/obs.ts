type CB<V> = (value: V) => void;

export class Observable<VALUE> {
    private cbs: CB<VALUE>[];
    private value: VALUE;

    constructor(initialValue: VALUE) {
        this.cbs = [];
        this.value = initialValue;
    }

    update(value: VALUE): void {
        this.value = value;
        this.cbs.forEach(cb => cb(this.value));
    }

    subscribe(cb: CB<VALUE>): void {
        this.cbs.push(cb);
    }
}