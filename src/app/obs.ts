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

    // shtoni metodat perkatese per error dhe coplete
    // ruani cb per error dhe complete

    subscribe(
        update: CB<VALUE>,
        error?: CB<VALUE>,
        complete?: CB<VALUE>
    ): void {
        this.cbs.push(update);
    }
}