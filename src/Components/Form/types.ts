export type FormDataTypes = {
    type?: FormDataType,
    name: string,
    label: string,
}

export type FormDataType = "text" | "password" | "submit" | undefined

