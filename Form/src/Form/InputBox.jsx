import './style.css'
const InputBox = ({type,placeholder,value,onChange}) =>
{
    
    return (
        <>
        
        <input type={type} value={value} placeholder={placeholder} onChange={onChange}/>
        
        </>
    )
}
export default InputBox;