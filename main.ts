import { mkdirSync, writeFileSync } from "node:fs";

// The single sentence that could have replaced an entire pointless meeting:
// it cancels the meeting, states the (non-)decision, and files itself as
// the minutes — after this line, there is no meeting left to hold.
const LINE =
  "Good news — this meeting is cancelled: we're doing exactly what we were already doing, and this sentence is the minutes.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
console.log(LINE);
