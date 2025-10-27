import { useState } from "react";
import Navbar from "./Navbar/Navbar";
import Products from "./Products/Products";
import Recommended from "./Recommended/Recommended";
import Sidebar from "./Sidebar/Sidebar";
import data from "./db/data";
import Card from "./components/Card";
function App() {
  const [query, setQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(null);

  // -------------- INPUT FILTER ------------

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const filteredItems = data.filter((d) =>
    d.title.toLowerCase().includes(query.toLowerCase())
  );


  // -------------- RADIO & BUTTON FILTER ------------

  const handleChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const handleClick = (event) => {
    setSelectedCategory(event.target.value);
  };

  // ----------------- FILTERING INPUT ITEMS ----------------

  function filteredData(products, selected, query) {
    let filteredproducts = products;

    if (query) {
      filteredproducts = filteredItems;
    }

    if (selected) {
      filteredproducts = filteredproducts.filter(
        ({ category, newPrice, color, title, company }) =>
          category === selected ||
          title === selected ||
          color === selected ||
          newPrice === selected ||
          company === selected
      );
    }

    return filteredproducts.map(
      ({ img, title, newPrice, prevPrice, star, reviews }) => (
        <Card
          key={Math.random()}
          img={img}
          title={title}
          newPrice={newPrice}
          prevPrice={prevPrice}
          star={star}
          reviews={reviews}
        />
      )
    );
  }

  const result = filteredData(data, selectedCategory, query);

  return (
    <>
      <Sidebar handleChange={handleChange} />
      <Navbar handleInputChange={handleInputChange} query={query} />
      <Recommended handleClick={handleClick} />
      <Products result={result} />
    </>
  );
}

export default App;
