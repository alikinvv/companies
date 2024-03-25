import { FC, useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from 'hooks'

import { Button, FormGroup, Input, Modal } from 'components'
import { CreateModalProps } from './types'
import colors from 'colors'

import { addEmployee, updateEmployee } from 'store/pages/mainInterface'

const CreateModal: FC<CreateModalProps> = ({
    onClose,
    selectedCompany,
    selectedEmployee,
}) => {
    const dispatch = useAppDispatch()
    const { companies } = useAppSelector((state) => state.pages.main)
    const [lastName, setLastName] = useState<string>('')
    const [firstName, setFirstName] = useState<string>('')
    const [position, setPosition] = useState<string>('')

    // По хорошему использовать react-hook-form для валидации
    const [lastNameError, setLastNameError] = useState<boolean>(false)
    const [firstNameError, setFirstNameError] = useState<boolean>(false)
    const [positionError, setPositionError] = useState<boolean>(false)

    const submitHandler = () => {
        if (!lastName || !firstName || !position) {
            !lastName && setLastNameError(true)
            !firstName && setFirstNameError(true)
            !position && setPositionError(true)
            return false
        }

        if (selectedCompany !== undefined) {
            selectedEmployee !== undefined
                ? dispatch(
                      updateEmployee({
                          index: selectedCompany,
                          firstName,
                          lastName,
                          position,
                          employeeIndex: selectedEmployee,
                          id: companies[selectedCompany].employees[
                              selectedEmployee
                          ].id,
                      }),
                  )
                : dispatch(
                      addEmployee({
                          index: selectedCompany,
                          id: !companies[selectedCompany].employees.length
                              ? 0
                              : companies[selectedCompany].employees[
                                    companies[selectedCompany].employees
                                        .length - 1
                                ].id + 1,
                          firstName,
                          lastName,
                          position,
                      }),
                  )
            onClose()
        }
    }

    useEffect(() => {
        if (selectedCompany !== undefined && selectedEmployee !== undefined) {
            setFirstName(
                companies[selectedCompany].employees[selectedEmployee]
                    .firstName,
            )
            setLastName(
                companies[selectedCompany].employees[selectedEmployee].lastName,
            )
            setPosition(
                companies[selectedCompany].employees[selectedEmployee].position,
            )
        }
    }, [selectedEmployee])

    return (
        <Modal
            title={
                selectedEmployee !== undefined
                    ? 'Обновление сотрудника'
                    : 'Добавление сотрудника'
            }
            onClose={onClose}
            controls={
                <>
                    <Button onClick={submitHandler}>
                        {selectedEmployee !== undefined
                            ? 'Обновить'
                            : 'Сохранить'}
                    </Button>
                    <Button
                        style={{ background: colors.gray }}
                        onClick={onClose}
                    >
                        Закрыть
                    </Button>
                </>
            }
        >
            <FormGroup label="Имя">
                <Input
                    value={firstName}
                    onChange={(value) => setFirstName(value)}
                    $error={firstNameError}
                />
            </FormGroup>
            <FormGroup label="Фамилия">
                <Input
                    value={lastName}
                    onChange={(value) => setLastName(value)}
                    $error={lastNameError}
                />
            </FormGroup>
            <FormGroup label="Должность">
                <Input
                    value={position}
                    onChange={(value) => setPosition(value)}
                    $error={positionError}
                />
            </FormGroup>
        </Modal>
    )
}

export default CreateModal
