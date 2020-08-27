import React, {useState, useEffect} from 'react';
import './App.css';

function App() {
  var [funcShow, setFuncShow] = useState(true);
  var [classShow, setClassShow] = useState(true);
  return (
    <div className="container">
      <h2>Hello React</h2>
      <input type="button" value="remove func" onClick={function(){
        setFuncShow(false);
      }}/>
      <input type="button" value="remove comp" onClick={function(){
        setClassShow(false);
      }}/>
      {funcShow ? <FuncComp inintNumber={2}></FuncComp> : null}
      {classShow ? <ClassComp inintNumber={2}></ClassComp>: null}
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
  
  //side effect
  useEffect(function() {  //useEffect 여러개 생성 가능 
    console.log('useEffect === (componentDidMount & componentDidUpdate) ');
    document.title = number+' : '+ _date;

    return function() { //clean up  #이전의 작업했던 내용을 정리하는 구간
      console.log('useEffect CleanUp === (componentDidMount & componentDidUpdate) ');
    }
  }, [number]); //두 번째 인자로 받은 원소에 상태가 바꼈을때만 첫번째 인자 CallBack 함수가 실행되도록 약속...

  console.log('render !!!');  
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

  // componentWillMount() {
  //   console.log(' class => componentWillMount!');
  // }
  // componentDidMount() {
  //   console.log(' class => componentDidMount');    
  // }


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
