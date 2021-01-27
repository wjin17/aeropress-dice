type InvertInput = {
  invertRng: number;
};

const Invert = ({ invertRng }: InvertInput) => {
  const invert = invertRng % 2;
  if (invert) {
    return <li>Place the aeropress in the upside-down orientation.</li>;
  } else {
    return (
      <li>
        Place the aeropress on the mug in the normal orientation with wet filter
        and cap on.
      </li>
    );
  }
};

export default Invert;
