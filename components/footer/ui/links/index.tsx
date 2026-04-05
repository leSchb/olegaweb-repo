import Button from "~/shared/components/button";
import classes from "./links.module.css";
import { footerLinks } from "../../model";

export default function FooterLinks() {
  return (
    <div className={`flex gap-6 ${classes.container}`}>
      {footerLinks.map((item, index) => (
        <Button
          key={item.href + index}
          as={"a"}
          href={item.href}
          rel="noopener noreferrer"
          bgColor="red-main"
          className={classes.link}
        >
          <div className="flex-row align-center gap-10px">
            <item.Icon className="flex-1" />
            <span className="bounded medium white text-14-12 nowrap">
              {item.value}
            </span>
          </div>
        </Button>
      ))}
    </div>
  );
}
