import React, { useEffect, useState } from "react";

import Card from "./components/Card";
import ModalCard from "./components/ModalCard";

const urlInitial =
  "https://api.spoonacular.com/recipes/complexSearch?apiKey=1cc64c8c8a6c457096af77aae99533eb&number=100";
const App = () => {
  const [data, setData] = useState([]);
  const [isData, setIsData] = useState(false);
  const [isModal, setIsModal] = useState(false);
  const [imageModal, setImageModal] = useState({});

  const fetchData = async (url) => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
      setData(data.results);
      setIsData((isData) => !isData);
    } catch (err) {
      console.log(err);
    }
  };

  const handleSearch = (searchInput) => {
    onChange(searchInput);
    document.getElementById("search").value = "";
  };

  const onChange = async (searchData) => {
    try {
      const response = await fetch(
        `https://api.spoonacular.com/recipes/complexSearch?apiKey=1cc64c8c8a6c457096af77aae99533eb&number=100&query=${searchData}`
      );
      const data = await response.json();
      setIsData((isData) => !isData);
      console.log(searchData);
      setData(data.results);
      setIsData((isData) => !isData);
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchData(urlInitial);
  }, []);
  return (
    <>
      <div className="fixed top-0 left-0 right-0 flex justify-center w-full bg-blue-500">
        <div className="mt-2 mb-2 font-bold">FOOD</div>
      </div>
      <div className="flex justify-center mt-12">
        <input
          placeholder="Buscar plato"
          id="search"
          autoComplete="off"
          required
          type="text"
        />
        <button
          onClick={() => handleSearch(document.getElementById("search").value)}
        >
          Buscar
        </button>
      </div>
      {isData && (
        <div className="flex justify-center w-full">
          <div className="flex flex-wrap justify-center w-11/12">
            <Card
              data={data}
              setIsModal={setIsModal}
              imageModal={imageModal}
              setImageModal={setImageModal}
              isModal={isModal}
            />
          </div>
        </div>
      )}
      {!isData && (
        <div className="flex items-center justify-center mt-20">
          <p>Cargando....</p>
        </div>
      )}
      {isModal && (
        <ModalCard
          setIsModal={setIsModal}
          imageModal={imageModal}
          isModal={isModal}
        />
      )}
    </>
  );
};

export default App;
