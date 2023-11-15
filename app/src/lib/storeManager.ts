import { writable, type Writable } from 'svelte/store';
import { localStorageManager } from './localStorageManager';
import type { workspaceFile } from './interfaces';

export class workspaceFileStore {
    private _store: Writable<workspaceFile>
    private _localStorage: localStorageManager | null
    private _config: workspaceFile | null
    private _localStorageKey: string

    constructor() {
        this._store = writable<workspaceFile>()
        this._localStorageKey = "workspaceFileStore"
        this._localStorage = null
        this._config = null
    }

    get store(): Writable<workspaceFile> {
        return this._store
    }

    configExists(): boolean {
        if (this._localStorage) {
            return this._localStorage.exists("workspaceFileStore") ?  true : false
        } else {
            throw Error("Local store was not loaded. Use `workspaceFileStore.loadStore()` to load the local store.")
        }
    }

    loadStore(): void {
        this._localStorage = new localStorageManager()
        this._localStorage.write(this._localStorageKey, JSON.stringify(this._config))
    }
}
