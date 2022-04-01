import React from "react";
import ReactDOM from "react-dom";

// day1 定时器的生命周期设置方法
// class Clock extends React.Component{
//   constructor(props){
//     super(props);
//     this.state = {date:new Date()};
//   }
//   componentDidMount(){
//     this.timerID = setInterval(()=>this.tick(),1000);
//   }
//   componmentDidUnmount(){
//     clearInterval(this.timerID);
//   }
//   tick(){
//     this.setState({date:new Date()});
//   }
//   render(){
//     return(
//       <div>
//         <h1>Hellow world!</h1>
//         <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
//       </div>
//     );
//   };

// }

// ReactDOM.render(<Clock />,document.getElementById('root'));

// // day2 文本与按钮绑定
// //登录和未登录文本提示
// function UserGreeting(props){
//   return <h1>Welcome back!</h1>
// }

// function GuestGreeting(props){
//   return <h1>Please sign up.</h1>
// }
// //写登录和未登录按钮
// function LoginButton(props){
//   return(
//     <button onClick={props.onClick}>
//       Login
//     </button>
//   );
// }
// function LogOutButton(props){
//   return(
//     <button onClick={props.onClick}>
//       Logout
//     </button>
//   )
// }
// //设置文本变化逻辑
// //这里就是设置显示未登录：GuestGreeting，登录：UserGreeting
// function Greeting(props){
//   const isLoggedIn = props.isLoggedIn;
//   if (isLoggedIn){
//     return <UserGreeting/>
//   }
//   return <GuestGreeting/>
// }

// // // ReactDOM.render(<Greeting isLoggedIn={true}/>,document.getElementById('root'));

// // //实现按钮功能
// class LoginControl extends React.Component{
//   constructor(){
//     super();
//     this.handleLoginClick = this.handleLoginClick.bind(this);
//     this.handleLogOutClick = this.handleLogOutClick.bind(this);
//     this.state = {isLoggedIn:false}
//   }

//   handleLoginClick(){
//     this.setState({isLoggedIn:true});
//   }

//   handleLogOutClick(){
//     this.setState({isLoggedIn:false});
//   }
//   //由于按钮和文字是分开展示的，首先想到使用state
//   //按下按钮需要控制文字发生改变，这样就由按钮控制文字内容
//   render(){
//     const isLoggedIn = this.state.isLoggedIn;//默认未登录
//     let button;//为了将同一个按钮设置为一个对象的两种状态，创建一个对象表示按钮
//     if (isLoggedIn){//默认未登录这里的 isLoggedIn === false
//       button = <LogOutButton onClick={this.handleLogOutClick}/>;
//     }else{
//       button = <LoginButton onClick={this.handleLoginClick}/>;//用事件监听器属性，按下按钮后事件冒泡
//     }
//     return(
//       <div>
//         <Greeting isLoggedIn={isLoggedIn}/>
//         {button}
//       </div>
//     );
//   }
// }

// ReactDOM.render(<LoginControl/>,document.getElementById('root'));

//day2 mailbox与运算符
// function Mailbox(props) {
//   const unreadMessages = props.unreadMessages;
//   return (
//     <div>
//       <h1>Hellow!</h1>
//       {unreadMessages.length > 0 && (
//         <h2>you have {unreadMessages.length} unread messages.</h2>
//       )}
//     </div>
//   );
// }

// const messages = ["React", "Re: React", "Re: Re: React"];

// ReactDOM.render(
//   <Mailbox unreadMessages={messages} />,
//   document.getElementById("root")
// );
