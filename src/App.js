import logo from './logo.svg';
import './App.css';

function Foo(props) {
  return (
    <div>
      props.foo
    </div>
  );
}

function App() {
  return (
    <div>
      <Foo foo="hi" />
    </div>
  );
}

export default App;
