import dayjs from "dayjs";

export function getSmartMatchTime(matchTime: string): string {
  const now = dayjs();
  const matchDateTime = dayjs(matchTime);

  // If match is today
  if (matchDateTime.isSame(now, "day")) {
    return `Today, ${matchDateTime.format("h:mm A")}`;
  }

  // If match is tomorrow
  if (matchDateTime.isSame(now.add(1, "day"), "day")) {
    return `Tomorrow, ${matchDateTime.format("h:mm A")}`;
  }

  // Future match
  return `${matchDateTime.format("dddd")}, ${matchDateTime.format("h:mm A")}`;
}
