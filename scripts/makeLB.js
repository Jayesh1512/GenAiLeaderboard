import { read, write } from "./utils.js";
const dbFileLoc = "./src/components/leaderBoard.ts";

export const init = () => {
    let participants = read("db.json");
    let profile = participants["participants"];

    let leaderBoard = [];
    for (let i = 0; i < profile.length; i++) {
        if (profile[i]["isEnrollStatusGood"] == false) {
            continue;
        }

        let color = "black";
        if (profile[i]["skills"] == 2) {
            color = "pink";
        } else if (profile[i]["skills"] == 3) {
            color = "green";
        } else if (profile[i]["skills"] == 1) {
            color = "blue";
        }

        let data = {
            name: profile[i]["name"],
            nickname: profile[i]["nickname"],
            skills: profile[i]["skills"],
            trackOne: profile[i]["trackOne"],
            trackTwo: profile[i]["trackTwo"],
            trackThree: profile[i]["trackThree"],
            color,
            latestSkill: profile[i]["badges"]?.[0] ? profile[i]["badges"][0]["badgeDate"] : null,
            rank: 0
        };
        leaderBoard.push(data);
    }

    leaderBoard.sort((a, b) => {
        let maxA = a["trackOne"] + a["trackTwo"] + a["trackThree"];
        let maxB = b["trackOne"] + b["trackTwo"] + b["trackThree"];
        let minA = Math.min(a["trackOne"], a["trackTwo"], a["trackThree"]);
        let minB = Math.min(b["trackOne"], b["trackTwo"], b["trackThree"]);

        if (maxA === maxB) {
            if (minA === minB) {
                if (a["latestSkill"] === b["latestSkill"]) {
                    return 0;
                } else if (a["latestSkill"] < b["latestSkill"]) {
                    return -1;
                } else {
                    return 1;
                }
            } else if (minA > minB) {
                return -1;
            } else {
                return 1;
            }
        } else if (maxA > maxB) {
            return -1;
        } else {
            return 1;
        }
    });

    let rank = 1;
    for (let i = 0; i < leaderBoard.length; i++) {
		leaderBoard[i].rank = rank + i;
    }

    write(
        dbFileLoc,
        `export const leaderBoardData = ` +
        JSON.stringify(leaderBoard, null, 4) +
        `;\n\nexport const updateTime =  "${participants["time"]}"`
    );
};
