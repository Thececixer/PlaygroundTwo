import { webkit, chromium, firefox } from "playwright";

(async () => {
  for (const browserType of [webkit, firefox, chromium]) {
    const browser = await browserType.launch();
    const page = await browser.newPage();
    await page.goto("https://github.com");
    await page.screenshot({
      path: "screenshoot-${browserType.name()}.png",
    });
    await browser.close();
    console.log("sux" + browserType.name());
  }
})();
