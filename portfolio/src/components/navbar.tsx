import { useState, useTransition } from "react";
import { Tab } from "./tab";

export const Navbar = () => {
  const [active, setActive] = useState("home");
  const [isPending, startTransition] = useTransition();

  const tabs = [
    {
      name: "home",
      label: "Home",
    },
    {
      name: "about",
      label: "About",
    },
    {
      name: "skills",
      label: "Skills",
    },
    {
      name: "experience",
      label: "Experience",
    },
    {
      name: "contact",
      label: "Contact",
    },
  ];

  const selectTab = (tab: string) => {
    startTransition(() => {
      setActive(tab);
    });
  };

  return (
    <nav className="flex fixed top-[0.15rem] left-1/2 h-12 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0">
      <ul className="flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-gray-500 sm:w-[initial] sm:flex-nowrap sm:gap-5">
        {tabs.map((tab, idx) => {
          return (
            <Tab
              activeTab={active}
              selectTab={selectTab}
              tab={tab}
              isPending={isPending}
              key={idx}
            />
          );
        })}
      </ul>
    </nav>
  );
};
