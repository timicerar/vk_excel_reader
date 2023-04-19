import { useState } from "react"
import "./styles.css"
import { observer } from "mobx-react"
import { DropzoneInput } from "../../components/dropzone"
import { WaterBasketballIcon } from "../../components/icons"
import { DetailsLoader } from "../../components/loader"
import { ExcelReaderStore } from "../../stores"
import { ExcelReaderList } from "./ExcelReaderList"

export const ExcelReader = observer(() => {
    const [store] = useState(() => new ExcelReaderStore())

    const handleOnDrop = (acceptedFiles: File[]) => {
        store.handleFileOnDrop(acceptedFiles)
    }
    console.log(store.item)
    return (
        <div className="container">
            <h1 className="heading">
                <WaterBasketballIcon />
                <span>Waterbasketball Player Availability Sorter</span>
            </h1>
            <DropzoneInput onDrop={(acceptedFiles) => handleOnDrop(acceptedFiles)} />
            {store.item && <ExcelReaderList item={store.item} />}
            <DetailsLoader isLoading={store.isLoading} error={store.error} item={store.item} />
        </div>
    )
})
