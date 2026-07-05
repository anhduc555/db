// ConfigLoader.js - Loads API key from environment or local config file

export class ConfigLoader {
  /**
   * Attempts to load the API key from various sources in order:
   *   1. .env file (plain text, line "API_KEY=...")
   *   2. config.json ({ "apiKey": "..." })
   *   3. Fallback to null (requires manual entry)
   * Returns the key string or null.
   */
  static async loadApiKey() {
    // Try .env file
    try {
      const resp = await fetch('.env');
      if (resp.ok) {
        const text = await resp.text();
        const match = text.match(/^API_KEY\s*=\s*(.+)$/m);
        if (match) return match[1].trim();
      }
    } catch (_) {}

    // Try config.json
    try {
      const resp = await fetch('config.json');
      if (resp.ok) {
        const json = await resp.json();
        if (json && typeof json.apiKey === 'string') return json.apiKey.trim();
      }
    } catch (_) {}

    return null;
  }
}
