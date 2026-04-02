import classNames from "classnames";
import Header from "~/components/header/ui";

interface Props {
  children: React.ReactNode;
  needHeaderNav?: boolean;
  className?: string;
}

export default function PageWrapper({
  children,
  needHeaderNav,
  className,
}: Props) {
  return (
    <>
      <Header needNav={needHeaderNav} />
      <main className={classNames(className, "flex-column")}>{children}</main>
    </>
  );
}
