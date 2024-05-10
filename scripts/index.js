import { init as participantsInit } from "./getParticipants.js";
import { init as initLB } from "./makeLB.js";
// import { read, write } from "./utils.js";

/** @type {Record<string, unknown>[]} */
// ! DO IT TO REFINE DATA ONLY (SINGLE TIME)
// let data = read("data.json");
// data = data.filter(r => r["Redemption Status"] === "Yes");
// data = data.map((d) => ({
// 	name: d["Student Name"],
// 	profileLink: d["Google Cloud Skills Boost Profile URL"],
// 	enrollDate: new Date(d["Enrolment Date & Time"]).getTime(),
// 	isEnrollStatusGood: d["Enrolment Status"] === "All Good",
// }));

// write("participants.json", data);
await participantsInit();
initLB();
