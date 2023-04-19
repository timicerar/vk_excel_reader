import "./details-loader-styles.css"
import { observer } from "mobx-react"
import { Loader } from "./Loader"

interface IDetailsLoaderProps {
    isLoading: boolean
    error: Error | null
    item: {} | null
}

export const DetailsLoader = observer((props: IDetailsLoaderProps) => {
    if (props.item) {
        return null
    }

    if (props.isLoading) {
        return (
            <div className="loader-wrapper">
                <Loader />
            </div>
        )
    }

    if (props.error) {
        return <div className="error-message">Oops. Something went wrong.</div>
    }

    return null
})
