import classNames from "classnames";

import classes from "./link.module.css";
import Icon from "~/public/shared/link.svg";
import Link from "next/link";
import { AnchorHTMLAttributes } from "react";

interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  local: boolean;
  text: string;
  color?: "red-main" | "black";
}

export interface LinkContainerProps extends LinkProps {
  withIcon?: boolean;
  containerClassName?: string;
}

const LinkContent = ({
  text,
  href,
  local,
  color,
  className,
  ...rest
}: LinkProps) => {
  const commonProps = {
    href: href || "#!",
    className: classNames(color || "red-main", className, "bounded"),
    ...rest,
  };

  if (!local) {
    return (
      <a {...commonProps} target="_blank" rel="noopener norefferer">
        {text}
      </a>
    );
  } else {
    <Link {...commonProps}>{text}</Link>;
  }
};

export default function LinkContainer({
  withIcon,
  containerClassName,
  color = "red-main",
  ...rest
}: LinkContainerProps) {
  if (withIcon) {
    return (
      <div className={classNames(`flex-row align-center`, containerClassName)}>
        <LinkContent {...rest} color={color} />
        <Icon
          className={classNames(
            color === "red-main" ? classes.red : classes[color],
          )}
        />
      </div>
    );
  } else {
    return <LinkContent {...rest} color={color} />;
  }
}
