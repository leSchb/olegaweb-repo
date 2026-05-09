import classes from "./text.module.css";

interface Props {
  role: string;
}

export default function CaseRoleText({ role }: Props) {
  return (
    <div className={`flex-column ${classes.container}`}>
      <h2 className={`bouded black text-36-24 bold ${classes.title}`}>
        Моя роль <br className={classes.br} />
        в&nbsp;продукте
      </h2>
      <p className="bounded text-14-12 text-gray">{role}</p>
    </div>
  );
}
