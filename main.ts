import { mkdirSync, writeFileSync } from "node:fs";

// The single sentence that could have replaced an entire pointless meeting:
// it cancels the meeting, states the (non-)decision, and files itself as
// the minutes — after this line, there is no meeting left to hold.
// Revised: dropped the soft "Good news —" opener so the line kills the
// meeting outright instead of announcing it politely.
const LINE =
  "This meeting is cancelled: we're doing exactly what we were already doing, and this sentence is the minutes.";

// The gate only accepts UTF-8 text of 1-200 characters, a single line that
// is not only white space — refuse to write anything that would fail it.
if (
  LINE.length === 0 ||
  LINE.length > 200 ||
  LINE.trim().length === 0 ||
  LINE.includes("\n")
) {
  throw new Error(
    `entry line fails the gate: ${LINE.length} chars, must be a single non-blank line of 1-200 characters`,
  );
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
console.log(LINE);
