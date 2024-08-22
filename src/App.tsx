import React, { useState, useEffect } from "react";
import "./App.css";
import { Card, noteType } from "./components/cards/Widget";
import { Counter } from "./components/counterComponent/Counter";
import { TipCalculator } from "./components/TipCalculator/TipCalculator";
import LoginPage from "./components/login";
import LoginForm from "./components/login";

const contentOfCards = {
  warning: {
    h2: "Warning Heading",
    p: `It is a long established fact that a reader will be distracted by
          the readable content of a page when looking at its layout. The point
          of using Lorem Ipsum is that it has a more-or-less normal
          distribution of letters, as opposed to using 'Content here, content
          here', making it look like readable English. Many desktop publishing
          packages and web page editors now use Lorem Ipsum as their default
          model text, and a search for 'lorem ipsum' will uncover many web
          sites still in their infancy. Various versions have evolved over the
          years, sometimes by accident, sometimes on purpose (injected humour
          and the like).`,
  },
  info: {
    h2: "Info Heading",
    p1: `The standard chunk of Lorem Ipsum used since the 1500s is reproduced
          below for those interested. Sections 1.10.32 and 1.10.33 from "de
          Finibus Bonorum et Malorum" by Cicero are also reproduced in their
          exact original form, accompanied by English versions from the 1914
          translation by H. Rackham`,
    p2: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
          ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.`,
  },
  error: {
    h2: "Error Heading",
    p: ` Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text
          ever since the 1500s, when an unknown printer took a galley of type
          and scrambled it to make a type specimen book. It has survived not
          only five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s
          with the release of Letraset sheets containing Lorem Ipsum passages,
          and more recently with desktop publishing software like Aldus
          PageMaker including versions of Lorem Ipsum`,
  },
};

const typeOfCard: noteType[] = ["warning", "info", "error"];

const App: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [firstCount, setCount1] = useState(0);
  const [secondCount, setCount2] = useState(0);

  // Fetch data and log it to the console
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3000/books");
        if (response.ok) {
          const data = await response.json();
          console.log("Fetched data:", data); // Log the fetched data to the console
        } else {
          console.error("Failed to fetch data:", response.statusText);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []); // Empty dependency array to run only once after the component mounts

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleNext = () => {
    if (currentIndex < typeOfCard.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  return (
    <div>
      {/* <button onClick={handlePrevious}>Previous</button>
      <button onClick={handleNext}>Next</button>

      <Card type={typeOfCard[currentIndex]}>
        <h2>{contentOfCards[typeOfCard[currentIndex]].h2}</h2>
        {typeOfCard[currentIndex] === "info" ? (
          <>
            <p>{contentOfCards[typeOfCard[currentIndex]].p1}</p>
            <p>{contentOfCards[typeOfCard[currentIndex]].p2}</p>
          </>
        ) : (
          <p>{contentOfCards[typeOfCard[currentIndex]].p}</p>
        )}
      </Card>
      <hr />
      <div>
        <h1>Two Number Calculator</h1>
        <Counter count={firstCount} setCount={setCount1} />
        <br />
        <Counter count={secondCount} setCount={setCount2} />
        <p>
          <hr />
          <h2>Sum of Counts = {firstCount + secondCount}</h2>
          <h2>Product of Counts = {firstCount * secondCount}</h2>
        </p>
      </div>
      <div> */}

      <TipCalculator />
    </div>
    // </div>
  );
};

export default App;
