export interface StateProps {
    companies: CompaniesProps[]
}

export interface CompaniesProps {
    id: number
    name: string
    addr: string
    employees: EmployeesProps[]
}

export interface EmployeesProps {
    index: number
    id: number
    firstName: string
    lastName: string
    position: string
    companyId: number
}
