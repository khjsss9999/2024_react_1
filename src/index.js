import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Library from './step01_jsx/Library';
import Clock from './step02_element/Clock';
import Welcome from './step03_component/Welcome';
import Comment from './step03_component/Comment';
import CommentList from './step03_component/CommentList';
import NotificationList from './step04_state/NotificationList';

const root = ReactDOM.createRoot(document.getElementById('root'));

  
  root.render(
    // <React.StrictMode>
    //   <CommentList />
    // </React.StrictMode>

    // <React.StrictMode>
    //   <Welcome name="Sara" />
    //   <Welcome name="Cahal" />
    //   <Welcome name="Edite" />
    // </React.StrictMode>

    <React.StrictMode>
        <Library />
    </React.StrictMode>
  );


// setInterval(() => {
  
//   root.render(
//     <React.StrictMode>
//       <Clock />
//     </React.StrictMode>
//   );
// }, 1000);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
