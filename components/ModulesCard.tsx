import React from 'react';
import Link from "next/link";

import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

interface Props {
  img: React. JSX. Element;
  title: string;
  description: string;
  link: string;
}

const ModulesCard: React.FC<Props> = ({ img, title, description, link}) => {
  return (
    <div className="">
      <Link href={link}>
        <Card>
          {img}
          <CardHeader>
            <CardTitle>{ title }</CardTitle>
            <CardDescription>{description}</CardDescription>
          </CardHeader>
        </Card>
      </Link>
    </div>
  );
};

export default ModulesCard;