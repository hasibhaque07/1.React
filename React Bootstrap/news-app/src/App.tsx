import { useEffect, useState } from "react";
import NavBar from "./components/NavBar";
import NewsBoard from "./components/NewsBoard";

const App = () => {
  const [category, setCategory] = useState("general");
  console.log(category);
  useEffect(() => {
    setCategory(category);
  }, [category]);
  return (
    <>
      <NavBar setCategory={setCategory} />
      <NewsBoard category={category} />
    </>
  );
};

export default App;
