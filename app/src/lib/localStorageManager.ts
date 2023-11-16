export class LocalStorageManager {
	set(key: string, value: string | object): void {
		value = typeof value === 'object' ? JSON.stringify(value) : value;
		window.localStorage.setItem(key, value);
	}

	get(key: string): object {
		const storedValue = window.localStorage.getItem(key);

		if (storedValue !== null) return JSON.parse(storedValue);
		return {};
	}

	remove(key: string): void {
		window.localStorage.removeItem(key);
	}

	exists(key: string): boolean {
		return Object.keys(this.get(key)).length === 0 ? false : true;
	}
}
