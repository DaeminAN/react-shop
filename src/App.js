import logo from './logo.svg';
import './App.css';
import {Button, Navbar,Container, Nav, Row, Col} from 'react-bootstrap';
import { useState } from 'react';
import data from './data.js';
import {Routes, Route, Link, useNavigate, Outlet} from 'react-router-dom'
import Detail from './routes/detail.js';
import axios from 'axios'

function App() {
  let [shoes,setShoes] = useState(data)
  let navigate = useNavigate();
  return (
    <div className="App">

      


      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/">10유경의시발가게</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={() => { navigate('/')}}>Home</Nav.Link>
            <Nav.Link onClick={() => { navigate('./detail')}}>Detail</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      
      
      <Routes>
        <Route path ="/" element = {<div>
          <div className='main-bg'></div>
      <div className="container">
        <div className="row">
        {
          shoes.map((a, i) => {
            return (
              <Product shoes = {shoes[i]} i= {i} navigate = {navigate} ></Product>
            )
          })
        }
        </div>
        
      </div> 
      <button onClick={() => {
        axios.get('https://codingapple1.github.io/shop/data2.json')
        .then((result) => {
          let copy = [...shoes].concat(...result.data)
          setShoes(copy)})
        .catch(() => {console.log('실패')})
      }}>버튼</button>

        </div>}/>
        
        
        <Route path ="/detail/:id/" element ={<Detail shoes = {shoes}/>} />
        <Route path ="*" element ={<div>없는페이지입니다</div>} />
        <Route path ="/about" element ={<About/>}>
          <Route path ="member" element ={<div>멤버</div>} />
          <Route path ="location" element ={<div>위치정보</div>} />
        </Route>
        <Route path = "/event" element ={<Event/>}>
          <Route path = "one" element ={<div><h4>첫 주문시 양배추즙 서비스</h4></div>}/>
          <Route path = "two" element ={<div><h4>생일 기념 쿠폰 받기</h4></div>}/>
        </Route>
      </Routes>


    </div>
    
  );
}
function Event() {
  return(
    <div>
      <h2>오늘의 이벤트</h2>
      <Outlet></Outlet>
    </div>
  )
}
function About() {
  return (
    <div>
      <h4>회사정보</h4>
      <Outlet></Outlet>
    </div>
  )
}
function Product(props) {
  return (
    <div className="col-md-4">
      <img onClick={() => { props.navigate('/detail/' + (props.i))}} src={'https://codingapple1.github.io/shop/shoes'+ (props.i+1) +'.jpg' } width="80%" ></img>
      <h4>{props.shoes.title}</h4>
      <p>{props.shoes.price}</p>
    </div>

  )
}


export default App;
