import logo from "./logo.svg";
import "./App.css";
import LearningReact from "./LearnReact";
import { useEffect, useState } from "react";

function App() {
  const [customerList, setCustomerList] = useState([]);

  const callApi = () => {
    return [1, 2, 3, 4, 5];
  };

  const getCustomer = () => {
    const data = callApi();

    setCustomerList(data);
  };

  console.log(">>>>> here in component ");

  useEffect(() => {
    setTimeout(() => {
      getCustomer();
    }, 2000);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        {}
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>

        {customerList.map((item) => (
          <span>{item}</span>
        ))}

        <LearningReact />
      </header>
    </div>
  );
}

export default App;
