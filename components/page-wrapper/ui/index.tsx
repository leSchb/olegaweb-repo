import classNames from "classnames";
import Footer from "~/components/footer/ui";
import Header from "~/components/header/ui";
import { INavItem } from "~/components/nav/model";

interface Props {
  children: React.ReactNode;
  needHeaderNav?: boolean;
  navItems?: INavItem[];
  className?: string;
}

export default function PageWrapper({
  children,
  needHeaderNav,
  navItems,
  className,
}: Props) {
  return (
    <>
      <Header needNav={needHeaderNav} navItems={navItems} />
      <main className={classNames(className, "flex-column")}>{children}</main>
      <Footer />
    </>
  );
}
