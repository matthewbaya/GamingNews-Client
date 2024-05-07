// import "./App.css";

import Navbar from "../components/navbar";
import Card from "../components/card";

function App() {
  const dataCard = ["data1", "data2", "data3", "data4", "data5"];
  return (
    <>
      <Navbar></Navbar>
      <div className="container">
        <h1 className="display-1">My News</h1>
      </div>
      <div className="d-flex flex-wrap justify-content-center gap-5">
        {dataCard.map((title, index) => {
          return <Card key={index} title={title}></Card>;
        })}
      </div>
    </>
  );
}

export default App;
