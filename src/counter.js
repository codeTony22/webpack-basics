import React from "react";
import { hot } from "react-hot-loader";
 
class Counter extends React.Component {
 constructor(props) {
     super(props);
     this.state = {
         count: 1
     };
 }
 
 render() {
     return (
         <div onClick={this.climb.bind(this)}>
             <h1>Counting: {this.state.count}</h1>
         </div>
     );
 }
 
 climb() {
     this.setState({
         count: this.state.count + 1
     });
 }
}
 
export default hot(module)(Counter);