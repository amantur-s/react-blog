import './App.css';
import ExpenseItem from './components/ExpenseItem';

function App() {

  const expenses = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    {
      id: 'e2',
      title: 'New TV',
      amount: 799.49,
      date: new Date(2021, 2, 12)
    },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];

  return (
    <div className='App'>
      <ExpenseItem date={expenses[0].date} text={expenses[0].title} price={expenses[0].amount}/>
      <ExpenseItem date={expenses[1].date} text={expenses[1].title} price={expenses[1].amount}/>
      <ExpenseItem date={expenses[2].date} text={expenses[2].title} price={expenses[2].amount}/>
    </div>
  )
}


export default App;