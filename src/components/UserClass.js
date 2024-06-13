import React from "react";
class UserClass extends React.Component {
    constructor(props){
        super(props);
        console.log(props);
        this.state ={
            count:0,
            userinfo:{
              name :"John Doe",
              location:"Uk",
              avatar_url:"dummy.jpg"
            }
        }
    }
   async componentDidMount(){
    //  api call
    const data = await fetch("https://api.github.com/users/visioncoding021");
    const info = await data.json();
    this.setState({
      userinfo : info,
    })
    }
    componentWillUnmount(){
      alert("change the page");
    }
  render() {
    const {count}  =this.state;
    const {name,location,avatar_url}  =this.state.userinfo;

    return (
        
      <div className="user-card">
        <h1>{count}</h1>
        <button onClick={()=>{
            this.setState({
                count:this.state.count+1,
            })
}}>
            Click Me</button>
            <img src={avatar_url}></img>
        <h2>Name : {name}</h2>
        <h3>{location}</h3>
        <h4>LeetCode : rgoswami3419</h4>
      </div>
    );
  }
}
export default UserClass;