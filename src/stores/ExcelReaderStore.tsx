import { action, makeAutoObservable, observable, runInAction } from "mobx"
import * as XLSX from "xlsx"

export interface ExcelFile {
    fileName: string
    available: ExcelData[]
    unavailable: ExcelData[]
}

export interface ExcelData {
    email: string
    onList: boolean
}

export class ExcelReaderStore {
    @observable public isLoading = false
    @observable public error: Error | null = null
    @observable public item: ExcelFile | null = null

    constructor() {
        makeAutoObservable(this)
    }

    @action
    public handleFileOnDrop(acceptedFiles: File[]): void {
        if (acceptedFiles.length === 0) {
            return
        }

        this.isLoading = true
        this.item = null

        const file = acceptedFiles[0]
        const fileReader = new FileReader()

        const item: ExcelFile = {
            fileName: file.name,
            available: [],
            unavailable: [],
        }

        fileReader.readAsBinaryString(file)

        fileReader.onload = () => {
            const fileData = fileReader.result
            const workbook = XLSX.read(fileData, { type: "binary" })
            const worksheet = workbook.Sheets[workbook.SheetNames[0]]
            const excelData = XLSX.utils.sheet_to_json<string[]>(worksheet, {
                header: 1,
            })

            excelData.map((value, index) => {
                if (index > 0) {
                    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

                    const dataRow: ExcelData = {
                        email: value[1] && emailRegex.test(value[1]) ? value[1] : "No email address.",
                        onList: value[2] === "Da",
                    }

                    value[2] === "Da" ? item.available.push(dataRow) : item.unavailable.push(dataRow)
                }
            })

            runInAction(() => {
                this.isLoading = false
                this.item = item
            })
        }
    }
}
