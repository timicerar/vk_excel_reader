import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { observer } from "mobx-react"
import { ExcelReader } from "./containers/excel-reader"

const App = observer(() => {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <ExcelReader />,
        },
    ])

    return <RouterProvider router={router} />
})

export default App
