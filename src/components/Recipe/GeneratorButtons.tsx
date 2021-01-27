import { useState } from "react";
import { customAlphabet } from "nanoid";
import alphanumeric from "nanoid-dictionary/alphanumeric";

type GeneratorButtonProps = {
  params: URLSearchParams;
  setRenderRecipe: (arg0: boolean) => void;
  setSeed: (arg0: string) => void;
};

const GeneratorButtons = ({
  params,
  setRenderRecipe,
  setSeed,
}: GeneratorButtonProps) => {
  const [seedInput, setSeedInput] = useState(params.get("seed") || "");
  const [error, setError] = useState("");

  const nanoid = customAlphabet(alphanumeric, 8);

  const handleGenerateRandomRecipe = () => {
    setRenderRecipe(false);
    const newSeed = nanoid();

    setSeed(newSeed);
    setSeedInput(newSeed);

    params.set("seed", newSeed);
    const newRelativePathQuery =
      window.location.pathname + "?" + params.toString();
    history.pushState(null, "", newRelativePathQuery);

    const timer = setTimeout(() => {
      setRenderRecipe(true);
    }, 0);
  };

  const handleGenerateRecipeFromSeed = () => {
    if (seedInput) {
      setError("");
      setRenderRecipe(false);

      setSeed(seedInput);

      params.set("seed", seedInput);
      const newRelativePathQuery =
        window.location.pathname + "?" + params.toString();
      history.pushState(null, "", newRelativePathQuery);

      const timer = setTimeout(() => {
        setRenderRecipe(true);
      }, 0);
    } else {
      setError("Required");
    }
  };
  return (
    <div>
      <h1>Generate a Recipe</h1>
      <h1>
        <button
          className="btn btn-primary"
          onClick={handleGenerateRandomRecipe}
        >
          Random
        </button>
      </h1>
      <div className="form__group field">
        <input
          type="text"
          className="form__field"
          placeholder="Seed"
          name="seed"
          id="seed"
          value={seedInput}
          onChange={(e) => {
            setSeedInput(e.target.value);
          }}
        />
        <label htmlFor="name" className="form__label">
          Seed
        </label>
        <p className="error">{error}</p>
      </div>
      <h1>
        <button
          className="btn btn-primary"
          onClick={handleGenerateRecipeFromSeed}
        >
          From Seed
        </button>
      </h1>
    </div>
  );
};

export default GeneratorButtons;
