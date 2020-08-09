export class Utility {
    static ValidateEmail(email: string): boolean {
        return (/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email))
    }
}