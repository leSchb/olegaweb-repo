"use client";
import { useMemo } from "react";
import classNames from "classnames";

import classes from "./nav.module.css";
import Link from "next/link";
import { navItems } from "../model";
import { ILinkItem } from "~/shared/model";

interface Props {
  className?: string;
  onLinkClick?: () => void;
  items?: ILinkItem[];
}

export default function NavComponent({ className, onLinkClick, items }: Props) {
  const itemsToMap = useMemo(() => Array.isArray(items) ? items : navItems, [items]);
  
  return (
    <nav className={classNames(`flex`, classes.container, className)}>
      {itemsToMap.map((item, index) => (
        <Link
          key={item.href + index}
          className={classNames(`heading black nav-text`, classes.item)}
          rel="noopener noreferrer"
          href={item.href}
          onClick={onLinkClick}
        >
          {item.title}
        </Link>
      ))}
    </nav>
  );
}
