'use client';

import React from 'react';
import {usePathname, useRouter} from 'next/navigation'
import UserItem from "@/components/UserItem";
import {BellIcon, Component, Cookie, CreditCard, Inbox, MessageSquare, Settings, User} from "lucide-react";
import {Command, CommandGroup, CommandItem, CommandList} from "@/components/ui/command";
import Link from "next/link";


const menuList = [
  {
    group: "General",
    items: [
      {href: "/dashboard/modules", icon: <Component />, text: "Modules"},
      {href: "/dashboard/", icon: <Inbox/>, text: "Inbox"},
      {href: "/dashboard/", icon: <CreditCard/>, text: "Billing"},
      {href: "/dashboard/", icon: <BellIcon/>, text: "Notifications"},
      {href: "/dashboard/", icon: <BellIcon/>, text: "Settings"},
    ]
  },
  {
    group: "Settings",
    items: [
      {href: "/dashboard/", icon: <Settings/>, text: "General Settings"},
      {href: "/dashboard/", icon: <Cookie/>, text: "Privacy"},
      {href: "/dashboard/", icon: <MessageSquare/>, text: "Logs"},
    ]
  },
];

const Sidebar = () => {
  const pathname = usePathname();

  return <div className="fixed flex flex-col gap-4 w-[300px] min-w-[300px] border-r min-h-screen p-4">
      <UserItem />
    <div className="grow">
      <Command style={{ overflow: 'visible' }}>
        <CommandList style={{ overflow: 'visible' }}>
          {menuList.map((menu: any, key: number) => (
            <CommandGroup key={key} heading={menu.group}>
              {menu.items.map((option: any, optionKey: number) =>
            <Link key={optionKey} href={option.href}>
                <CommandItem key={optionKey} className="flex gap-2 cursor-pointer">
                  {option.icon}
                  {option.text}
                </CommandItem>
            </Link>
              )}
            </CommandGroup>
          ))}
        </CommandList>
      </Command>
    </div>
    <div>Settings / Notifications</div>
  </div>;
};

export default Sidebar;