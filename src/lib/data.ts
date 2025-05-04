// Mock data based on the provided interfaces

import dayjs from "dayjs";

// Define Common namespace types

// Mock data
const mockMatches = [
  // Football Live Matches
  {
    team: [
      {
        name: "Espanyol",
        image:
          "https://ssl.gstatic.com/onebox/media/sports/logos/TKitIqelDyN6M-kYt4Uc0g_96x96.png",
      },
      {
        name: "Real Betis",
        image:
          "https://ssl.gstatic.com/onebox/media/sports/logos/XDClkrMKtkm3UTP2YKN6oQ_96x96.png",
      },
    ],
    id: "1",
    title: "Espanyol vs Real Betis",
    category: "football",
    status: "upcoming",
    image:
      "https://thumbor.prod.vidiocdn.com/d_bT1mEqbMb8pBstQ29-iKVp5jI=/640x360/filters:quality(70)/vidio-web-prod-video/uploads/video/image/8383457/real-betis-vs-espanyol-highlights-laliga-2024-25-3d8164.jpg",
    matchLink: "https://cr7tv.github.io/tv/ft.html?id=ssports",
    isViewed: false,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    venue: "RCDE Stadium",
    matchTime: dayjs("2025-05-04T22:15:00").format("YYYY-MM-DD HH:mm"),
    goal: 2,
    description: "La Liga clash between Real Madrid and Celta Vigo.",
  },

  {
    team: [
      {
        name: "Sevilla",
        image:
          "https://ssl.gstatic.com/onebox/media/sports/logos/hCTs5EX3WjCMC5Jl3QE4Rw_96x96.png",
      },
      {
        name: "Leganes",
        image:
          "https://ssl.gstatic.com/onebox/media/sports/logos/Id84F7Ji9rZGVacaazlBYA_96x96.png",
      },
    ],
    id: "2",
    title: "Sevilla vs Leganes",
    category: "football",
    status: "highlight",
    image:
      "https://www.thestatszone.com/imager/93421/1730374911_b0464c6958.jpg",
    matchLink: "https://cr7tv.github.io/tv/ft.html?id=ssports",
    isViewed: false,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    venue: "Estadio Ramon Sanchez Pizjuan",
    matchTime: dayjs("2025-05-04T20:00:00").format("YYYY-MM-DD HH:mm"),
    goal: 2,
    description: "La Liga clash between Real Madrid and Celta Vigo.",
  },

  {
    team: [
      {
        name: "Barcelona",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjjEff5OUSLgsahBGM46yHJ7ZY9TaXoVhrUA&s",
      },
      {
        name: "Real Madrid",
        image:
          "https://upload.wikimedia.org/wikipedia/en/thumb/5/56/Real_Madrid_CF.svg/800px-Real_Madrid_CF.svg.png",
      },
    ],
    id: "f-live-2",
    title: "Barcelona vs Real Madrid",
    category: "football",
    status: "highlight",
    image:
      "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/barcelona-vs-real-madrid-design-template-0c03cae56769f9e1a8eef017091f3a59_screen.jpg?ts=1698420692",
    matchLink: "https://www.youtube.com/embed/oYHdKBfTwbE?si=HLtFjXEzZOa3VqWV",
    isViewed: false,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    venue: "Camp Nou, Barcelona",
    matchTime: dayjs().format("YYYY-MM-DD HH:mm"),
    goal: 1,
    description: "El Clasico - The biggest rivalry in club football.",
  },

  // // Basketball Live Matches
  // {
  //   team: [
  //     {
  //       name: "LA Lakers",
  //       image:
  //         "https://fadeawayworld.net/.image/t_share/MTkyMzU0OTI0NzQxMjcyODE4/295938606_992409465487590_4796746801574236671_n.jpg",
  //     },
  //     {
  //       name: "Chicago Bulls",
  //       image:
  //         "https://fadeawayworld.net/.image/t_share/MTkyMzU0OTI0NzQxMjcyODE4/295938606_992409465487590_4796746801574236671_n.jpg",
  //     },
  //   ],
  //   id: "b-live-1",
  //   title: "LA Lakers vs Chicago Bulls",
  //   category: "basketball",
  //   status: "live",
  //   image:
  //     "https://fadeawayworld.net/.image/t_share/MTkyMzU0OTI0NzQxMjcyODE4/295938606_992409465487590_4796746801574236671_n.jpg",
  //   matchLink: "https://example.com/stream/b-live-1",
  //   isViewed: false,
  //   createdAt: new Date().toISOString(),
  //   updatedAt: new Date().toISOString(),
  //   venue: "Staples Center, Los Angeles",
  //   matchTime: "Live Now",
  //   goal: 87,
  //   description: "NBA regular season game.",
  // },

  // Football Upcoming Matches
  {
    team: [
      {
        name: "Real Sociedad",
        image:
          "https://imgs.search.brave.com/VkR5FoS5c5yFeBALSosjOizvJf0umR5jPxP2ArzxmGw/rs:fit:100:100:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5hcGktc3BvcnRz/LmlvL2Zvb3RiYWxs/L3RlYW1zLzU0OC5w/bmc",
      },
      {
        name: "Athletic Club",
        image:
          "https://imgs.search.brave.com/iGfYGdnZc3Q3-QaE4z40IM0ruNDBHQEZbLGjbCn_81M/rs:fit:100:100:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5hcGktc3BvcnRz/LmlvL2Zvb3RiYWxs/L3RlYW1zLzUzMS5w/bmc",
      },
    ],
    id: "f-upcoming-1",
    title: "Real Sociedad vs Athletic Club",
    category: "football",
    status: "upcoming",
    image:
      "https://e00-xlk-ue-marca.uecdn.es/files/article_main_microformat_4_3/uploads/2024/11/23/67421dfc69c08.jpeg",
    matchLink: "https://cr7tv.github.io/tv/ft.html?id=ssports",
    isViewed: false,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    venue: "Anoeta Stadium, San Sebastian",
    matchTime: dayjs("2025-05-05T00:45:00").format("YYYY-MM-DD HH:mm"),
    description: "La Liga clash between Real Sociedad and Athletic Bilbao.",
  },




  {
    team: [
      {
        name: "PBKS",
        image:
          "https://ssl.gstatic.com/onebox/media/sports/logos/XUAb4iA3XozYbH_cXQCryQ_96x96.png",
      },
      {
        name: "LSG",
        image:
          "https://ssl.gstatic.com/onebox/media/sports/logos/82AP_EDcTMdcVlCqM4NgMg_96x96.png",
      },
    ],
    id: "ipl-1",
    title: "PBKS vs LSG",
    category: "cricket",
    status: "upcoming",
    image:
      "https://cricxtasy.com/wp-content/uploads/2025/03/lsg_vs_pbks_dream11_prediction.png",
    matchLink: "https://topembed.pw/channel/SkySportsCricket[UK]",
    isViewed: false,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    venue: "HPCA Stadium, Dharamsala",
    matchTime: dayjs("2025-05-04T17:45:00").format("YYYY-MM-DD HH:mm"),
    description: "IPL clash between RCB and CSK.",
  },
  {
    team: [
      {
        name: "Houston Rockets",
        image:
          "https://ssl.gstatic.com/onebox/media/sports/logos/zhO6MIB1UzZmtXLHkJQBmg_96x96.png",
      },
      {
        name: "Golden State Warriors",
        image:
          "https://ssl.gstatic.com/onebox/media/sports/logos/ovwlyYHRKZ90s7zn_qlMCg_96x96.png",
      },
    ],
    id: "b-upcoming-1",
    title: "Houston Rockets vs Golden State Warriors",
    category: "basketball",
    status: "upcoming",
    image:
      "https://static.toiimg.com/thumb/resizemode-4,width-1280,height-720,msid-116207394/116207394.jpg",
    matchLink: "https://streamtp4.com/global1.php?stream=espn2",
    isViewed: false,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    venue: "Toyota Center, Houston",
    matchTime: dayjs("2025-05-05T06:15:00").format("YYYY-MM-DD HH:mm"),
    description: "NBA clash between Houston Rockets and Golden State Warriors.",
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
