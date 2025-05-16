const TransactionListItem = ({transaction,removeTransaction}) => {
    
    
    return (
        <>
            <li>
                <div>
                    <h3>{transaction.type}</h3>
                    <h4>{transaction.amount}</h4>
                    <p>{transaction.description}</p>
                    <p>{transaction.date}</p>
                    <div className="transaction_action">
                        <button >Edit</button>
                        <button onClick={()=>removeTransaction(transaction.id)}>Delete</button>
                    </div>
                </div>
            </li>
        </>
    )
}

export default TransactionListItem