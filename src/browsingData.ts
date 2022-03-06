export class BrowsingData {

  public clear(callback: () => void): void {
      // Time in milliseconds at 01/01/1990
    const millisecondsPerWeek = 631216560000;
    const oneWeekAgo = new Date().getTime() - millisecondsPerWeek;
    chrome.browsingData.remove(
      {
        since: oneWeekAgo,
      },
      {
        appcache: true,
        cache: true,
        cookies: true,
        downloads: true,
        fileSystems: true,
        formData: true,
        history: true,
        indexedDB: true,
        localStorage: true,
        passwords: true,
        serviceWorkers: true,
        webSQL: true,
      },
      callback,
    );
  }
}