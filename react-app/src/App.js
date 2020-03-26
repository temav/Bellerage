import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
// import Oru from './Oru';

class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//         isShowed: true
//     };
// };
    state = {
      value: '',
      values: []
    };
    handleChange = event => {
      this.setState({value: event.target.value}, () => {
        console.log(this.state); // {a: 2}
       })
    };
    handleOnKeyPress = event => {
      if(event.key === 'Enter')
      this.setState({values: [...this.state.values, event.target.value]}, () => {
        console.log(this.state); // {a: 2}
       })

    };

  
  // const prp = {className:'App'};
  render(){
    console.log('render');
    // const {counter} = this.props;
    const {value, values} = this.state;

    return (
      <div>
      
      {
        values.map((value, index) => <p key={index}>{value}</p>)
      }
      <input value={value} onChange={this.handleChange} onKeyPress={this.handleOnKeyPress}/>
      </div>)
    // const data = Array.from(new Array(10), (_, i) => i);
  // return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    //   {
    //     data.map(item => <p key={item}>{item}</p>)
    //   }
    //   {isShowed ? data.map(item =><p key={item}>{item}</p>): undefined}
    // </div>
  // );
}
}
export default App;