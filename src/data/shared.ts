type Route = {
  title: string,
  path: string
}

type FooterCol = {
  title: string,
  links: {
    name: string,
    link: string,
    icon?: string,
    leavesWebsite: boolean
  }[]
}

type Footer = {
  columns: FooterCol[]
};

export const routes: Route[] = [
  {
    title: "Accueil",
    path: "/",
  },
  {
    title: "Portfolio",
    path: "/portfolio",
  },
  {
    title: "Nicolas",
    path: "/nicolas",
  },
  {
    title: "Contact",
    path: "/contact",
  },
];


export const footer_columns = [
    {
      title: "Sections",
      links: [
        {
          name: "Accueil",
          link: "/",
          icon: "",
          leavesWebsite: false,
        },
        {
          name: "Menu",
          link: "/portfolio",
          icon: "",
          leavesWebsite: false,
        },
        {
          name: "Horaires",
          link: "/nicolas",
          icon: "",
          leavesWebsite: false,
        },
        {
          name: "Maps",
          link: "/contact",
          icon: "",
          leavesWebsite: false,
        },
      ],
    },
    {
      title: "Social",
      links: [
        {
          name: "Instagram",
          link: "ig",
          icon: "",
          leavesWebsite: true,
        },
      ],
    },
];
