import { InMemoryStorage } from "./in-memory-storage";

describe("InMemoryStorage", (): void => {
    it("should allow to set & get keys", () => {
        const storage = new InMemoryStorage();

        storage.setItem("key1", "my-value1");
        expect(storage.getItem("key1")).toEqual("my-value1");

        storage.setItem("key2", "my-value2");
        expect(storage.getItem("key2")).toEqual("my-value2");

        storage.setItem("key1", "new-value");
        expect(storage.getItem("key1")).toEqual("new-value");
    });

    it("should return null if key not found", () => {
        const storage = new InMemoryStorage();

        expect(storage.getItem('key')).toEqual(null);
    });

    it("should be able to remove items", () => {
        const storage = new InMemoryStorage();

        storage.setItem("key", "value");
        expect(storage.getItem('key')).toEqual("value");

        storage.removeItem("key")
        expect(storage.getItem('key')).toEqual(null);
    });

    it("should be able to remove all keys", () => {
        const storage = new InMemoryStorage();

        storage.setItem("key", "value");
        storage.setItem("key1", "value1");
        storage.setItem("key2", "value2");
        expect(storage.getItem('key')).toEqual("value");
        expect(storage.getItem('key1')).toEqual("value1");
        expect(storage.getItem('key2')).toEqual("value2");

        storage.clear();
        expect(storage.getItem('key')).toEqual(null);
        expect(storage.getItem('key1')).toEqual(null);
        expect(storage.getItem('key2')).toEqual(null);
    });

    it("should correctly handle length property", () => {
        const storage = new InMemoryStorage();

        storage.setItem("key", "value");
        storage.setItem("key1", "value1");
        expect(storage.length).toEqual(2);

        storage.setItem("key", "new value");
        expect(storage.length).toEqual(2);

        expect(storage.getItem("key")).toEqual("new value");
        expect(storage.length).toEqual(2);

        storage.removeItem("key1");
        expect(storage.length).toEqual(1);

        storage.setItem("key1", "new value1");
        expect(storage.length).toEqual(2);

        storage.clear();
        expect(storage.length).toEqual(0);
    })
})