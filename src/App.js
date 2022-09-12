import { Component } from 'react';
import './App.css';

class WhoAmI extends Component {
  constructor(props){
    super(props);
    this.state = {
      years: 27,
      position: ''
    }
  }

  nextYear = () => {
    this.setState(state => ({
      years: state.years + 1
    }))
  }

  commitInputChanges = (e) => {
      this.setState({
          position: e.target.value
      })
  }

  render() {
    const {name, surname, link} = this.props;
    const {position, years} = this.state;
      console.log(this)
    return (
      <div>
        <button onClick={this.nextYear}>+++</button>
        <h1>
          My name is {name},
          surname - {surname},
          age - {years},
          position - {position}
        </h1>
        <a href={link}>My Profile and</a>
        <form>
          <span>Introduce job name</span>
          <input type="text" onChange={this.commitInputChanges}/>
        </form>
      </div>
    )
  }
}

function App() {
  return (
    <div className="App">
      <WhoAmI/>
      <WhoAmI/>
    </div>
  );
}

export default App;
