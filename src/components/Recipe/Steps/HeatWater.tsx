import { COFFEE_WATER_RATIOS, BREW_TEMP_C } from "../RECIPE_CONFIG";
import { toFahrenheit } from "../../../lib/toFahrenheit";

type HeatWaterInput = {
  coffeeWaterRng: number;
  brewTempRng: number;
};

const HeatWater = ({ coffeeWaterRng, brewTempRng }: HeatWaterInput) => {
  const coffeeWaterId = coffeeWaterRng % COFFEE_WATER_RATIOS.length;
  const brewTempId = brewTempRng % BREW_TEMP_C.length;
  return (
    <li>
      Heat <strong>{COFFEE_WATER_RATIOS[coffeeWaterId].water}g</strong> of water
      to <strong>{BREW_TEMP_C[brewTempId]}°C</strong> /
      <strong>{toFahrenheit(BREW_TEMP_C[brewTempId])}°F</strong>.
    </li>
  );
};

export default HeatWater;
