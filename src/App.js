import { useState } from 'react';
import './App.css';
import Result from './components/Result';

function App() {

  const [city, setCity] = useState("")
  const [homecost, setHomecost] = useState(0);
  const [deposit, setDeposit] = useState(0);
  const [monthlyBudget, setMonthlyBudget] = useState(0);
  const [rent, setRent] = useState(0);
  const [additionalSavings, setAdditionalSavings] = useState(0);

  const calc = () => {
    if (!city || !homecost || !deposit) return;

    setRent(Math.round((homecost * 0.05) / 12));
    setAdditionalSavings(Math.round((0.10 * (homecost - deposit)) / 36));
    setMonthlyBudget(rent + additionalSavings);
  
}
 
  return (
    <div className="App flex flex-col min-h-screen">
      <header>
        <div className='shadow-2xl bg-blue-900 text-white h-1/4 p-6'>
          <h1>Home Calculator</h1>
          <span className="font-bold text-2xl">We'll do the math for you.</span><br/>
          <span>Discover your future home cost with HelloSezame.</span>
        </div>
      </header>

        <div className='shadow-2xl border border-black-800 rounded flex flex-col w-1/4 p-6 m-auto mt-6 text-center justify-center content-center'>
          <h1 className='font-bold text-lg'>Home Details</h1><br/>
          <label>Type your city : </label>
          <input id="city" name="city" className='px-4 bg-slate-100 rounded-xl border border-slate-200 hover:border-slate-400' placeholder='Ex: Paris' onChange={(e) => setCity(e.target.value)}/>
          <label>Add your home cost : </label>
          <input id="homecost" name="housecost" className='px-4 bg-slate-100 rounded-xl border border-slate-200 hover:border-slate-400' placeholder='Ex: $100,000' onChange={(e) => setHomecost(e.target.value)} />
          <label>Add your deposit : </label>
          <input id="deposit" name="deposit" className='px-4 bg-slate-100 rounded-xl border border-slate-200 hover:border-slate-400' placeholder='Ex: $10,000' onChange={(e) => setDeposit(e.target.value)} />
          <button className='m-6 bg-blue-900 hover:bg-blue-600 text-white rounded-xl border border-black' onClick={() => calc()} >Calculate</button>
        </div>

        <Result monthlyBudget={monthlyBudget}/>
  
        <footer className="shadow-2xl bg-blue-900 text-white h-1/4 p-6">
          <div className="text-white text-center p-4">
            © 2022 Copyright : HelloSezame
          </div>
      </footer>
    </div>
  
  );
}

export default App;
