export class GlobalScope {
    public readonly scope: Record<string, any>;

    constructor(scope: Record<string, any>) {
        this.scope = scope;
    }
}

export const isGlobalScope = (value: any): value is GlobalScope => {
    return value instanceof GlobalScope;
}