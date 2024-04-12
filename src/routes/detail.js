import { useEffect, useState } from "react";
import {useParams} from "react-router-dom"
import styled from 'styled-components';
import Nav from 'react-bootstrap/Nav';
import '../App.css';
let Box = styled.div `
  background : yellow
`
  


function Detail(props) {


  let [count, setCount] = useState(0);
let [num, setNum] = useState(0);
let {id} = useParams();
let 찾은상품 = props.shoes.find((x) => x.id == id); 
let [tab, setTab] = useState(0);



useEffect(()=>{
  if (isNaN(num) == true){
    alert('그러지마세요')
  }
}, [num])


return (
      <div className="container">       
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
    <Nav fill variant="tabs" defaultActiveKey="link0">
       <Nav.Item>
        <Nav.Link  eventKey="link0">버튼0</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link onClick={() => {setTab(1)}} eventKey="link1">버튼1</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link onClick={() => {setTab(2)}} eventKey="link2">버튼2</Nav.Link>
      </Nav.Item>
    </Nav>
    <TabContent tab = {tab} />
  </div>
    )
  }
  function TabContent({tab}) {
    return (
      <div className="start end">
        { [<div>내용0</div>, <div>내용1</div>, <div>내용2</div>][tab] }
      </div>
    )
  
  }

  export default Detail;