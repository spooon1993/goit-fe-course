import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
// import cat from './cat.jpg';
// import like from './like.png';
// import Post from './components/Post.js';

// const Header = (props) => {
//     let styles = {
//         color: props.color,
//         fontSize: '48px',
//         backgroundColor: 'black',
//     };
//     return (
//         <h1 style={styles} className='h1'>Hello {props.children}</h1>
//     )
// };


// const Post = (props) => {
//     console.log(props);
//     return (
//         <div className={props.className}>
//             <h1>{props.header}</h1>
//             {props.children}
//             <img className='likeImg' src={like} />
//             <span>{props.likes}</span>
//         </div>
//     )
// };

// const Post = (props) => {
//     return (
//         <div className={props.className}>
//             <h1 className='post__header'>{props.header}</h1>
//             <p className='post__content'>{props.children}</p>
//             <div className='post__likes'>
//                 <img src={like} className='likeImg'/>
//                 <span>{props.likes}</span>
//             </div>
//         </div>
//     )
// };



ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
