# Extended storage

A library that expose more storage method that implements the Storage Interface so that you can easily replace the locale & session storage in your application.

## Available storage methods

All the storage methods presented bellow respects the `Storage` interface. Meaning that they are all compatible with window's `LocalStorage` or `SessionStorage`.

### In-Memory Storage

The in-memory storage method allows the developer to use memory to store information. Keep in mind that this method doesn't persist data.