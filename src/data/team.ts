export interface Season {
  title: string;
  subtitle?: string;
  description?: string;
  members: {
    title: string;
    description: string;
    }[];
  }

export const SEASONS = [
{ label: "2026–2027", key: "2026_2027", href: "/team/2026_2027" },
{ label: "2025–2026", key: "2025_2026", href: "/team/2025_2026" },
] as const;

export type SeasonKey = typeof SEASONS[number]['key'];

export const teams: Record<SeasonKey, Season> = {
  "2026_2027": {
    title: "Team",
    subtitle: "",
    description:
      "",
    members: [
        {
          title: "Chloe Tran",
          description: "Captain | Junior",
        },
        {
          title: "Ryan Chen",
          description: "Software Co-Lead | Junior",
        },
        {
          title: "Elaine Wen",
          description: "Software Co-Lead | Junior",
        },
        {
          title: "Jonathan Tuey",
          description: "Hardware Lead | Senior",
        },
        {
          title: "Aarabhi Panneerselvam",
          description: "Outreach Lead | Software | Junior",
        },
        {
          title: "Ruel Athyal",
          description: "Hardware | Senior",
        },
        {
          title: "Ashton Chang",
          description: "Hardware | Sophomore",
        },
        {
          title: "Charlie Logston",
          description: "Software | Freshman",
        },
        {
          title: "Luke Mun",
          description: "Hardware | Junior",
        },
        {
          title: "Parnika Nandola",
          description: "Software | Freshman",
        },
        {
          title: "Gwen Narvasa",
          description: "Hardware | Freshmen",
        },
        {
          title: "Tiffanie Nguyen",
          description: "Hardware | Junior",
        },
        {
          title: "Ian Shanahan",
          description: "Hardware | Sophomore",
        },
    ],
},
  "2025_2026": {
      title: "Team",
      subtitle: "",
      description:
        "",
      members: [
          {
            title: "Liam Doran",
            description: "Captain | Drive Team | Senior",
          },
          {
            title: "Miles Lin",
            description: "Software Lead | Senior",
          },
          {
            title: "Ruel Athyal",
            description: "Hardware | Junior",
          },
          {
            title: "Ryan Chen",
            description: "Software | Sophomore",
          },
          {
            title: "Maya Keyal",
            description: "Hardware | Senior",
          },
          {
            title: "Maanit Mehta",
            description: "Hardware | Senior",
          },
          {
            title: "Luke Mun",
            description: "Hardware | Sophomore",
          },
          {
            title: "Aarabhi Panneerselvam",
            description: "Software | Sophomore",
          },
          {
            title: "Shuban Pal",
            description: "Software | Drive Team | Senior",
          },
          {
            title: "Nishk Shah",
            description: "Software | Senior",
          },
          {
            title: "Ian Shanahan",
            description: "Hardware | Freshmen",
          },
          {
            title: "Chloe Tran",
            description: "Hardware | Sophomore",
          },
          {
            title: "Jonathan Tuey",
            description: "Hardware | Junior",
          },
          {
            title: "Elaine Wen",
            description: "Software | Sophomore",
          },
      ],
  }
};

// Sorted by: Liam and Miles -> everyone else by last name alphabetical order