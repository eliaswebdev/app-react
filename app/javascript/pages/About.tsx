type AboutProps = {
  title?: string;
  team?: string[];
  description?: string;
};

export default function AboutPage(props: AboutProps) {
  return (
    <div>
      <h2>{props.title}</h2>
      <p>{props.description}</p>
      {props.team && props.team.length > 0 && (
        <ul>
          {props.team.map((member, i) => (
            <li key={i}>{member}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
