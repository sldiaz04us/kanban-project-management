export class DateUtil {
  static getNow(): string {
    return new Date().toISOString();
  }

  static getSeconds(date: Date) {
    return Math.round((new Date().getTime() - date.getTime()) / 1000);
  }

  static getMinutes(date: Date) {
    return Math.round((new Date().getTime() - date.getTime()) / (1000 * 60));
  }

  static getHours(date: Date) {
    return Math.round((new Date().getTime() - date.getTime()) / (1000 * 60 * 60));
  }

  static getDays(date: Date) {
    return Math.round((new Date().getTime() - date.getTime()) / (1000 * 60 * 60 * 24));
  }
}
