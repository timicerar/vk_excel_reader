import { useState } from "react"
import { DropzoneOptions, FileRejection, useDropzone } from "react-dropzone"
import "./dropzone-styles.css"
import { XLSXIcon } from "../icons"

interface DropzoneInputProps {
    onDrop: (acceptedFiles: File[]) => void
}

export const DropzoneInput = ({ onDrop }: DropzoneInputProps) => {
    const [fileName, setFileName] = useState("")

    const handleOnDrop = (acceptedFiles: File[]) => {
        if (acceptedFiles.length && acceptedFiles[0] !== undefined) {
            setFileName(acceptedFiles[0].name)
        }

        onDrop(acceptedFiles)
    }

    const handleOnDropRejected = (fileRejections: FileRejection[]) => {
        if (fileRejections.length > 1) {
            alert("Multiple files are not allowed.")
            return
        }

        alert("Invalid file type. Only .xslx files are allowed.")
    }

    const dropzoneOptions: DropzoneOptions = {
        onDrop: handleOnDrop,
        onDropRejected: (fileRejections) => handleOnDropRejected(fileRejections),
        accept: {
            "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet": [".xlsx"],
        },
        multiple: false,
    }

    const { getRootProps, getInputProps, isDragActive } = useDropzone(dropzoneOptions)

    return (
        <div className="drop-zone-container">
            <div className="drop-zone-wrapper" {...getRootProps()}>
                <input {...getInputProps()} />
                {isDragActive ? (
                    <div className="drop-zone-input ondrop">Drop the file here.</div>
                ) : (
                    <div className="drop-zone-input">
                        Choose an&nbsp;
                        <XLSXIcon />
                        &nbsp;file or drag it here.
                    </div>
                )}
            </div>
            {fileName && (
                <div className="uploaded-file-name">
                    Uploaded&nbsp;
                    <XLSXIcon />
                    &nbsp;file:&nbsp;<span className="bold">{fileName}</span>
                </div>
            )}
        </div>
    )
}
