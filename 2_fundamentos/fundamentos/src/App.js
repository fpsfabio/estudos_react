import './App.css';

// componentes
import FirstComponent from './components/FirstComponent';
import TemplateExpressions from './components/TemplateExpression';
import MyComponent from './components/MyComponent';
import Events from './components/Events';
import Challenge from './components/Challenge';

function App() {
  return (
    <div className="App">
      <h1>Fundamentos React</h1>
      <TemplateExpressions />
      <MyComponent />
      <Events />
      <Challenge />
    </div>
  );
}

export default App;
