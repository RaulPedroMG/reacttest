export default function welcome(props){
    //console.log(props)
    const {message, name} = props;
    const name2 = "Kadasoftware";
    return (
        <div>
            <h4 className="textedit">{message} {name}</h4>
            <h4 className="textedit">Hola {name2} desde Welcome</h4>
        </div>
    );
}