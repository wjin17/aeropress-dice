import "../../static/css/App.css";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Recipe from "../Recipe/Recipe";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Recipe />
      <Footer />
    </div>
  );
};

export default App;
