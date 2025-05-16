const Form = () => {

    return (
        <>
            <form >
                <select>
                    <option value="Income">Income</option>
                    <option value="Expenses">Expenses</option>
                </select>
                <input type="text" placeholder="Enter Amount" />
                <input type="text" placeholder="Description" />
                <input type="date" placeholder="please select date" />
                <button>Save</button>
            </form>
        </>
    )
}

export default Form