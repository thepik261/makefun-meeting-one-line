import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

// The single sentence that could have replaced an entire pointless meeting:
// the decision was already made before anyone sat down, so the hour that
// follows is only theatre — after this line, there is no meeting left to hold.
const LINE =
  "The decision was already made before this meeting started — this hour is just the part where we all pretend it wasn't.";

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
// Read the file back: a write that silently failed must not pass as an entry.
if (readFileSync("/output/entry.txt", "utf8") !== LINE) {
  throw new Error("entry.txt does not match the entry line after writing");
}
console.log(LINE);
