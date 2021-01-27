import { COFFEE_WATER_RATIOS, GRIND_BREWTIME_RATIOS } from "../RECIPE_CONFIG";

type GrindCoffeeInput = {
  coffeeWaterRng: number;
  grindBrewTimeRng: number;
};

const GrindCoffee = ({
  coffeeWaterRng,
  grindBrewTimeRng,
}: GrindCoffeeInput) => {
  const coffeeWaterId = coffeeWaterRng % COFFEE_WATER_RATIOS.length;
  const grindBrewTimeId = grindBrewTimeRng % GRIND_BREWTIME_RATIOS.length;
  return (
    <li>
      Grind <strong>{COFFEE_WATER_RATIOS[coffeeWaterId].coffee}g</strong> of
      coffee to a {GRIND_BREWTIME_RATIOS[grindBrewTimeId].grind} grind.
    </li>
  );
};

export default GrindCoffee;
