import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import reportWebVitals from './reportWebVitals';


import Prac01 from './practice01/Prac01';
import Ex01 from './step09_list/Ex01';
import Ex02 from './step09_list/Ex02';
import NameForm from './step10_form/NameForm';
import SelectForm from './step10_form/SelectForm';
import MultiSelectForm from './step10_form/MultiSelectForm';
import CheckBoxesForm from './step10_form/CheckBoxesForm';
import SignUpForm from './step10_form/SignUpForm';
import Calc from './step11_SharedState/Calc';
import Calc2 from './step11_SharedState/Calc2';
import Calc3 from './step11_SharedState/Calc3';


const root = ReactDOM.createRoot(document.getElementById('root'));

  
  root.render(
  
    // <React.StrictMode>
    //   <Welcome name="Sara" />
    //   <Welcome name="Cahal" />
    //   <Welcome name="Edite" />
    // </React.StrictMode>

    // <React.StrictMode>
    //     <Prac01 />
    // </React.StrictMode>

    // <React.StrictMode>
    //     <Count />
    // </React.StrictMode>
    
    <React.StrictMode>
        {/* <Customer id="khjsss999@naver.com" name="khj" orders={['A001', 'B002', 'C003']} /> */}
        {/* <BookList books={Books} /> */}
        {/* <Counter /> */}
        {/* <Counter2 /> */}
        {/* <Counter3 /> */}
        {/* <Counter4 /> */}
        {/* <Customer01 /> */}
        {/* <SmartHome /> */}
        {/* <SmartHome2 /> */}
        {/* <TextInput /> */}
        {/* <VideoExam /> */}
        {/* <Sample01 /> */}
        {/* <Sample02 /> */}
        {/* <Sample03 /> */}
        {/* <Sample04 /> */}
        {/* <Sample05 /> */}
        {/* <Ex01 isLoggedIn="" /> */}
        {/* <Ex01 isLoggedIn={true} /> */}
        {/* <Ex03 /> */}
        {/* <Ex04 msg={[]} /> */}
        {/* <Ex04 msg={[1,2]} /> */}
        {/* <Ex05 /> */}
        {/* <CommentList /> */}
        {/* <Ex06 /> */}
        {/* <Ex07 /> */}
        {/* <Ex01 arr={[1,2,3,4,5]} /> */}
        {/* <Ex02 /> */}
        {/* <NameForm /> */}
        {/* <SelectForm /> */}
        {/* <Prac01 /> */}
        {/* <MultiSelectForm /> */}
        {/* <CheckBoxesForm /> */}
        {/* <SignUpForm /> */}
        {/* <Calc /> */}
        {/* <Calc2 /> */}
        {/* <Prac01 /> */}
        {/* <Calc2 /> */}
        <Calc3 />
        {/* <Calc4 /> */}
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
