// import Counter from "./components/Counter";
// import Testimonials from './components/Testimonials';
// import HiddenSearchBar from './components/HiddenSearchBar';
// import ToggleBackground from './components/ToggleBackground';
// import Calculator from './components/Calculator';
// import Meals from './components/Meals';
// import Todo from "./components/Todo";

import Accordion from './components/Accordion';
import Form from './components/Form';
import { accordionItems } from './utils/content';

const App = () => {
  return (
    <div>
      {/* <Counter /> */}
      {/* <Todo /> */}
      {/* <Meals /> */}
      {/* <Calculator /> */}
      {/* <ToggleBackground /> */}
      {/* <HiddenSearchBar /> */}
      {/* <Testimonials /> */}

      {/* Accordion */}
      {/* <div className="accordion">
        {accordionItems.map(({ title, content }) => (
          <Accordion
            title={title}
            content={content}
          />
        ))}
      </div>
      <Accordion /> */}

      <Form />
    </div>
  );
};

export default App;
