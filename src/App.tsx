import { createHashRouter, RouterProvider } from "react-router-dom"
import { observer } from "mobx-react"
import { ExcelReader } from "./containers/excel-reader"

const App = observer(() => {
    const router = createHashRouter([
        {
            path: "/",
            element: <ExcelReader />,
        },
    ])

    return <RouterProvider router={router} />
})

export default App
