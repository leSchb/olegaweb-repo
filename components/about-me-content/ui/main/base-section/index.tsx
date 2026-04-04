import classNames from "classnames";

interface Props {
  title: string;
  children: React.ReactNode;
  className?: string;
}

export default function AboutMeBaseSection({
  title,
  children,
  className,
}: Props) {
  return (
    <div className={classNames("flex-column gap-4", className)}>
      <h5 className="bounded text-14 black">{title}</h5>
      {children}
    </div>
  );
}
