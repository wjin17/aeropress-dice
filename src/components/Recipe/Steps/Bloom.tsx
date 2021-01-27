import { BLOOM_WATER_G, BLOOM_SECONDS } from "../RECIPE_CONFIG";

type BloomWaterInput = {
  bloomWaterGRng: number;
  bloomSecondsRng: number;
};

const Bloom = ({ bloomWaterGRng, bloomSecondsRng }: BloomWaterInput) => {
  const bloomWaterGId = bloomWaterGRng % BLOOM_WATER_G.length;
  const bloomSecondsId = bloomSecondsRng % BLOOM_SECONDS.length;
  if (BLOOM_WATER_G[bloomWaterGId]) {
    return (
      <li>
        Add <strong>{BLOOM_WATER_G[bloomWaterGId]}g</strong> of water and wait
        <strong> {BLOOM_SECONDS[bloomSecondsId]}</strong> seconds for the coffee
        to bloom.
      </li>
    );
  } else {
    return null;
  }
};

export default Bloom;
