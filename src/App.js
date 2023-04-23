import './App.css';
import './styles.css';

function App() {
  const handleClick = () => {
      // do something with Connor's branch
  };

  return (
      <div className="container">
        <button type="button" className="btn btn-dark btn-lg"  onClick={handleClick}>GPT Call</button>
      </div>
  );
}

export default App;
