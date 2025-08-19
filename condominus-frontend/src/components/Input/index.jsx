const Input = ({inputType, label}) => {
    return (
        <div>
            <label>{label}</label>
            <input type={inputType} placeholder={label} />
        </div>
    )
}

export default Input
