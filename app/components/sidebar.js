import { cn } from '@/lib/utils';
import Link from 'next/link';
import { BsPlus, BsFillLightningFill, BsGearFill } from 'react-icons/bs';
import { FaFire, FaPoo } from 'react-icons/fa';
import React, { ReactNode } from 'react';



const Sidebar = () => {
  return (
    <div className="fixed flex flex-col justify-between items-center top-0 left-0 h-screen w-16 m-0 bg-gray-900 text-secondary shadow-lg">
      <Link href="/chat">
        <SidebarIcon icon={<FaFire size="28" />} tooltip="Fire" color={undefined} />
      </Link>
      <SidebarIcon
        icon={<BsPlus size="32" />}
        tooltip="Plus"
        color="text-green-500"
      />
      <SidebarIcon
              icon={<BsFillLightningFill size="20" />}
              tooltip="Lightning" color={undefined}      />
      <SidebarIcon icon={<FaPoo size="20" />} tooltip="Poo" color={undefined} />
      <div className="mt-auto">
        <SidebarIcon icon={<BsGearFill size="20" />} tooltip="Settings" color={undefined} />
      </div>
    </div>
  );
};

const SidebarIcon = ({
    icon,
    tooltip,
    color, 

    }) => (
  <div className={cn('sidebar-icon group', color)}>
    {icon}
    <span className="sidebar-tooltip group-hover:scale-100">{tooltip}</span>
  </div>
);

export default Sidebar;
