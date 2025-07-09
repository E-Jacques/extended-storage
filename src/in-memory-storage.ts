/**
 * A storage method that allow to use memory to store data.
 * 
 * This storage doesn't handle data persistance.
 * 
 * @publicApi
 * @example
 * ```typescript
 * const storage = new InMemoryStorage();
 * 
 * storage.setItem("key", "value");
 * ```
 */
export class InMemoryStorage implements Storage {

    /**
     * The private in-memory storage.
     */
    private storage: Record<string, string> = {};

    [name: string]: any;

    /**
     * @inheritdoc
     */
    length: number = 0;

    /**
     * @inheritdoc
     */
    clear(): void {
        this.storage = {};
        this.length = 0;
    }

    /**
     * @inheritdoc
     */
    getItem(key: string): string | null {
        return this.storage[key] ?? null;
    }

    /**
     * @inheritdoc
     */
    key(index: number): string | null {
        return Object.keys(this.storage)[index] ?? null;
    }

    /**
     * @inheritdoc
     */
    removeItem(key: string): void {
        if (this.hasKey(key)) {
            this.length -= 1;
        }

        delete this.storage[key];
    }

    /**
     * @inheritdoc
     */
    setItem(key: string, value: string): void {
        if (!this.hasKey(key)) {
            this.length += 1
        }

        this.storage[key] = value;
    }

    private hasKey(key: string): boolean {
        return key in this.storage;
    }

}