// HomeItems.jsx
import { Container, Row, Col } from 'react-bootstrap';
import "./HomeItems.scss"

const HomeItems = () => {
  return (
    <Container className='homeItems my-4 d-flex flex-column justify-content-around align-items-center border bg-info'>
      <Row className='mt-4 fs-2 fw-bold'>-----   熱賣商品    -----</Row>
      <Row className='my-3 d-flex justify-content-around'>
        <Col className='items border bg-warning me-4 d-flex justify-content-center align-items-center' style={{width: "250px", height: "250px"}}>EachItems</Col>
        <Col className='items border bg-warning me-4 d-flex justify-content-center align-items-center' style={{width: "250px", height: "250px"}}>EachItems</Col>
        <Col className='items border bg-warning me-4 d-flex justify-content-center align-items-center' style={{width: "250px", height: "250px"}}>EachItems</Col>
        <Col className='items border bg-warning me-4 d-flex justify-content-center align-items-center' style={{width: "250px", height: "250px"}}>EachItems</Col>
      </Row>
      <Row className='my-3 d-flmy-2ex justify-content-around'>
        <Col className='items border bg-warning me-4 d-flex justify-content-center align-items-center' style={{width: "250px", height: "250px"}}>EachItems</Col>
        <Col className='items border bg-warning me-4 d-flex justify-content-center align-items-center' style={{width: "250px", height: "250px"}}>EachItems</Col>
        <Col className='items border bg-warning me-4 d-flex justify-content-center align-items-center' style={{width: "250px", height: "250px"}}>EachItems</Col>
        <Col className='items border bg-warning me-4 d-flex justify-content-center align-items-center' style={{width: "250px", height: "250px"}}>EachItems</Col>
      </Row>
      <Row className='my-3 d-flex justify-content-around'>
        <Col className='items border bg-warning me-4 d-flex justify-content-center align-items-center' style={{width: "250px", height: "250px"}}>EachItems</Col>
        <Col className='items border bg-warning me-4 d-flex justify-content-center align-items-center' style={{width: "250px", height: "250px"}}>EachItems</Col>
        <Col className='items border bg-warning me-4 d-flex justify-content-center align-items-center' style={{width: "250px", height: "250px"}}>EachItems</Col>
        <Col className='items border bg-warning me-4 d-flex justify-content-center align-items-center' style={{width: "250px", height: "250px"}}>EachItems</Col>
      </Row>
      <Row className='my-3 d-flex justify-content-around'>
        <Col className='items border bg-warning me-4 d-flex justify-content-center align-items-center' style={{width: "250px", height: "250px"}}>EachItems</Col>
        <Col className='items border bg-warning me-4 d-flex justify-content-center align-items-center' style={{width: "250px", height: "250px"}}>EachItems</Col>
        <Col className='items border bg-warning me-4 d-flex justify-content-center align-items-center' style={{width: "250px", height: "250px"}}>EachItems</Col>
        <Col className='items border bg-warning me-4 d-flex justify-content-center align-items-center' style={{width: "250px", height: "250px"}}>EachItems</Col>
      </Row>
    </Container>
  )
};

export default HomeItems;