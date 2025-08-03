# CrawlGuard Project Roadmap

## ✅ Immediate Todos

1. **Expand context menu triggers**
   - Update `background.js` to include `"editable"` and `"page"` in the `contexts` array.
   - This will allow the user to activate the plugin even without a selection (useful for future features like full-page protection).

2. **Track context menu creation more robustly**
   - Add guards or checks in `background.js` to avoid duplicate context menu creation.
   - Optional: log or debug when the menu is successfully created.

3. **Expose aggressiveness as a configurable setting later (e.g., "light", "medium", "paranoid").**

4. Preserve formatting
   - If the selection includes formatting (like bold), this will strip it.
   - Replace text inside text nodes, not the full range.
   - Walk the DOM and selectively rewrite text nodes only.

5. Edge case: partial selections inside <input> or <textarea>
   - The code currently doesn’t work on inputs. To support that:
     ```
     const active = document.activeElement;
     if (active && (active.tagName === "TEXTAREA" || active.tagName === "INPUT")) {
       const start = active.selectionStart;
       const end = active.selectionEnd;
       const text = active.value.substring(start, end);
       const ob = obfuscate(text);
       active.setRangeText(ob);
       return;
     }
     ```

6. Consider making it automated as someone types into a text field

7. Randomize between inserting text with zero-width <wbr> and splicing into textNode.nodeValue
---

## 🧪 Experimental / Research

*(Move roadmap items here as they begin development.)*


## ✅ Phase 0 – Core Foundation (Done or In Progress)
- [x] Create branding, icon set, and project identity  
- [x] Write initial README and license (Apache 2.0)  
- [x] Define core obfuscation strategy (zero-width, homoglyphs, etc.)  
- [x] Add context menu entry ("Protect with CrawlGuard")  
- [x] Insert obfuscated text into current selection  
- [x] Skip form inputs (e.g. password, email, credit card fields)  
- [x] Ensure no network requests or background data usage  
- [x] Manual install support for Chrome, Edge, and Firefox  
- [x] Establish ethical use policy and responsible use principles  

---

## 🔜 Phase 1 – Usability and Transparency
- [ ] Add in-page visual indicator when text has been modified  
- [ ] Support keyboard shortcut activation (configurable)  
- [ ] Offer user feedback via non-intrusive toast/notification  
- [ ] Add undo support (one-level rollback)  
- [ ] Basic settings UI (e.g. toggle default behavior, reset options)  

---

## 🚧 Phase 2 – Obfuscation Modes and Control
- [ ] Implement adjustable obfuscation intensity levels  
- [ ] Add live preview toggle before applying changes  
- [ ] Provide user option to highlight obfuscated characters  

---

## 🌐 Phase 3 – Domain & Session Awareness
- [ ] Add per-domain opt-in/out controls  
- [ ] Remember user settings per site  
- [ ] Display when plugin is active/inactive in the toolbar icon  

---

## 🧪 Phase 4 – Experimental Expansions

### Image Protection
- [ ] Begin research into AI-resistant image obfuscation techniques  
  - Metadata tampering  
  - Perceptual hash disruption  
  - Watermarking and hidden signal embedding  
- [ ] Prototype “Protect image” via right-click  
- [ ] Track open-source developments in anti-scraping for media  
- [ ] Explore integration with client-side image editing libraries  
- [ ] Add support for Markdown, HTML export, or file-safe output  

### Video Protection
- [ ] Begin research into video obfuscation  
  - Audio watermarking  
  - Frame perturbation techniques  
  - Subtitle/script interference  
- [ ] Prototype frame-level obfuscation (e.g. one-frame overlays or subtle distortions)  

### Sound Protection
- [ ] Research obfuscation methods for recorded audio  
  - Speech pattern variation  
  - Voiceprint noise masking  
  - Inaudible watermarking  
- [ ] Prototype “Protect audio” wrapper or browser tool  
- [ ] Investigate integration with open audio tools (e.g., Audacity, WebAudio API)  

---

## 🔒 Phase 5 – Security, Privacy, and Audits
- [ ] Conduct accessibility audit (screen reader, tab flow)  
- [ ] Provide visibility into what characters are inserted and why  
- [ ] Publish code audit checklist to ensure no hidden behaviors  
- [ ] Document all Unicode blocks and techniques used  
- [ ] Add support for test mode with debug output  

---

## 🧰 Phase 6 – Developer & Community Ecosystem
- [ ] Publish official Chrome and Firefox extension listings  
- [ ] Create developer docs (how to add new techniques, hooks)  
- [ ] Enable plug-in system for adding new obfuscation methods  
- [ ] Launch GitHub Discussions or forum for feedback/sharing  
- [ ] Add badges: license, browser compatibility, build/test status  
