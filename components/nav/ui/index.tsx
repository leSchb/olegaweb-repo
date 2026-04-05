import classNames from "classnames";

import classes from "./nav.module.css";
import Link from "next/link";
import { navItems } from "../model";

interface Props {
  className?: string;
  onLinkClick?: () => void;
}

export default function NavComponent({ className, onLinkClick }: Props) {
  return (
    <nav className={classNames(`flex`, classes.container, className)}>
      {navItems.map((item, index) => (
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
