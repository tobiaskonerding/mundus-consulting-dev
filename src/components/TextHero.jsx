import { useEffect } from "react";
import Button from "./Button";

export default function TextHero() {
  /* Variante 1 */
  /* const [word, setWord] = useState(headline[0]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => {
        const newIndex = prevIndex === headline.length - 1 ? 0 : prevIndex + 1;
        return newIndex;
      });
    }, 7000);
    return () => clearInterval(interval);
  }, [headline, index, setIndex]);

  useEffect(() => {
    setWord(headline[index]);
  }, [headline, word, index]); */

  /* Variante 2 */

  useEffect(() => {
    const headline = ["die bleiben.", "die begeistern.", "die Nutzen bringen."];
    let headlineIndex = 0;
    let letter = 1;
    let isWriting = true;
    const typing = function () {
      let currentHeadline = headline[headlineIndex];
      if (isWriting) {
        document.getElementById("typewriter-span").textContent =
          currentHeadline.substring(0, letter);
        letter++;
        letter === currentHeadline.length ? (isWriting = false) : null;
      } else {
        document.getElementById("typewriter-span").textContent =
          currentHeadline.substring(0, letter);
        letter--;
        if (letter === 1) {
          isWriting = true;
          headlineIndex === headline.length - 1
            ? (headlineIndex = 0)
            : headlineIndex++;
        }
      }
      setTimeout(typing, 150);
    };
    typing();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center">
      <h2 className="mb-3 text-center text-5xl font-extrabold tracking-wider md:text-7xl">
        Lösungen,
        <br />
        {/* Variante 1:
        <span
          key={word}
          className="relative before:absolute before:inset-0 before:animate-typewriter before:bg-black after:absolute after:inset-0 after:w-[0.125em] after:animate-caret after:bg-white"
        >
          {word}
        </span> */}
        <span id="typewriter-span"></span>
      </h2>
      <h3 className="mb-3 text-center text-2xl font-semibold text-mc-neon-türkis">
        Das kannst du erwarten:
      </h3>
      <div className="text-center tracking-wide lg:w-3/5">
        <p className="mb-2 font-bold">
          Reibungslose Prozesse und Automatisierungen, die deine
          Softwarelandschaft sinnvoll miteinander verbinden und wirklich Zeit
          sparen.
        </p>
        <p className="font-bold">Fullstack Web Development Lösungen.</p>
        <Button buttonText="NIMM KONTAKT AUF" />
      </div>
    </div>
  );
}
