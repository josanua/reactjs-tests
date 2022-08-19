import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import { Header } from './App';


// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <App/>
// );


class Clock extends React.Component {

  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  // lifecycle methods
  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    )
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    })
  }

  render() {
    return(
        <div>
          <h1>Buna, lume!</h1>
          <h2>Ora: {this.state.date.toLocaleTimeString()}.</h2>
        </div>
    )
  }
}

// testing component
class TestComponent extends React.Component {
  constructor(props) {
    super(props);
    this.props = { 
      default: 'Default props text' 
    }
    // console.dir( props )
    // this.state = {date: new Date()};
  }

  render() {
    return(
      <div>
        {this.props.name}
        {console.log(this.props)}
      </div>
    )
  }
}



// Test transmiting props data
class ParentComponent extends React.Component {
  render() {
    return(
      console.log('Parent: '),
      console.log(this.props.text),
      <ChildComponent/>,
      <ChildFuncComponent text={this.props.text}/>
    )
  }
}

class ChildComponent extends React.Component {
  constructor(props) {
    super(props)
  }

  render(){
    return(
      console.log('Child: '),
      console.log(this.props.text)
    )
  }
}

const ChildFuncComponent = (props) => {  
  console.log('Child Func Comp: ');
  console.log(props.text);
  return <p>I'm the Funct type child comp!</p>; 
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ParentComponent text='Text from parent component'/>
  </React.StrictMode>
  );
// https://itnext.io/what-is-props-and-how-to-use-it-in-react-da307f500da0
// ziceam sa fac un component simplu sa experimentez din cap
// Props Children props.children https://reactjs.org/docs/glossary.html#react-elements