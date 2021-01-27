import { COFFEE_WATER_RATIOS, BLOOM_WATER_G } from "../RECIPE_CONFIG";

type AddWaterInput = {
  coffeeWaterRng: number;
  bloomWaterGRng: number;
};

const AddWater = ({ coffeeWaterRng, bloomWaterGRng }: AddWaterInput) => {
  const coffeeWaterId = coffeeWaterRng % COFFEE_WATER_RATIOS.length;
  const bloomWaterGId = bloomWaterGRng % BLOOM_WATER_G.length;
  if (BLOOM_WATER_G[bloomWaterGId]) {
    return (
      <li>
        Add the remaining{" "}
        <strong>
          {COFFEE_WATER_RATIOS[coffeeWaterId].water -
            BLOOM_WATER_G[bloomWaterGId]}
          g
        </strong>{" "}
        of water.
      </li>
    );
  } else {
    return (
      <li>
        Add all the water (
        <strong>{COFFEE_WATER_RATIOS[coffeeWaterId].water}g</strong>
        ).
      </li>
    );
  }
};

export default AddWater;
