import { createSlice } from '@reduxjs/toolkit'
import { StateProps } from './types'

const initialState: StateProps = {
    companies: [],
}

const mainSlice = createSlice({
    name: 'main',
    initialState,
    reducers: {
        setCompanies: (state, { payload }) => {
            state.companies = payload
        },
        addEmployee: (state, { payload }) => {
            state.companies[payload.index].employees = [
                ...state.companies[payload.index].employees,
                payload,
            ]
        },
        updateEmployee: (state, { payload }) => {
            state.companies[payload.index].employees[payload.employeeIndex] = {
                ...payload,
            }
        },
        removeEmployee: (state, { payload }) => {
            state.companies[payload.index].employees = state.companies[
                payload.index
            ].employees.filter(
                (employee) =>
                    !payload.ids.some((id: number) => employee.id === id),
            )
        },
    },
    extraReducers: () => {},
})

export const { setCompanies, addEmployee, removeEmployee, updateEmployee } =
    mainSlice.actions
export default mainSlice.reducer
