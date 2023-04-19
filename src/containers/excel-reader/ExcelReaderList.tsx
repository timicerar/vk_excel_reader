import { observer } from "mobx-react"
import { AvailableIcon, UnavailableIcon } from "../../components/icons"
import { ExcelFile } from "../../stores"

interface ExcelReaderListProps {
    item: ExcelFile
}

export const ExcelReaderList = observer(({ item }: ExcelReaderListProps) => {
    return (
        <div className="content-wrapper">
            <div className="content-column">
                <div className="content-heading available">
                    Available players
                    <AvailableIcon />
                </div>
                {item.available.map((row, index) => (
                    <div key={index} className="content-row">
                        {index + 1}. {row.email}
                    </div>
                ))}
            </div>
            <div className="content-column">
                <div className="content-heading unavailable">
                    Unavailable players
                    <UnavailableIcon />
                </div>
                {item.unavailable.map((row, index) => (
                    <div key={index} className="content-row">
                        {`${index + 1}. ${row.email}`}
                    </div>
                ))}
            </div>
        </div>
    )
})
