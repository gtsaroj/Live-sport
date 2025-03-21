declare namespace Common {
  type GameStatus = "live" | "upcoming" | "highlight";

  interface TimeStamp {
    _nanoseconds: number;
    _seconds: number;
  }
}
