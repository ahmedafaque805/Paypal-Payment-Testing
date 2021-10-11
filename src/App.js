import {useState} from 'react'
import './App.css';
import Paypal from './Paypal';

function App() {
  const [Checkout, setCheckout] = useState(false)

  return (
    <div className="App">
     {Checkout ? ( <Paypal /> ) : ( <button onClick={() => setCheckout(true)}>CheckOut</button>)}
    </div>
  );
}

export default App;
