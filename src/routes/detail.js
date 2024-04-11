import { useEffect, useState } from "react";
import {useParams} from "react-router-dom"
import styled from 'styled-components';

let Box = styled.div `
  background : yellow
`
  


function Detail(props) {
let [count, setCount] = useState(0);
let [num, setNum] = useState(0);
let {id} = useParams();
let 찾은상품 = props.shoes.find((x) => x.id == id); 

useEffect(()=>{
  if (isNaN(num) == true){
    alert('그러지마세요')
  }
}, [num])


return (
      <div className="container">
       <div><input onChange={ (e) => {setNum(e.target.value)}}/></div>
       
       
        <div className="row">
          <div className="col-md-6">
            <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="100%" />
          </div>
      <div className="col-md-6">
        <h4 className="pt-5">{찾은상품.title}</h4>
        <p>{찾은상품.price}</p>
        <p>{찾은상품.content}</p>
        <button className="btn btn-danger">주문하기</button> 
      </div>
    </div>
  </div>
    )
  }

  export default Detail;