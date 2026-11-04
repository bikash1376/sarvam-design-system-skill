#!/usr/bin/env node
/**
 * Render an HTML file (banner or page) to PNG at an exact size.
 *
 *   node scripts/render.js <input.html> <output.png> <width> <height|full> [--scale=1]
 *
 * Examples
 *   node scripts/render.js templates/banner.html out/meta-1.png 1080 1080
 *   node scripts/render.js http://localhost:5173 out/page-375.png 375 full   (dev server URL)
 *
 * Needs: npm i puppeteer-core   (uses the locally installed Chrome or Edge)
 * Before capturing, it scrolls the page so scroll-reveal sections render.
 */
const path = require('path');
const fs = require('fs');
const puppeteer = require('puppeteer-core');

const CANDIDATES = [
  process.env.CHROME_PATH,
  'C:/Program Files/Google/Chrome/Application/chrome.exe',
  'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe',
  '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  '/usr/bin/google-chrome', '/usr/bin/chromium', '/usr/bin/chromium-browser',
].filter(Boolean);

(async () => {
  const [input, output, w, h] = process.argv.slice(2);
  if (!input || !output || !w) { console.error('usage: render.js <in.html> <out.png> <w> <h|full>'); process.exit(1); }
  const scale = +(process.argv.find(a => a.startsWith('--scale=')) || '--scale=1').split('=')[1];
  const exe = CANDIDATES.find(p => fs.existsSync(p));
  if (!exe) throw new Error('No Chrome/Edge found; set CHROME_PATH');
  const full = !h || h === 'full';
  const browser = await puppeteer.launch({ executablePath: exe, headless: true, args: ['--allow-file-access-from-files', '--hide-scrollbars'] });
  const page = await browser.newPage();
  await page.setViewport({ width: +w, height: full ? 900 : +h, deviceScaleFactor: scale, isMobile: +w < 500, hasTouch: +w < 500 });
  const target = /^https?:\/\//.test(input) ? input : 'file:///' + path.resolve(input).split(path.sep).join('/');
  await page.goto(target, { waitUntil: 'networkidle0' });
  await page.evaluate(() => document.fonts.ready);
  if (full) {
    const H = await page.evaluate(() => document.documentElement.scrollHeight);
    for (let y = 0; y < H; y += 600) { await page.evaluate(v => window.scrollTo(0, v), y); await new Promise(r => setTimeout(r, 80)); }
    await page.evaluate(() => window.scrollTo(0, 0));
  }
  await new Promise(r => setTimeout(r, 400));
  fs.mkdirSync(path.dirname(path.resolve(output)), { recursive: true });
  await page.screenshot({ path: output, fullPage: full, clip: full ? undefined : { x: 0, y: 0, width: +w, height: +h } });
  await browser.close();
  console.log('rendered', output);
})().catch(e => { console.error(e); process.exit(1); });
