import React from 'react';
import {
  BadgeDollarSign,
  Box, Brush,
  Film, HandCoins, HeartPulse, ShoppingBag,
  Youtube,
} from 'lucide-react';
import { FaWordpressSimple } from "react-icons/fa";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { MdOutlineDesignServices, MdOutlinePhotoSizeSelectActual } from "react-icons/md";
import Link from "next/link";
import {IoBriefcaseOutline} from "react-icons/io5";
import {IoIosFitness} from "react-icons/io";

const menuList = [
  {
    img: <Youtube size={52} color="white"/>,
    title: "Programming",
    description: "Learn how to program with our tutorials",
    link: "/programming",
  },
  {
    img: <MdOutlineDesignServices className="w-12 h-12" color="white"/>,
    title: "UX/UI Design",
    description: "Learn how to design with our tutorials",
    link: "/ux-ui-design",
  },
  {
    img: <MdOutlinePhotoSizeSelectActual className="w-12 h-12" color="white"/>,
    title: "Photography",
    description: "Learn how to take photos with our tutorials",
    link: "/photography",
  },
  {
    img: <Film className="w-12 h-12"/>,
    title: "Video Editing",
    description: "Learn how to edit videos with our tutorials",
    link: "/video-editing",
  },
  {
    img: <Box className="w-12 h-12"/>,
    title: "3D Animation",
    description: "Learn how to animate with our tutorials",
    link: "/3d-animation",
  },
  {
    img: <Brush className="w-12 h-12"/>,
    title: "Illustration",
    description: "Learn how to illustrate with our tutorials",
    link: "/illustration",
  },
  {
    img: <BadgeDollarSign className="w-12 h-12"/>,
    title: "Marketing",
    description: "Learn how to market with our tutorials",
    link: "/marketing",
  },
  {
    img: <IoBriefcaseOutline className="w-12 h-12"/>,
    title: "SEO",
    description: "Learn how to optimize your website with our tutorials",
    link: "/seo",
  },
  {
    img: <FaWordpressSimple className="w-12 h-12"/>,
    title: "WordPress",
    description: "Learn how to build websites with our tutorials",
    link: "/wordpress",
  },
  {
    img: <ShoppingBag className="w-12 h-12"/>,
    title: "E-commerce",
    description: "Learn how to build online stores with our tutorials",
    link: "/e-commerce",
  },
  {
    img: <HandCoins className="w-12 h-12"/>,
    title: "Finance",
    description: "Learn how to manage your finances with our tutorials",
    link: "/finance",
  },
  {
    img: <HeartPulse className="w-12 h-12"/>,
    title: "Health",
    description: "Learn how to stay healthy with our tutorials",
    link: "/health",
  },
  {
    img: <IoIosFitness className="w-12 h-12"/>,
    title: "Fitness",
    description: "Learn how to stay fit with our tutorials",
    link: "/fitness",
  },
];


const Modules = () => {
  return (
    <div className="">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {menuList.map((options, index) =>
          <Link key={index} href={options.link}>
            <Card className="flex flex-row items-center max-w-[300px] max-h-[200px] p-1">
              <div className="p-2 mr-2 bg-green-600 rounded-sm">
                {options.img}
              </div>
              <CardHeader className="p-1">
                <CardTitle className="text-xl">{options.title}</CardTitle>
                <CardDescription>{options.description}</CardDescription>
              </CardHeader>
            </Card>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Modules;