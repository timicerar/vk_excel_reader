import React from "react"
import ReactDOM from "react-dom/client"
import { configure } from "mobx"
import App from "./App"

configure({ enforceActions: "observed" })

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
)
