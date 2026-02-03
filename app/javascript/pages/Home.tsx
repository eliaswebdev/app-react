import Card from "../components/Card";

type HomePageProps = {
  name?: string;
};

export default function HomePage({ name }: HomePageProps) {
  return (
    <Card title="Home Hello">
      <div>Olá, {name}.</div>
    </Card>
  );
}
