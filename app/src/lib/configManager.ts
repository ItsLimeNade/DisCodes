import { writable, type Writable } from 'svelte/store';
import type { discodesConfig } from './interfaces';
import { LocalStorageManager } from './localStorageManager';

//TODO Add a config updater when the config version updates

export class ConfigManager {
	private readonly _localStorage: LocalStorageManager;
	private readonly _localStorageKey: 'discodesConfig';
	private _config: discodesConfig;
	private readonly _store: Writable<discodesConfig>;

	constructor() {
		this._localStorage = new LocalStorageManager();
		this._localStorageKey = 'discodesConfig';
		this._config = {
			version: 1,
			workspaces: [
				{
					name: 'Untitled',
					author: 'Unnamed',
					lastEdited: new Date(),
					createdAt: new Date(),
					files: [{
                        name: "Introduction",
                        description: "An introduction to coding with discodes!",
                        createdAt: new Date(),
                        lastEdited: new Date(),
                        blocklyWorkspace: undefined
                    }]
				}
			]
		};

		if (this.exists()) this._config = this._localStorage.get(this._localStorageKey) as discodesConfig; //! FIX THIS MONSTRUOSITY ASAP
		this._localStorage.set(this._localStorageKey, this._config);

		this._store = writable<discodesConfig>(this._config);

		this._store.subscribe((newConfig: discodesConfig) => {
			this._localStorage.set(this._localStorageKey, newConfig);
		});
	}

	get config(): discodesConfig {
		return this._config;
	}

	set config(newConfig: discodesConfig) {
		this._config = newConfig;
		this._store.set(this._config);
	}

	get store(): Writable<discodesConfig> {
		return this._store;
	}

	exists(): boolean {
		return this._localStorage.exists(this._localStorageKey);
	}
}
