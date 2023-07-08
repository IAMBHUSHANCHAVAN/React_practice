// import React, { Component } from 'react'

// export default class ClassComponent extends Component {
//     constructor(){
//         super();
//         this.msgall={
//             name :"bhushan",
//             age : 22,
//             gender : "male",
//             msg : "still not clicked"

//         }
//     }
//     changed = ()=>{
//       this.setState({msg:"message changed"})
//     }
//   render() {
//     return (
//       <div>
//         this is a class baed component

//         <h1> my name is {this.msgall.name}</h1>
//         {/* <h1> my age is {this.msgall.age}</h1>
//         <h1>my gender is {this.msgall.gender}</h1>

//         <h1>i am changed using {this.props.title}</h1> */}

//         <h1>button {this.msgall.msg}</h1>
//         <button type='button' onClick={this.changed}>click me</button>
//       </div>
//     )
//   }
// }



import React from "react";

export default class ClassComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  addcount = () =>{
    this.setState({count:this.state.count+1})
  }


  render() {
    return (
      <div>
        <h1> The value is {this.state.count}  </h1>

        <button type="button" onClick={this.addcount}>add by one </button>

      </div>
    );
  }
}