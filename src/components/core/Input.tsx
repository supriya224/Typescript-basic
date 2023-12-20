type InputProps = {
    value: string
    handleChange: (event: React.MouseEvent<HTMLInputElement>) => void
}

export const Input = (props: InputProps) => {
    const handleChangeInput = (event: React.MouseEvent<HTMLButtonElement>) => {
        console.log(event)
    }
    return (
        <div>
            <input value={props.value} onChange={()=>handleChangeInput} />
        </div>
    )
}
