import React, { useState } from "react";

function Prac01(props) {
    const [fruit_name, setFruit_name] = useState('mango');
    
    const handleChange = (e) => {
        setFruit_name(e.target.value);
    }

    const handleSubmit = (e) => {
        alert('입력한 이름 : ' + fruit_name);
        e.preventDefault();
    }

    return(
        <form onSubmit={handleSubmit}>
            <label>
                과일을 선택하세요 (하나) :
                <select value={fruit_name} onChange={handleChange}>
                    <option value="apple" >사과</option>
                    <option value="grape" >포도</option>
                    <option value="banana" >바나나</option>
                    <option value="mango" >망고</option>
                    <option value="oriental_melon" >참외</option>
                    <option value="strawberry" >딸기</option>
                    <option value="kiwi" >키위</option>
                    <option value="orange" >오렌지</option>
                    <option value="hanrabong" >한라봉</option>
                    <option value="레드향" >레드향</option>
                    <option value="천혜향" >천혜향</option>
                    <option value="mandarin" >귤</option>
                    <option value="watermelon" >수박</option>
                    <option value="melon" >메론</option>
                </select> 
            </label>
            <hr />
            <br />
            <button type="submit" >보내기</button>
        </form>
    )
}
export default Prac01;