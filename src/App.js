import Navbar from './components/Navbar';
import Textform from './components/Textform';

function App() {
  return (
    <>
      <Navbar title="Textutils" />
      <div className="container my-3">
        <Textform heading="Enter the text for analyze below"/>
      </div>
    </>
  );
}

export default App;
