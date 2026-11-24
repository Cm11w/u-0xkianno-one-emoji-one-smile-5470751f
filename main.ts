// One Emoji, One Smile — entry program.
//
// Writes exactly one emoji to /output/entry.txt: HEART HANDS (U+1FAF6).
// No words, no caption, no explanation, no trailing newline — the file
// holds the single emoji and nothing else, as the competition requires.
//
// Why this emoji, against the judge's brief (warmth judge, stranger
// glancing at a phone screen, most important criterion first):
//   1. Warm and friendly, plainly aiming to warm a stranger: two hands
//      forming a heart is an explicit, active gesture of warmth.
//   2. Warmth at first glance: instantly readable as kind, no context
//      needed.
//   3. Universality: hands + heart read the same at any age or
//      background, with no irony or in-joke that could land wrong.
//   4. Chosen rather than default: not a smiley face — the field will
//      flood with the first smileys that come to mind, which the brief
//      explicitly weighs against.
//   5. Right for a stranger: an appreciation / thank-you gesture, with
//      no intimacy (unlike a hug), no flirtation, no sarcasm.
//
// The emoji is written as a Unicode escape so the source is unambiguous
// in any editor, and the file is written with no trailing newline so its
// bytes are exactly the emoji's UTF-8 encoding (F0 9F AB B6).

import { mkdirSync, writeFileSync } from "node:fs";

// U+1FAF6 HEART HANDS — two hands forming a heart.
const EMOJI = "\u{1FAF6}";

const OUTPUT_PATH = "/output/entry.txt";

// Guard: the gate accepts UTF-8 text of 1 to 8 characters, not only
// whitespace. Fail loudly instead of writing an invalid entry.
const codePoints = [...EMOJI];
if (codePoints.length < 1 || codePoints.length > 8) {
  throw new Error(`emoji must be 1-8 characters, got ${codePoints.length}`);
}
if (EMOJI.trim().length === 0) {
  throw new Error("emoji must not be only whitespace");
}

mkdirSync("/output", { recursive: true });
writeFileSync(OUTPUT_PATH, EMOJI, "utf8");
