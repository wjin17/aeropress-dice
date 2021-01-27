import { useState, useEffect } from "react";
import { CSSTransition } from "react-transition-group";
import seedrandom from "seedrandom";

import GeneratorButtons from "./GeneratorButtons";
import StepList from "./Steps/StepList";

const Recipe = () => {
  const params = new URLSearchParams(window.location.search);
  const [renderRecipe, setRenderRecipe] = useState(false);
  const [seed, setSeed] = useState(params.get("seed"));
  const [rngFloat, setRngFloat] = useState(
    seedrandom(params.get("seed") || undefined)()
  );

  useEffect(() => {
    if (seed) {
      setRngFloat(seedrandom(seed)());
      const timer = setTimeout(() => {
        setRenderRecipe(true);
      }, 0);
    }
  }, [seed]);

  return (
    <div className="App-recipe">
      <GeneratorButtons
        params={params}
        setRenderRecipe={(val) => setRenderRecipe(val)}
        setSeed={(val) => setSeed(val)}
      />
      <div className="card">
        <div className="card-block">
          <CSSTransition in={renderRecipe} classNames="example" timeout={300}>
            <div>{renderRecipe && <StepList rngFloat={rngFloat} />}</div>
          </CSSTransition>
        </div>
      </div>
    </div>
  );
};

export default Recipe;
