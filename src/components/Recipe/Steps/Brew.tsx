import { GRIND_BREWTIME_RATIOS } from "../RECIPE_CONFIG";

type BrewInput = {
  grindBrewTimeRng: number;
};

const Brew = ({ grindBrewTimeRng }: BrewInput) => {
  const grindBrewTimeId = grindBrewTimeRng % GRIND_BREWTIME_RATIOS.length;
  return (
    <li>
      Wait <strong>{GRIND_BREWTIME_RATIOS[grindBrewTimeId].time}s</strong> to
      brew.
    </li>
  );
};

export default Brew;
