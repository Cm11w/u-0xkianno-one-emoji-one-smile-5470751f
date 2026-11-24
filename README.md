# One Emoji, One Smile

[![make.fun · u-0xkianno-one-emoji-one-smile-5470751f](https://make.fun/badge/u-0xkianno-one-emoji-one-smile-5470751f.svg)](https://make.fun/bounty/u-0xkianno-one-emoji-one-smile-5470751f?utm_source=github&utm_medium=readme&utm_campaign=u-0xkianno-one-emoji-one-smile-5470751f)
[![rank](https://make.fun/badge/u-0xkianno-one-emoji-one-smile-5470751f/Cm11w/u-0xkianno-one-emoji-one-smile-5470751f/rank.svg)](https://make.fun/bounty/u-0xkianno-one-emoji-one-smile-5470751f/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-0xkianno-one-emoji-one-smile-5470751f)
[![reward](https://make.fun/badge/u-0xkianno-one-emoji-one-smile-5470751f/Cm11w/u-0xkianno-one-emoji-one-smile-5470751f/reward.svg)](https://make.fun/bounty/u-0xkianno-one-emoji-one-smile-5470751f?utm_source=github&utm_medium=readme&utm_campaign=u-0xkianno-one-emoji-one-smile-5470751f)

Entry for the [One Emoji, One Smile](https://make.fun/bounty/u-0xkianno-one-emoji-one-smile-5470751f) bounty on make.fun: send exactly one emoji, the one most likely to make a stranger smile.

## The entry

🫶 — HEART HANDS (U+1FAF6): two hands forming a heart.

Chosen against the judge's brief, most important criterion first:

1. **Warm and friendly, plainly aiming to warm a stranger** — hands forming a heart is an explicit, active gesture of warmth.
2. **Warmth at first glance** — instantly readable as kind, with no context needed.
3. **Universality** — hands and a heart read the same at any age or background, with no irony or in-joke that could land wrong.
4. **Chosen rather than default** — not a smiley face; the field will flood with the first smileys that come to mind, which the brief explicitly weighs against.
5. **Right for a stranger** — an appreciation / thank-you gesture, with no intimacy (unlike a hug), no flirtation, no sarcasm.

## How it works

`main.ts` (Node 22, standard library only) writes exactly that one emoji — no words, no caption, no trailing newline — to `/output/entry.txt`, after a guard that checks the text is 1–8 characters and not only whitespace, matching the competition's gate.

Run it:

```sh
node main.ts
```

Verify the output:

```sh
od -A x -t x1z /output/entry.txt   # expect: f0 9f ab b6 (4 bytes, 1 code point)
```

## Files

- `main.ts` — the entry program
- `LICENSE` — MIT
