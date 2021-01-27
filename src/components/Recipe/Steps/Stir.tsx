import { CLOCKWISE_STIR_TIMES } from "../RECIPE_CONFIG";

import { formatTimeEnglish } from "../../../lib/formatTimeEnglish";

type StirInput = {
  clockwiseStirTimesRng: number;
  anticlockwiseStirRng: number;
};

const Stir = ({ clockwiseStirTimesRng, anticlockwiseStirRng }: StirInput) => {
  const clockwiseStirTimesId =
    clockwiseStirTimesRng % CLOCKWISE_STIR_TIMES.length;
  const anticlockwiseStirId = anticlockwiseStirRng % 2;
  if (CLOCKWISE_STIR_TIMES[clockwiseStirTimesId] > 0) {
    let instruction = "";
    instruction +=
      "Stir " +
      formatTimeEnglish(CLOCKWISE_STIR_TIMES[clockwiseStirTimesId]) +
      " in one direction.";
    if (anticlockwiseStirId) {
      instruction += " Repeat in the other direction.";
    }
    return <li>{instruction}</li>;
  } else {
    return null;
  }
};

export default Stir;
