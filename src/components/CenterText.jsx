import Button from "./Button";

export default function CenterText() {
  return (
    <div className="flex flex-col justify-center items-center self-center">
      <h2 className="text-center mb-3 text-7xl font-extrabold">
        Lösungen,
        <br /> die bleiben.
      </h2>
      <h3 className="text-center mb-3 text-2xl font-semibold">
        Das kannst du erwarten:
      </h3>
      <div className="lg:w-3/6 text-center">
        <p className="mb-1">
          Reibungslose Prozesse und Automatisierungen, die deine
          Software-Landschaft sinnvoll miteinander verbinden und wirklich Zeit
          sparen.
        </p>
        <p className="">Fullstack Web Development Lösungen.</p>
        <Button buttonText="Gespräch vereinbaren" />
      </div>
    </div>
  );
}
