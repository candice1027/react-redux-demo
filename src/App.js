import React,{Component} from 'react';
import {connect} from 'react-redux';
import Hooks from './hooks-demo'
import './App.css';
import classNames from 'classnames'
import styled from 'styled-components'

const Title = styled.div`
  color: blue;
  font-size: 20px;
`;
class App extends Component {
  render() {
    return (
      <div className="App">
      <div className={classNames('topbar','topbar-two')}>这里使用classnames库</div>
        <Title>title2</Title>
        <Hooks/>
      <div>
         你点击了<span id="value">{this.props.number}</span>次
         <div>
           <button id="add" onClick={this.props.addN}>+1</button>
           <button id="minus" >-1</button>
           <button id="addIfOdd">如果单数就+1</button>
           <button id="addAfter">两秒后+1</button>
         </div>
       </div>
     </div> 
    )
  }
}

function mapStateToProps(state) {
  return {
    number: state.n
  }
}
function mapActionToProps(dispatch) {
  return {
    addN: ()=>dispatch({type: 'add',payload:1})
  }
}
export default connect(mapStateToProps,mapActionToProps)(App);
