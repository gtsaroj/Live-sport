// Mock data based on the provided interfaces

// Define Common namespace types

// Mock data
const mockMatches = [
  // Football Live Matches
  {
    team: [
      {
        name: "Manchester United",

        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSYkiV4jDH2HMRqUijqXE8ijk2R7cdv7tGdg&s",
      },
      {
        name: "Liverpool",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSYkiV4jDH2HMRqUijqXE8ijk2R7cdv7tGdg&s",
      },
    ],
    id: "1",
    title: "Manchester United vs Liverpool",
    category: "football",
    status: "live",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSYkiV4jDH2HMRqUijqXE8ijk2R7cdv7tGdg&s",
    matchLink: "https://example.com/stream/f-live-1",
    isViewed: false,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    venue: "Old Trafford, Manchester",
    matchTime: "Live Now",
    goal: 2,
    description:
      "Premier League clash between Manchester United and Liverpool.",
  },
  {
    team: [
      {
        name: "Barcelona",
        image:
          "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/barcelona-vs-real-madrid-design-template-0c03cae56769f9e1a8eef017091f3a59_screen.jpg?ts=1698420692",
      },
      {
        name: "Real Madrid",
        image:
          "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/barcelona-vs-real-madrid-design-template-0c03cae56769f9e1a8eef017091f3a59_screen.jpg?ts=1698420692",
      },
    ],
    id: "f-live-2",
    title: "Barcelona vs Real Madrid",
    category: "football",
    status: "live",
    image:
      "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/barcelona-vs-real-madrid-design-template-0c03cae56769f9e1a8eef017091f3a59_screen.jpg?ts=1698420692",
    matchLink: "https://example.com/stream/f-live-2",
    isViewed: false,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    venue: "Camp Nou, Barcelona",
    matchTime: "Live Now",
    goal: 1,
    description: "El Clasico - The biggest rivalry in club football.",
  },

  // Cricket Live Matches
  {
    team: [
      {
        name: "India",
        image: "https://pbs.twimg.com/media/F7487GfWEAALlZO.jpg:large",
      },
      {
        name: "Australia",
        image: "https://pbs.twimg.com/media/F7487GfWEAALlZO.jpg:large",
      },
    ],
    id: "c-live-1",
    title: "India vs Australia",
    category: "cricket",
    status: "highlight",
    image: "https://pbs.twimg.com/media/F7487GfWEAALlZO.jpg:large",
    matchLink: "https://example.com/stream/c-live-1",
    isViewed: false,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    venue: "Melbourne Cricket Ground",
    matchTime: "Live Now",
    goal: 245,
    description: "Test match between India and Australia.",
  },

  // Basketball Live Matches
  {
    team: [
      {
        name: "LA Lakers",
        image:
          "https://fadeawayworld.net/.image/t_share/MTkyMzU0OTI0NzQxMjcyODE4/295938606_992409465487590_4796746801574236671_n.jpg",
      },
      {
        name: "Chicago Bulls",
        image:
          "https://fadeawayworld.net/.image/t_share/MTkyMzU0OTI0NzQxMjcyODE4/295938606_992409465487590_4796746801574236671_n.jpg",
      },
    ],
    id: "b-live-1",
    title: "LA Lakers vs Chicago Bulls",
    category: "basketball",
    status: "live",
    image:
      "https://fadeawayworld.net/.image/t_share/MTkyMzU0OTI0NzQxMjcyODE4/295938606_992409465487590_4796746801574236671_n.jpg",
    matchLink: "https://example.com/stream/b-live-1",
    isViewed: false,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    venue: "Staples Center, Los Angeles",
    matchTime: "Live Now",
    goal: 87,
    description: "NBA regular season game.",
  },

  // Football Upcoming Matches
  {
    team: [
      {
        name: "Arsenal",
        image:
          "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/chelsea-vs-arsenal-design-template-1d07729a89b828f53e4ae2b0ff9027b5_screen.jpg?ts=1697612525",
      },
      {
        name: "Chelsea",
        image:
          "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/chelsea-vs-arsenal-design-template-1d07729a89b828f53e4ae2b0ff9027b5_screen.jpg?ts=1697612525",
      },
    ],
    id: "f-upcoming-1",
    title: "Arsenal vs Chelsea",
    category: "football",
    status: "upcoming",
    image:
      "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/chelsea-vs-arsenal-design-template-1d07729a89b828f53e4ae2b0ff9027b5_screen.jpg?ts=1697612525",
    matchLink: "https://example.com/stream/f-upcoming-1",
    isViewed: false,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    venue: "Emirates Stadium, London",
    matchTime: "Tomorrow, 20:00",
    description: "London derby in the Premier League.",
  },
  {
    team: [
      {
        name: "Bayern Munich",
        image:
          "https://assets.bundesliga.com/contender/2023/9/1920-1080-max__2_.jpg?fit=1140,1140",
      },
      {
        name: "Borussia Dortmund",
        image:
          "https://assets.bundesliga.com/contender/2023/9/1920-1080-max__2_.jpg?fit=1140,1140",
      },
    ],
    id: "f-upcoming-2",
    title: "Bayern Munich vs Borussia Dortmund",
    category: "football",
    status: "upcoming",
    image:
      "https://assets.bundesliga.com/contender/2023/9/1920-1080-max__2_.jpg?fit=1140,1140",
    matchLink: "https://example.com/stream/f-upcoming-2",
    isViewed: false,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    venue: "Allianz Arena, Munich",
    matchTime: "Saturday, 18:30",
    description: "Der Klassiker - German football rivalry.",
  },

  // Cricket Upcoming Matches
  {
    team: [
      {
        name: "England",
        image:
          "https://img.freepik.com/premium-vector/england-vs-new-zealand-cricket-championship-match-with-flag-shield-beautiful-stadium-background_607751-1420.jpg",
      },
      {
        name: "New Zealand",
        image:
          "https://img.freepik.com/premium-vector/england-vs-new-zealand-cricket-championship-match-with-flag-shield-beautiful-stadium-background_607751-1420.jpg",
      },
    ],
    id: "c-upcoming-1",
    title: "England vs New Zealand",
    category: "cricket",
    status: "upcoming",
    image:
      "https://img.freepik.com/premium-vector/england-vs-new-zealand-cricket-championship-match-with-flag-shield-beautiful-stadium-background_607751-1420.jpg",
    matchLink: "https://example.com/stream/c-upcoming-1",
    isViewed: false,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    venue: "Lord's Cricket Ground, London",
    matchTime: "Friday, 11:00",
    description: "Test match between England and New Zealand.",
  },

  // Basketball Upcoming Matches
  {
    team: [
      {
        name: "Boston Celtics",
        image: "/assets/photo_2022-08-02_13-15-29.webp",
      },
      {
        name: "Brooklyn Nets",
        image: "/assets/photo_2022-08-02_13-15-29.webp",
      },
    ],
    id: "b-upcoming-1",
    title: "Boston Celtics vs Brooklyn Nets",
    category: "basketball",
    status: "upcoming",
    image: "/assets/photo_2022-08-02_13-15-29.webp",
    matchLink: "https://example.com/stream/b-upcoming-1",
    isViewed: false,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    venue: "TD Garden, Boston",
    matchTime: "Saturday, 19:00",
    description: "NBA Eastern Conference matchup.",
  },

  // Football Highlights
  {
    team: [
      {
        name: "Paris Saint-Germain",
        image: "/assets/photo_2022-08-02_13-15-29.webp",
      },
      {
        name: "Manchester City",
        image: "/assets/photo_2022-08-02_13-15-29.webp",
      },
    ],
    id: "f-highlight-1",
    title: "PSG vs Manchester City",
    category: "football",
    status: "highlight",
    image: "/assets/photo_2022-08-02_13-15-29.webp",
    matchLink: "https://example.com/stream/f-highlight-1",
    isViewed: false,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    venue: "Parc des Princes, Paris",
    matchTime: "Yesterday",
    description: "Champions League clash between PSG and Manchester City.",
  },

  // Cricket Highlights
  {
    team: [
      {
        name: "Pakistan",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNEaURwUmrc1u9Ea9W_ieSEwAjA0OZ_ZwphQ&s",
      },
      {
        name: "South Africa",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNEaURwUmrc1u9Ea9W_ieSEwAjA0OZ_ZwphQ&s",
      },
    ],
    id: "c-highlight-1",
    title: "Pakistan vs South Africa",
    category: "cricket",
    status: "highlight",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNEaURwUmrc1u9Ea9W_ieSEwAjA0OZ_ZwphQ&s",
    matchLink: "https://example.com/stream/c-highlight-1",
    isViewed: false,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    venue: "National Stadium, Karachi",
    matchTime: "2 days ago",
    description: "T20 match between Pakistan and South Africa.",
  },
  // IPL
  {
    team: [
      {
        name: "RCB",
        image:
          "https://cdn.search.brave.com/serp/v1/static/img/app/rh/sports/cricket/team/ddce5ac07dfe3b1dfbd869399dac130fffab2140637156f7d733282a64a4983b-7d6n46dy8qbyegpwloxdvlpxb.png",
      },
      {
        name: "CSK",
        image:
          "https://cdn.search.brave.com/serp/v1/static/img/app/rh/sports/cricket/team/5cd228557b1e70d130e96d9f3073acf62150061f6102eae8efbb4dee4f578d27-9369k3czpzqn8q58hik191yw2.svg",
      },
    ],
    id: "ipl-1",
    title: "RCB vs CSK",
    category: "cricket",
    status: "live",
    image:
      "https://imgs.search.brave.com/Z6QU9KlIMjBwT45qlxPqVaAk1cM53kY9vo1tyHOKooE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/amFncmFuam9zaC5j/b20vaW1hZ2VzLzIw/MjUvTWFyY2gvMjgz/MjAyNS9oZWFkdG9o/ZWFkLWNza3JjYi53/ZWJw",
    isViewed: false,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    venue: "Mumbai, India",
    matchTime: "Today, 7:45 PM",
    description: `Today, Saturday, May 3, 2025, the Indian Premier League (IPL) features a thrilling encounter between the Chennai Super Kings (CSK) and the Royal Challengers Bengaluru (RCB). This match is set to take place at the iconic M.A. Chidambaram Stadium in Chennai, with the first ball scheduled for 7:45 PM IST (2:15 PM GMT).

🔥 Match Preview
This fixture marks the 52nd match of the IPL 2025 season, bringing together two of the league's most popular teams. CSK, led by the legendary MS Dhoni, will look to capitalize on their home advantage. However, RCB, under the captaincy of Virat Kohli, has been in formidable form, aiming to break their 17-year winless streak against CSK in Chennai .
KhelTalk
+1
Business & Finance News
+1
ESPN Cricinfo

🌤️ Weather & Pitch Conditions
The weather in Chennai is expected to be hot and humid, with temperatures ranging from 29°C to 33°C. There are no chances of rain, ensuring a full 40-over game. The pitch at the M.A. Chidambaram Stadium is known to favor spinners, especially in the latter stages of the game .
SportsInfo
+1
KhelTalk
+1
KhelTalk
+1
SportsInfo
+1

🏏 Key Players to Watch
CSK: MS Dhoni's leadership and experience will be crucial. Rachin Ravindra's all-round abilities and Ravindra Jadeja's spin bowling are key assets.
SportsTiger
+12
KhelTalk
+12
Newspoint
+12

RCB: Virat Kohli's batting prowess and Josh Hazlewood's pace bowling have been standout performances this season.

📺 Live Streaming & Broadcast
The match will be broadcast live on the Star Sports Network and available for streaming on JioHotstar. For fans in Nepal, the match can be streamed live on Fancode.
KhelTalk

🏆 Match Prediction
While CSK has a strong home record, RCB's recent form and determination to end their Chennai jinx make them formidable opponents. This promises to be an exciting contest between two cricketing powerhouses.`,
  },

  // Basketball Highlights
  {
    team: [
      {
        name: "Golden State Warriors",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPWWCWl_9KmGR6w1CtHTKUZ2hZK5nj8Dgqxg&s",
      },
      {
        name: "Phoenix Suns",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPWWCWl_9KmGR6w1CtHTKUZ2hZK5nj8Dgqxg&s",
      },
    ],
    id: "b-highlight-1",
    title: "Golden State Warriors vs Phoenix Suns",
    category: "basketball",
    status: "highlight",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPWWCWl_9KmGR6w1CtHTKUZ2hZK5nj8Dgqxg&s",
    matchLink: "https://example.com/stream/b-highlight-1",
    isViewed: false,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    venue: "Chase Center, San Francisco",
    matchTime: "Last week",
    description: "NBA Western Conference showdown.",
  },
];

const mockAdBanners = [
  {
    id: "ad-2",
    image: "/assets/photo_2022-08-02_13-15-29.webp",
    link: "https://example.com/sponsor2",
  },
  {
    id: "ad-1",
    image: "/assets/CR_ORG_1xbet-19017253.webp",
    link: "https://example.com/sponsor1",
  },
];

// Data fetching functions
export async function getAllMatches() {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 500));
  return mockMatches;
}

export async function getMatchesByCategory(category: string) {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 500));
  return mockMatches.filter((match) => match.category === category);
}

export async function getMatchById(id: string) {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 500));
  return mockMatches.find((match) => match.id === id);
}

export async function getRelatedMatches(category: string, excludeId: string) {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 500));
  return mockMatches
    .filter((match) => match.category === category && match.id !== excludeId)
    .slice(0, 4);
}

export async function getAdBanners() {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 300));
  return mockAdBanners;
}
