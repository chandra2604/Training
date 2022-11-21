import ExpenseItem from './ExpenseItem';
import './App.css';

function App() {
  const expense=[
    {
      id:"e1",
      title: "Paper",
      amount:94.2,
      date:new Date(2020,3,23),
    },
    {id:"e2",title:"Car Insurance", amount:99.65,date:new Date(2020,4,24)},
    {id:"e3", title:"New Desk",amount:99.74,date:new Date(2020,5,25)},
  ];

  
  return (
    <div>
      <h1>Let's Get Started!</h1>
      <ExpenseItem
       title={expense[0].title}
      amount={expense[0].amount}
      date={expense[0].date}
      >
      </ExpenseItem>
      <ExpenseItem title={expense[1].title}
      amount={expense[1].amount}
      date={expense[1].date}
      >
      </ExpenseItem>
      <ExpenseItem title={expense[2].title}
      amount={expense[2].amount}
      date={expense[2].date}
      >
      </ExpenseItem>
    </div>
  );
}

export default App;
