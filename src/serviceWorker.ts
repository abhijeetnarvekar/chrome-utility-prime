import { BrowsingData } from './browsingData';
import { initializeStorageWithDefaults } from './storage';

chrome.runtime.onInstalled.addListener(async () => {
  // Here goes everything you want to execute after extension initialization

  await initializeStorageWithDefaults({});

  console.log('Extension successfully installed!');
});

// Log storage changes, might be safely removed
chrome.storage.onChanged.addListener((changes) => {
  for (const [key, value] of Object.entries(changes)) {
    console.log(
      `"${key}" changed from "${value.oldValue}" to "${value.newValue}"`,
    );
  }
});

chrome.runtime.onStartup.addListener(() => {
  console.log('Chrome started!');
  const browsingData = new BrowsingData();
  browsingData.clear(() => {
    console.log('Browsing data cleared!');
  });
}
 
)
