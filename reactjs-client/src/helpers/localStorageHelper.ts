export class LocalStorageHelper {
    static get AccessToken(): string | null {
        return localStorage.getItem("access_token");
    }

    static set AccessToken(token: string | null) {
        localStorage.setItem("access_token", token ?? '');
    }

    static clear() {
        localStorage.removeItem("access_token");
    }

    static get isUserAuthorized(): boolean {
        return !! LocalStorageHelper.AccessToken;
      }
}