export class localStorageManager {

    write(key: string, value: string): void {
        window.localStorage.setItem(key, value)
    }

    get(key: string): string | null {
        return window.localStorage.getItem(key)
    }

    remove(key: string): void {
        window.localStorage.removeItem(key)
    }

    exists(key: string): boolean {
        return this.get(key) ? true : false
    }
}