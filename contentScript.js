const zeroWidth = ["\u200B","\u200C","\u200D"];
const homoglyphs = {
  A: ["Α","А"], a: ["а","ɑ"],
  E: ["Ε","Е","ҽ"], e: ["е","ҽ"],
  // …
};

function obfuscate(str) {
  return Array.from(str).map(ch => {
    let out = ch;
    if (homoglyphs[ch] && Math.random() < 0.1) {
      const subs = homoglyphs[ch];
      out = subs[Math.floor(Math.random() * subs.length)];
    }
    if (Math.random() < 0.1) {
      out += zeroWidth[Math.floor(Math.random() * zeroWidth.length)];
    }
    return out;
  }).join("");
}

chrome.runtime.onMessage.addListener((msg) => {
  if (msg.action === "protect") {
    const sel = window.getSelection();
    if (!sel.rangeCount) return;

    const active = document.activeElement;

    // Handle <input> or <textarea>
    if (active && (active.tagName === "TEXTAREA" || active.tagName === "INPUT")) {
      const start = active.selectionStart;
      const end = active.selectionEnd;
      const text = active.value.substring(start, end);
      const ob = obfuscate(text);

      active.setRangeText(ob, start, end, "end");
      return;
    }

    // Handle normal DOM selection
    const range = sel.getRangeAt(0);
    const text = sel.toString();
    const ob = obfuscate(text);

    const span = document.createElement("span");
    span.textContent = ob;
    span.style.whiteSpace = "pre-wrap";

    range.deleteContents();
    range.insertNode(span);
    sel.removeAllRanges();
  }
});
