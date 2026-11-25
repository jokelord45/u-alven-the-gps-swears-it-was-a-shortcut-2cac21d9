import { mkdirSync, writeFileSync } from "node:fs";

// The GPS Swears It Was a Shortcut: one line, under 200 characters,
// the GPS's own excuse — smug, defensive, blaming the map —
// for sending the driver down the wrong road.
// Revised line: the GPS doubles down instead of apologising, with a
// fresh specific detail (cul-de-sac, lake) and a turn the reader
// does not see coming — the lake sued the map for custody of the road.
const ENTRY =
  "In my defence, that cul-de-sac was a shortcut until the lake sued the map for custody of the road, and I side with the map.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
