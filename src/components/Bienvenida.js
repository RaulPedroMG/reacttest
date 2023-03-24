import React from "react";

class Bienvenida extends React.Component {
	render() {
		return <h4>Hello, {this.props.name} desde el componente Bienvenida!</h4>;
	}
}

export default Bienvenida;