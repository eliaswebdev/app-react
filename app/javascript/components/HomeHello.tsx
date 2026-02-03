type HomeHelloProps = {
  name?: string;
};

export default function HomeHello({ name }: HomeHelloProps) {
  return (
    <div className="p-3 mt-3 border rounded">
      <h2 className="h5 mb-1">React island</h2>
      <div>Olá, {name}.</div>
    </div>
  );
}
