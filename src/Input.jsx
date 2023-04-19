import './App.css'

const Input = (props) => {
    return(

        <div className="div-input">
            <form>
                <label htmlFor={props.inputId}>{props.inputLabel}</label>
                <input
                 type="text" 
                 id={props.inputId} 
                 placeholder={props.inputPlaceholder} 
                 className={props.inputClass}
                 onBlur={props.inputFunction}
                 value={props.inputValue}
                 onChange={props.inputOnChange}
                 />
            </form>
        </div>

    )
}
export default Input;