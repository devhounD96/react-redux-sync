import { useSelector } from 'react-redux';
import Counter from './components/Counter'

function App() {
  const count = useSelector((state) => state.counter.count);
  let voters = [
    'Allan Grant',
    'Monica Belluci',
    'Cisco Ramone',
    'Joe Keery'
  ]
  return (
    <div>
    <h1 style={{textAlign:'center'}}>Lets Learn Redux</h1>
    <h2 style={{textAlign:'center'}}>Total votes: {count}</h2>
    {
      voters.map((item, index)=>(
        <Counter key={index} name={item} />
      ))
    }
    </div>
  );
}

export default App;
