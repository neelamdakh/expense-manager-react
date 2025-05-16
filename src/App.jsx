import { useState } from "react"
import Balance_detail from "./Components/Balance_detail"
import Form from "./Components/Form"
import Navbar from "./Components/Navbar"
import Transaction_list from "./Components/Transaction_list"

const App = () => {

  const [transactions ,setTransactions] = useState([
    {
      id:1,
      type:"Income",
      amount:25000,
      description:"Salary",
      date:"02-06-25"
    },
    {
      id:2,
      type:"Expense",
      amount:2500,
      description:"EMI",
      date:"04-06-25"
    },
    {
      id:3,
      type:"Income",
      amount:250000,
      description:"Freelance",
      date:"04-06-25"
    },
    {
      id:4,
      type:"Expense",
      amount:25000,
      description:"Fuel",
      date:"21-06-25"
    }

  ])


  const addTransaction =()=>{
    console.log("AAaa")
  }

  const removeTransaction = (delete_id) => {
      setTransactions(transactions.filter(transaction => transaction.id !== delete_id))
  }
  return (
    <>
      <Navbar />
      <div className="container">
        <Form />
        <Balance_detail transactions = {transactions} />
        <Transaction_list transactions = {transactions} removeTransaction={removeTransaction}/>
      </div>
    </>
  )
}

export default App
