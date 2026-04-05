import classes from "./footer.module.css";
import Container from "~/shared/components/container/ui";
import FooterTwoIcons from "./two-icons";
import FooterText from "./text";
import FooterLinks from "./links";
import FooterLegal from "./legal";

export default function Footer() {
  return (
    <footer
      className={`flex section-container ${classes.container}`}
      id="contacts"
    >
      <Container
        bgColor="black"
        className={`flex-column ${classes.content}`}
        needHoverAnimation={false}
      >
        <div className="gap-60px flex-column">
          <FooterTwoIcons />
          <FooterText />
          <FooterLinks />
        </div>
        <FooterLegal />
      </Container>
    </footer>
  );
}
