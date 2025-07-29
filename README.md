# CrawlGuard

CrawlGuard is a browser extension that helps protect your writing from being scraped and ingested by AI models. It adds subtle changes to your text that don’t affect how people read it, but make it harder for automated systems to parse.

This tool is designed for writers, artists, and anyone who wants more control over how their online content is treated.

## Why it exists

AI systems are trained on massive amounts of public data. Often, that includes personal blogs, creative writing, social posts, and other content that was never meant to be repurposed or monetized by someone else.

CrawlGuard gives you a way to push back. It doesn’t block crawlers outright. Instead, it modifies your text in ways that are invisible or barely noticeable to humans, but disruptive to machine tokenizers.

## What it does

- Lets you manually obfuscate selected text with a right-click or shortcut
- Keeps content readable for people while scrambling it for AI
- Skips form fields like passwords, search boxes, and payment info
- Runs entirely on your device with no tracking or external requests

## How it works

CrawlGuard inserts invisible characters and swaps certain letters with lookalikes from other Unicode blocks. These changes break up the patterns that language models rely on without changing what the text looks like to most readers.

Examples of techniques include:

- Zero-width spaces and joiners
- Unicode homoglyph substitutions (like `a → а`, `e → е`)
- Directional and control characters that confuse tokenizers

We’re continuously refining the approach to stay ahead of AI normalization techniques.

## Installation
Access via app stores is planned once the project has moved past MVP.

### Chrome / Edge

1. Download or clone this repository
2. Go to `chrome://extensions`
3. Enable Developer Mode
4. Click “Load unpacked” and select the `extension/` folder

### Firefox

1. Visit `about:debugging#/runtime/this-firefox`
2. Click “Load Temporary Add-on”
3. Select the `manifest.json` file in the `extension/` folder

## Development

To make changes locally:

```bash
git clone https://github.com/yourname/crawlguard.git
cd crawlguard
# Edit files in the extension/ directory
```

Key files:

- `contentScript.js` – Applies obfuscation to selected text
- `background.js` – Handles browser context menu integration
- `manifest.json` – Defines extension permissions and behavior

## License

CrawlGuard is open source under the Apache 2.0 License. You’re free to use, modify, and share it, including in commercial projects. Attribution is appreciated but not required unless you're distributing a modified version.

See the [LICENSE](LICENSE) file for full details.

## Responsible use

CrawlGuard is intended for individual use to protect written content. Don’t use it to bypass moderation, mislead users, or interfere with accessibility tools. The goal is to defend authorship, not to disrupt communication.

## Project Roadmap
Planned features and milestones include:

- Visual feedback when text is protected
- Adjustable obfuscation levels (light, standard, aggressive)
- Site-specific settings and toolbar controls
- Support for undo and live preview
- Image protection via metadata tampering and perceptual hash disruption
- Experimental tools for obfuscating video and audio content
- Privacy and accessibility audits
- Extension listings for Chrome and Firefox
- Community contributions, plugin architecture, and developer documentation

For the full roadmap, see [ROADMAP.md](./ROADMAP.md).

## Credits

Created by [Sean Starnes](https://starnes.cloud). Inspired by the growing need for digital self-defense tools that work with, not against, the open web.  Special thanks to the cybersecurity and privacy community for providing tools, inspiration, and the foundation needed for this project.  Additional thanks to the UT Austin MSISP program for creating the environment where ideas like this could flourish.
