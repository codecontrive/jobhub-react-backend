export class BaseEntity<T> {
    constructor(item: T) {
        Object.keys(item).forEach((key) => {
            this[key] = item[key];
        });
    }
}
//WIP