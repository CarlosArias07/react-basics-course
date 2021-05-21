import React from 'react';
import './App.css';

// function HelloWorld(props) {
//   return (
//     <div id="hello">
//       <h3>{props.subtitle}</h3>
//       {props.mytext}
//     </div>
//   );
// }

class HelloWorld extends React.Component {

  state = {
    show: true
  }

  toggleShow = () => {
    this.setState({show: false})
  }

  render() {
    if (this.state.show) {
      return (
        <div id="hello">
          <h3>{this.props.subtitle}</h3>
          {this.props.mytext}
          <button onClick={this.toggleShow}>Toggle Show</button>
        </div>
      )
    } else {
      return <h1>No hay elementos</h1>
    }
  }
}

function App() {
  return (
    <div>
      This is my component: 
      <HelloWorld mytext="Hello fazt" subtitle="lorem ipsum"/> 
      <HelloWorld mytext="Hola mundo" subtitle="asdasdasd"/> 
      <HelloWorld mytext="Hello!" subtitle="1234  "/> 
    </div>
  );
}

export default App;
