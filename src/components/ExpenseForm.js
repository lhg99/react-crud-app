import React from 'react'

const ExpenseForm = ({charge, amount, handleCharge, handleAmount, handleSubmit, isEditing}) => {
    
    return (
    <form onSubmit={handleSubmit}>
        <div>
            <div>
                <label htmlFor='expense'>지출 항목</label>
                <input type='text' 
                    id='change' 
                    name='charge' 
                    placeholder='예) 렌트비'
                    value={charge} 
                    onChange={handleCharge} />
            </div>

            <div>
                <label htmlFor='amount'>비용</label>
                <input type='number' 
                    id='amount' 
                    name='amount' 
                    placeholder='예) 100'
                    onChange={handleAmount} />
            </div>
            <button type="submit" onClick={handleSubmit}>{isEditing ? "수정" : "제출"}</button>
        </div>
    </form>
  )
}

export default ExpenseForm