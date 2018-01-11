import React,{Component} from 'react';
class Logo extends Component {
  render(){
    const style = {
      color:"white",
      fontSize:'20px'
    }
    return (
      <div>
        <h1 style = {style}>Mafia</h1>
      </div>
    )
  }
}
export default Logo;
