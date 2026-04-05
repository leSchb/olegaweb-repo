import classes from "./text.module.css";

export default function FooterText() {
  return (
    <div className={`flex-column ${classes.container}`}>
      <h2 className="white bounded bold text-36-24">Cвязаться со мной</h2>
      <p className="white onest text-16-12">
        Открыт к предложениям о работе, контрактным проектам и сотрудничеству
      </p>
    </div>
  );
}
