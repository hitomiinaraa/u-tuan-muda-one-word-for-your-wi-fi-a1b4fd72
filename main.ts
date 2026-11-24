import { mkdirSync, writeFileSync } from "node:fs";

// One Word for Your Wi-Fi — make.fun bounty
// u-tuan-muda-one-word-for-your-wi-fi-a1b4fd72
//
// The entry: "Dialup" — my Wi-Fi is so slow it might as well be dial-up.
// It won a 12-candidate A-vs-B / B-vs-A tournament (OneBar, Dialup,
// Houdini, Diva, Toddler, Potato, Hamster, Introvert, Fickle, RestartMe,
// Microwave, Hermit) judged on the published brief: on-subject fit first,
// then an instant laugh, truth about home Wi-Fi, freshness, and instant
// readability. The field is flooded with ghosting/gaslighting words, so
// the winning angle is the other universal Wi-Fi pain: speed. Dialup
// beats the runner-up Introvert on a bigger, instant laugh (the modem
// screech everyone remembers), the most universal truth (unbearably slow),
// and 6 bytes vs 9 on the size tie-break.

const ENTRY = "Dialup";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
