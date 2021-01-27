import Timer from "./Timer";
import {
  GRIND_BREWTIME_RATIOS,
  BLOOM_SECONDS,
  BLOOM_WATER_G,
} from "../RECIPE_CONFIG";

type RecipeTimerInput = {
  bloomWaterGRng: number;
  bloomSecondsRng: number;
  grindBrewTimeRng: number;
};

const RecipeTimer = ({
  bloomWaterGRng,
  bloomSecondsRng,
  grindBrewTimeRng,
}: RecipeTimerInput) => {
  const bloomWaterId = bloomWaterGRng % BLOOM_WATER_G.length;
  const bloomTimeId = bloomSecondsRng % BLOOM_SECONDS.length;
  const brewTimeId = grindBrewTimeRng % GRIND_BREWTIME_RATIOS.length;
  return (
    <div className="timer-container">
      {bloomWaterId ? (
        <Timer label={"Bloom Time"} time={BLOOM_SECONDS[bloomTimeId]} />
      ) : null}
      <Timer
        label={"Brew Time"}
        time={GRIND_BREWTIME_RATIOS[brewTimeId].time}
      />
    </div>
  );
};

export default RecipeTimer;
