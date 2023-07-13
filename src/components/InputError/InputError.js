import './InputError.css'

const InputError = ({ error }) => {
    return (
        <span className={`input-error ${error ? 'input-error_active' : ''}`}>
            {error ? error : 'Что-то пошло не так...'}
        </span>
    )
}
export default InputError
