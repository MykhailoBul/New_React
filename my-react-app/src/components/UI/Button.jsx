import './Button.css'

const Buttons = (props) => {
    return (
        <button className='button' type={props.type || 'button'} 
        onClick={props.onClick}> {props.children}
        </button>
    )
}

export default Buttons