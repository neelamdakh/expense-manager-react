import TransactionListItem from "./TransactionListItem"

const Transaction_list = ({transactions,removeTransaction}) => {
    return (
        <>
            <div className="transaction_history">
                <h1>Transactions</h1>
                <ul>
                    {
                       transactions.map(transaction => <TransactionListItem key={transaction.id} transaction ={transaction} removeTransaction={removeTransaction}/>) 
                    }
                    
                </ul>
            </div>
        </>
    )
}

export default Transaction_list