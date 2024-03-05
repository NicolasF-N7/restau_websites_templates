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
    title: "Menu",
    path: "/menu",
  },
  {
    title: "Horaires",
    path: "/horaires",
  },
  {
    title: "Accès",
    path: "/acces",
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
          link: "/menu",
          icon: "",
          leavesWebsite: false,
        },
        {
          name: "Horaires",
          link: "/horaires",
          icon: "",
          leavesWebsite: false,
        },
        {
          name: "Acces",
          link: "/acces",
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
