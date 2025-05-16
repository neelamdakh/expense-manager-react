const Balance_detail = ({transactions}) => {
 
    const totalIncome = transactions.filter(transaction => transaction.type === "Income").reduce((a,c)=>a+c.amount,0)
    const totalExpense = transactions.filter(transaction => transaction.type === "Expense").reduce((a,c)=>a+c.amount,0)   
    const balance = totalIncome - totalExpense;
    
    return (
        <>
            <div className="expenses_detail">
                <div>
                    <h2>Total Income</h2>
                    <p>{totalIncome}</p>
                </div>
                <div>
                    <h2>Total Expenses</h2>
                    <p>{totalExpense}</p>
                </div>
                <div>
                    <h2>Balance</h2>
                    <p>{balance}</p>
                </div>
            </div>
        </>
    )
}

export default Balance_detail