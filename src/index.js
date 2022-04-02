import React from "react";
import ReactDOM from "react-dom";

// Tododay1 定时器的生命周期设置方法
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

// // Tododay2 文本与按钮绑定
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

//Tododay2 mailbox与运算符
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

//Tododay3 列表和Key 使用Array.prototype.map()方法
//map()方法的语法为：
 // var new_array = arr.map(function callback(currentValue[, index[, array]]) {
 // Return element for new_array 
 // }[, thisArg])
 //map()方法为原数组中的每个元素都按照顺序调用一次callback函数，callback每次函数执行后的返回值（包括undefined）组合起来形成一个新的数组。
 //callback只会在有值的索引上被调用。因此null和undefined在显示表现为‘【空】’的原因有两种：1.没有值 2.没有索引
// const numbers = [1,2,6,4,5];
// // 在列表中需要加入key属性帮助react识别哪些元素发生了改变
// //key只有放在就近的数组上下文中才有意义（放置在每个数组内元素对应的标签或者该标签的组件上）
// //key只需要在兄弟节点是唯一的

// map()也可以直接嵌入JSX中
// const numbers = [1,2,6,4,5];
// function ListItem(props) {
//   const value = props.value;

//   return <li>{value}</li>;
// }

// function Numberlist(props){
//     const numbers = props.numbers;
//     const listItem = numbers.map((number)=><ListItem key={number.toString()} value={number}/>)
//     return (
//     <ul>{listItem}</ul>
//     );
// }
// ReactDOM.render(<Numberlist numbers={numbers}/>,document.getElementById('root'));

// function Blog(props) {
//     const sidebar = (
//       <ul>
//         {props.posts.map((post) =>
//           <li key={post.id}>
//             {post.title}
//           </li>
//         )}
//       </ul>
//     );
//     const content = props.posts.map((post) =>
//       <div key={post.id}>
//         <h3>{post.title}</h3>
//         <p>{post.content}</p>
//       </div>
//     );
//     return (
//       <div>
//         {sidebar}
//         <hr />
//         {content}
//       </div>
//     );
//   }
//   //todokey={}属性会传递给React，不会传递用户定义的组件，如果需要使用key的属性值，需要自己设置一个显式的传递方式
//   const posts = [
//     {id: 1, title: 'Hello World', content: 'Welcome to learning React!'},
//     {id: 2, title: 'Installation', content: 'You can install React from npm.'}
//   ];
//   ReactDOM.render(
//     <Blog posts={posts} />,
//     document.getElementById('root')
//   );

//todo day3：组合
//对于继承来说，文档建议用户使用单独的JS模块，组件间使用import直接引入
function FancyBorder(props){
    const color = props.color;
    return (<div className={'FancyBorder FancyBorder-'+ color}>
        {props.children}
    </div>)
}
//可以使用{props.children}代替JSX创建的标签，用于JSX的标签嵌套（组合）中
function WelcomeDialog(){
    return (
        <FancyBorder color="blue">
            <h1 className="Dialog-title">
                Welcome
            </h1>
            <p className="Dialog-message">
                Thank you for visiting our spacecraft!
            </p>
        </FancyBorder>
    )
}

ReactDOM.render(<WelcomeDialog/>,document.getElementById('root'));