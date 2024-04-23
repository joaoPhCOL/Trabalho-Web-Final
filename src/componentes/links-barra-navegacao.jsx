
export default function LinkBarraNavegacao(props){
    return (
        <liv>
            <a {...props} className="text-white hover:text-yellow-500 transition duration-300">{props.children}</a>
        </liv>       
    )
}   