import { Routes, Route } from 'react-router-dom'
import { routes } from 'routes'
import { Suspense } from 'react'
import { Header } from 'components'

export const App = () => {
    return (
        <Suspense fallback="">
            <Header />
            <Routes>
                {routes.map((route, i) => (
                    <Route
                        key={i}
                        path={route.path}
                        element={<route.element />}
                    />
                ))}
            </Routes>
        </Suspense>
    )
}
