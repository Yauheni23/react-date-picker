export class LocalStorage {
    public static get(id: string, featureName: string): any {
        return LocalStorage.getFromStore(featureName).filter((item: any) => item.id === id)[0];
    }

    public static getAll(featureName: string): any {
        return LocalStorage.getFromStore(featureName);
    }

    public static set(featureName: string, data: any): any {
        localStorage.setItem(featureName, LocalStorage.stringify(data));
    }

    private static getFromStore( featureName: string): any {
        return LocalStorage.parse(localStorage.getItem(featureName));
    }

    private static parse(json: string | null): any {
        return json ? JSON.parse(json) : {};
    }

    private static stringify(json: object | null): any {
        return json ? JSON.stringify(json) : {};
    }
}