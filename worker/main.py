import asyncio
from playwright.async_api import async_playwright
import os
import random

# The "Antigravity" Scraper
async def run_scraper():
    print("🚀 IGNITION: Launching Antigravity Worker...")
    
    # We use a context manager to handle the browser lifecycle
    async with async_playwright() as p:
        # Launch Chromium (Headless mode is faster, set headless=False to see it work)
        browser = await p.chromium.launch(headless=True)
        context = await browser.new_context(
            user_agent="Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36"
        )
        page = await context.new_page()
        
        target_url = "https://www.google.com/maps/search/software+companies+in+addis+ababa"
        print(f"🪐 TRAJECTORY SET: {target_url}")
        
        # Go to the URL
        await page.goto(target_url, timeout=60000)
        print("📍 ARRIVED: Google Maps Loaded.")
        
        # Wait for results to load (Antigravity logic: wait for the sidebar)
        try:
            # We wait for the specific class name usually found in Maps (this selector might change, standard scraping risk)
            # A generic way is to wait for a known text or aria-label
            await page.wait_for_selector('div[role="feed"]', state="attached", timeout=10000)
            print("👁️  VISUAL CONFIRMED: Results feed detected.")
            
            # Take a screenshot to prove it worked
            await page.screenshot(path="mission_report.png")
            print("📸 EVIDENCE SECURED: Saved 'mission_report.png'")
            
            # Simple extraction test (Get all texts from the feed)
            content = await page.locator('div[role="feed"]').all_inner_texts()
            print(f"📦 DATA EXTRACTED: Found {len(content)} raw blocks.")
            
        except Exception as e:
            print(f"💥 TURBULENCE: {e}")
            await page.screenshot(path="error_report.png")
            
        await browser.close()
        print("🛬 TOUCHDOWN: Mission Complete.")

if __name__ == "__main__":
    asyncio.run(run_scraper())