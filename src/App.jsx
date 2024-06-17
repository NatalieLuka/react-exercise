import "./App.css";
import { Card } from "./components/Card";

function App() {
  return (
    <>
      <header>
        <h2>First React Exercise</h2>
      </header>

      <Card
        name="Jane Doe"
        job="Architect"
        imgurl="public/images/JaneDoe.png"
      />

      <Card name="John Doe" job="Engineer" imgurl="public/images/johnDoe.png" />
    </>
  );
}

export default App;
