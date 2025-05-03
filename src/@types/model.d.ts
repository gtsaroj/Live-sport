declare namespace Model {
  interface Match {
    id?: string;
    title: string;
    image: string;
    goal: number;
  }

  interface MatchType {
    description?: string;
    id?: string;
    title: string;
    match: Match[];
    status: Common.GameStatus;
    adLink?: string;
    matchLink: string;
    isViewed: boolean;
    createdAt: Common.TimeStamp;
    updatedAt: Common.TimeStamp;
    venue?: string;
    matchTime?: string;
  }

  interface Upcoming {
    description?: string;
    id?: string;
    matchTime: string;
    team: { name: string; image: string }[];
    venue: string;
    createdAt?: Common.TimeStamp;
    updatedAt?: Common.TimeStamp;
  }

  interface highlight {
    description?: string;
    id?: string;
    title: string;
    matchLink: string;
    image?: string;
    adLink: string;
    description?: string;
    isViewed?: boolean;
    isViewed: boolean;
    createdAt: Common.TimeStamp;
    updatedAt: Common.TimeStamp;
  }

  interface AdBanner {
    id?: string;
    image: string;
    link?: string;
  }
}
