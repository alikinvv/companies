import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { store } from 'store'
import { useNavigate, useLocation } from 'react-router-dom'
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export const useApp = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const dispatch = useDispatch()

    return { dispatch, navigate, location }
}
