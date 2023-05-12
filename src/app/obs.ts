type CBType = 'update' | 'error' | 'complete';
type CBFunction<V> = (value?: V) => void;

interface CB<T> {
    type: CBType;
    cb: CBFunction<T>;
}

export class Observable<VALUE> {
    private cbs: CB<VALUE>[];
    private value: VALUE;

    constructor(initialValue: VALUE) {
        this.cbs = [];
        this.value = initialValue;
    }

    update(value: VALUE): void {
        this.value = value;
        this.cbs
        .filter(cb => cb.type === 'update')
        .forEach(cb => cb.cb(this.value));
    }

    error(error: any): void {
        this.cbs
        .filter(cb => cb.type === 'error')
        .forEach(cb => cb.cb(error));
    }

    complete(): void {
        this.cbs
        .filter(cb => cb.type === 'complete')
        .forEach(cb => cb.cb());
    }

    // shtoni metodat perkatese per error dhe coplete
    // ruani cb per error dhe complete

    subscribe(
        update: CBFunction<VALUE>,
        error?: CBFunction<VALUE>,
        complete?: CBFunction<VALUE>
    ): void {
        this.cbs.push({
            type: 'update',
            cb: update
        });

        if (error) {
            this.cbs.push({
                type: 'error',
                cb: update
            });
        }

        if (complete) {
            this.cbs.push({
                type: 'complete',
                cb: update
            });
        }
    }
}