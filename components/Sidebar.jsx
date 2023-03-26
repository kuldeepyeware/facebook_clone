import { useSession } from "next-auth/react";
import React from "react";
import {
  ChevronDownIcon,
  UsersIcon,
  ComputerDesktopIcon,
  CalendarIcon,
  ClockIcon,
} from "@heroicons/react/24/solid";
import { ShoppingBagIcon, UserGroupIcon } from "@heroicons/react/24/outline";
import SidebarRow from "./SidebarRow";

const Sidebar = () => {
  const { data: session } = useSession();
  return (
    <div className='h-screen bg-gray-100 overflow-hidden'>
      <SidebarRow src={session.user.image} title={session.user.name} />
      <SidebarRow Icon={UsersIcon} title={"Friends"} />
      <SidebarRow Icon={UserGroupIcon} title={"Groups"} />
      <SidebarRow Icon={ShoppingBagIcon} title={"Marketplace"} />
      <SidebarRow Icon={ComputerDesktopIcon} title={"Watch"} />
      <SidebarRow Icon={CalendarIcon} title={"Events"} />
      <SidebarRow Icon={ClockIcon} title={"Memories"} />
      <SidebarRow Icon={ChevronDownIcon} title={"See More"} />
    </div>
  );
};

export default Sidebar;
