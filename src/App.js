import React, {useState} from 'react';
import './App.css';

function App() {
  return (
    <div className="container">
      <h2>Hello React</h2>
      <FuncComp inintNumber={2}></FuncComp>
      <ClassComp inintNumber={2}></ClassComp>
    </div>
  );
}

function FuncComp(props) {
  var numberState = useState(props.inintNumber);
  var number = numberState[0];
  var setNumber = numberState[1];

  // var dateState = useState((new Date()).toString());
  // var _date = dateState[0];
  // var setDate = dateState[1];

  var [_date, setDate] = useState((new Date().toString()));
  
  return (
    <div className="container">
      <h2>function style component</h2>
      <p>Number: {number}</p>
      <p>Date: {_date}</p>
      <input type="button" value="random" onClick={function(){
          setNumber(Math.random());
      }}/>
      <input type="button" value="date" onClick={function(){
          setDate((new Date().toString()));
      }}/>
    </div>
  )
}

class ClassComp extends React.Component{
  /* State 값 초기화 */
  state = {
    number: this.props.inintNumber,
    date : (new Date().toString())    
  }
  render() {
    return(
      <div className="container">
        <h2>class style component</h2>
        <p>Number: {this.state.number}</p>
        <p>Date: {this.state.date}</p>
        <input type="button" value="Random" onClick={function() {
            this.setState({
              number: Math.random()
            });
        }.bind(this)}/>
        <input type="button" value="Date" onClick={function() {
          this.setState({
            date: (new Date().toString())
          });
        }.bind(this)}></input>
      </div>
    )
  }
}

export default App;
