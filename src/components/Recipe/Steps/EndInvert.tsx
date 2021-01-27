type InvertInput = {
  invertRng: number;
};

const EndInvert = ({ invertRng }: InvertInput) => {
  const invert = invertRng % 2;
  if (invert) {
    return (
      <li>
        Wet the filter paper, and put the cap on. Place the mug upside-down on
        the aeropress and flip to be the normal orientation.
      </li>
    );
  } else {
    return null;
  }
};

export default EndInvert;
