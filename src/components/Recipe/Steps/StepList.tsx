import HeatWater from "./HeatWater";
import GrindCoffee from "./GrindCoffee";
import PourCoffee from "./PourCoffee";
import Invert from "./Invert";
import Bloom from "./Bloom";
import AddWater from "./AddWater";
import Stir from "./Stir";
import Brew from "./Brew";
import EndInvert from "./EndInvert";

import RecipeTimer from "../Timer/RecipeTimer";

import ShareRecipe from "../ShareRecipe/ShareRecipe";

type StepListInput = {
  numIntArr: number[];
};

const StepList = ({ numIntArr }: StepListInput) => {
  return (
    <>
      <ol key="k">
        <HeatWater coffeeWaterRng={numIntArr[0]} brewTempRng={numIntArr[1]} />
        <GrindCoffee
          coffeeWaterRng={numIntArr[0]}
          grindBrewTimeRng={numIntArr[2]}
        />
        <PourCoffee />
        <Invert invertRng={numIntArr[3]} />
        <Bloom bloomWaterGRng={numIntArr[4]} bloomSecondsRng={numIntArr[5]} />
        <AddWater coffeeWaterRng={numIntArr[0]} bloomWaterGRng={numIntArr[4]} />
        <Stir
          clockwiseStirTimesRng={numIntArr[6]}
          anticlockwiseStirRng={numIntArr[7]}
        />
        <Brew grindBrewTimeRng={numIntArr[2]} />
        <EndInvert invertRng={numIntArr[3]} />
        <li>Press.</li>
      </ol>
      <RecipeTimer
        bloomWaterGRng={numIntArr[4]}
        bloomSecondsRng={numIntArr[5]}
        grindBrewTimeRng={numIntArr[2]}
      />
      <ShareRecipe />
    </>
  );
};

export default StepList;
