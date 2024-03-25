import { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from 'hooks'
import colors from 'colors'

import { Button, ButtonSquare, Checkbox, Table, Td, Th, Tr } from 'components'
import CreateModal from './CreateModal'
import { PointsIcon } from 'assets/icons'

import {
    FlexStyled,
    NoDataStyled,
    TitleStyled,
    TopBarStyled,
    WrapperStyled,
} from './styles'

import { removeEmployee, setCompanies } from 'store/pages/mainInterface'
import companiesJSON from './companies.json'

const Main = () => {
    const dispatch = useAppDispatch()
    const [checkedAll, setCheckedAll] = useState<boolean>(false)
    const [checkedEmployees, setCheckedEmployees] = useState<number[]>([])
    const [showModal, setShowModal] = useState<boolean>(false)
    const [selectedCompany, setSelectedCompany] = useState<number | undefined>(
        undefined,
    )
    const [selectedEmployee, setSelectedEmployee] = useState<
        number | undefined
    >(undefined)
    const { companies } = useAppSelector((state) => state.pages.main)

    useEffect(() => {
        !!companiesJSON.length && dispatch(setCompanies(companiesJSON))
    }, [dispatch])

    const removeHandler = () => {
        if (selectedCompany !== undefined) {
            dispatch(
                removeEmployee({
                    index: selectedCompany,
                    ids: checkedEmployees,
                }),
            )
            setCheckedAll(false)
            setCheckedEmployees([])
        }
    }

    return (
        <WrapperStyled>
            <div>
                <TopBarStyled>
                    <TitleStyled>Компании</TitleStyled>
                </TopBarStyled>
                <Table>
                    <thead>
                        <Tr>
                            <Th>Название</Th>
                            <Th>Кол-во сотрудников</Th>
                            <Th>Адрес</Th>
                        </Tr>
                    </thead>
                    <tbody>
                        {!!companies.length ? (
                            companies.map((company, index) => (
                                <Tr
                                    key={company.id}
                                    onClick={() => setSelectedCompany(index)}
                                    $withHover
                                    $active={
                                        selectedCompany !== undefined
                                            ? companies[selectedCompany]?.id ===
                                              company.id
                                            : false
                                    }
                                >
                                    <Td>{company.name}</Td>
                                    <Td>{company.employees?.length || 0}</Td>
                                    <Td>{company.addr}</Td>
                                </Tr>
                            ))
                        ) : (
                            <Tr>
                                <Td colSpan={4} $align="center">
                                    <NoDataStyled>Нет данных</NoDataStyled>
                                </Td>
                            </Tr>
                        )}
                    </tbody>
                </Table>
            </div>
            <div>
                <TopBarStyled>
                    <TitleStyled>
                        Сотрудники{' '}
                        {selectedCompany !== undefined &&
                            companies[selectedCompany]?.name}
                    </TitleStyled>
                    <div>
                        {!!checkedEmployees.length && (
                            <Button
                                onClick={removeHandler}
                                style={{ background: colors.gray }}
                            >
                                Удалить
                            </Button>
                        )}
                        {selectedCompany !== undefined && (
                            <Button onClick={() => setShowModal(true)}>
                                Добавить
                            </Button>
                        )}
                    </div>
                </TopBarStyled>
                <Table>
                    <thead>
                        <Tr>
                            <Th width={40}>
                                <Checkbox
                                    checked={checkedAll}
                                    onChange={(check) => {
                                        setCheckedAll(check)
                                        selectedCompany !== undefined && check
                                            ? setCheckedEmployees(
                                                  companies[
                                                      selectedCompany
                                                  ].employees.map(
                                                      (employee) => employee.id,
                                                  ),
                                              )
                                            : setCheckedEmployees([])
                                    }}
                                />
                            </Th>
                            <Th>Имя</Th>
                            <Th>Фамилия</Th>
                            <Th>Должность</Th>
                            <Th style={{ textAlign: 'center' }} width={40}>
                                <PointsIcon />
                            </Th>
                        </Tr>
                    </thead>
                    <tbody>
                        {selectedCompany !== undefined ? (
                            !!companies[selectedCompany].employees.length ? (
                                companies[selectedCompany].employees.map(
                                    (employee, index) => (
                                        <Tr key={employee.id}>
                                            <Td style={{ paddingLeft: '10px' }}>
                                                <Checkbox
                                                    checked={checkedEmployees.includes(
                                                        employee.id,
                                                    )}
                                                    onChange={(check) =>
                                                        check
                                                            ? setCheckedEmployees(
                                                                  [
                                                                      ...checkedEmployees,
                                                                      employee.id,
                                                                  ],
                                                              )
                                                            : setCheckedEmployees(
                                                                  checkedEmployees.filter(
                                                                      (item) =>
                                                                          item !==
                                                                          employee.id,
                                                                  ),
                                                              )
                                                    }
                                                />
                                            </Td>
                                            <Td>{employee.firstName}</Td>
                                            <Td>{employee.lastName}</Td>
                                            <Td>{employee.position}</Td>
                                            <Td>
                                                <FlexStyled>
                                                    <ButtonSquare
                                                        icon="edit"
                                                        onClick={() => {
                                                            setSelectedEmployee(
                                                                index,
                                                            )
                                                            setShowModal(true)
                                                        }}
                                                    />
                                                    <ButtonSquare
                                                        icon="trash"
                                                        onClick={() => {
                                                            dispatch(
                                                                removeEmployee({
                                                                    index: selectedCompany,
                                                                    ids: [
                                                                        employee.id,
                                                                    ],
                                                                }),
                                                            )
                                                            setCheckedEmployees(
                                                                [
                                                                    ...checkedEmployees.filter(
                                                                        (
                                                                            item,
                                                                        ) =>
                                                                            item !==
                                                                            employee.id,
                                                                    ),
                                                                ],
                                                            )
                                                        }}
                                                    />
                                                </FlexStyled>
                                            </Td>
                                        </Tr>
                                    ),
                                )
                            ) : (
                                <Tr>
                                    <Td colSpan={5} $align="center">
                                        Нет сотрудников
                                    </Td>
                                </Tr>
                            )
                        ) : (
                            <Tr>
                                <Td colSpan={5} $align="center">
                                    Выберите компанию
                                </Td>
                            </Tr>
                        )}
                    </tbody>
                </Table>
            </div>

            {showModal && (
                <CreateModal
                    onClose={() => {
                        setShowModal(false)
                        setSelectedEmployee(undefined)
                    }}
                    {...{ selectedCompany, selectedEmployee }}
                />
            )}
        </WrapperStyled>
    )
}

export default Main
