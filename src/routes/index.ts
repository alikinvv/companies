import { lazy } from 'react'
const main = lazy(() => import('pages/mainInterface'))

export const routes = [
    {
        path: '/',
        element: main,
    },
]
