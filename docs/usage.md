# Compass Usage Guide

This guide explains how to run the Compass app locally, start the development server, and view your changes live.

---

## Prerequisites
- Node.js (v18+ recommended)
- npm (comes with Node.js)
- Python 3.11+ (for pack scanning and metadata tools)
- (Optional) Virtual environment for Python: `.venv`

---

## 1. Install Dependencies

### JavaScript/React
```powershell
npm install
```

### Python (optional, for scanning tools)
```powershell
python -m venv .venv
. .\.venv\Scripts\Activate
pip install -r requirements.txt
```

---

## 2. Start the Development Server

```powershell
npm run dev
```

- The app will start on [http://localhost:3000](http://localhost:3000) (or another port if 3000 is busy).
- Open this URL in your browser to view the live app.

---

## 3. View Changes Live
- Edit any file in `/src` (components, pages, styles).
- The server supports hot-reloading: changes appear instantly in the browser.
- If you add new routes/pages, refresh the browser to see them.

---

## 4. Run the Pack Scanner (Metadata)

To update metadata packs after code changes:
```powershell
. .\.venv\Scripts\Activate  # if not already active
python tools/scan_full.py
```
- This updates `/packs` with the latest code structure and metadata.

---

## 5. Troubleshooting
- If you see build errors, check your terminal for details.
- For Tailwind or CSS errors, ensure you’re using the correct import in `globals.css`:
  ```css
  @import "tailwindcss";
  ```
- Restart the dev server after major config or dependency changes:
  ```powershell
  Ctrl+C  # to stop
  npm run dev  # to restart
  ```

---

## 6. Stopping the Server
- In the terminal running the server, press `Ctrl+C` to stop.

---

## 7. Pushing Changes (if you have write access)
```powershell
git add .
git commit -m "your message"
git push
```

---

## 8. Additional Notes
- All UI and logic lives in `/src`.
- Reports and metadata are in `/docs` and `/packs`.
- For Python tools, always activate `.venv` first.
- For help, see the batch reports in `/docs/ui reports/` and `/docs/copilot reports/`.

---

**Compass is now ready for rapid iteration and live development!**
