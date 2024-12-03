import Heading from "./components/Heading";
import Section from "./components/Section";
import Clock from "./components/Clock";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Clock />
      <Section>
        <Heading>Title</Heading>
        <Section>
          <Heading>Heading</Heading>
          <Section>
            <Heading>Sub-heading</Heading>
            <Section>
              <Heading>Sub-sub-heading</Heading>
            </Section>
          </Section>
        </Section>
      </Section>
    </div>
  );
}

export default App;
