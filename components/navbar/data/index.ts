import { NavbarLink } from "@/components/navbar/types";

export const navbarLinks: NavbarLink[] = [
  {
    name: "Начало",
    href: "/",
    icon: "House"
  },
  {
    name: "За нас",
    href: "/about",
    icon: "Users2Icon"
  },
  {
    name: "Услуги",
    href: "#",
    icon: "Grip",
    children: [
      {
        name: "Показване на всички услуги",
        href: "/services"
      },
      {
        name: "Изработка на сайт",
        href: "/services/izrabotka-na-sayt"
      },
      {
        name: "Сайт за обяви",
        href: "/services/sayt-za-obqvi"
      },
      {
        name: "Сайт за хотел",
        href: "/services/sayt-za-hotel"
      }
    ]
  },
  {
    name: "Блог",
    href: "/blog",
    icon: "Rss"
  },
  {
    name: "Контакти",
    href: "/contacts",
    icon: "ContactRound"
  },
];