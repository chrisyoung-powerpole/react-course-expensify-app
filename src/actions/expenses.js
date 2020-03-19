import uuid from 'uuid';

//ADD_EXPENSE
export const addExpense = (
    { description = 'Rent',
        note = '',
        amount = 109500,
        createdAt = 0
    } = {}) => ({
        type: 'ADD_EXPENSE',
        expense: {
            id: uuid(),
            description,
            note,
            amount,
            createdAt
        }
    });

//REMOVE_EXPENSE
export const removeExpense = () => ({
    type: 'REMOVE_EXPENSE',
    id: '123abc'
});

//EDIT_EXPENSE
export const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id: '123abcd',
    updates: {
        note: 'New note value'
    }
});