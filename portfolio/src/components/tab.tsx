import { cn } from "../utils/classnames";

interface ITabProps {
  activeTab: string;
  tab: { name: string; label: string };
  selectTab: (tab: string) => void;
  isPending: boolean;
}

export const Tab = (props: ITabProps) => {
  const { tab, activeTab, selectTab, isPending } = props;
  return (
    <li
      onClick={() => selectTab(tab.name)}
      className="h-3/4 flex items-center justify-center relative"
    >
      <a
        className="flex w-full items-center justify-center px-3 py-3 hover:text-gray-950 transition dark:text-gray-500 dark:hover:text-gray-300 text-gray-950"
        href={`#${tab.name}`}
      >
        {tab.label}
        <span
          className={cn(
            "bg-gray-300 rounded-full absolute inset-0 -z-10 dark:bg-gray-900",
            {
              hidden: activeTab !== tab.name,
              "cursor-not-allowed": isPending,
            },
          )}
        ></span>
      </a>
    </li>
  );
};
