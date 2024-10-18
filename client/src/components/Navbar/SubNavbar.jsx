import './SubNavbar.scss';
import { Container, Row, Col } from 'react-bootstrap';

const SubNavbar = () => {
  return (
    <div className='subNavbar'>
        <Container className='subNavbarContainer'>
            <Row className='categorySort'>
                <Col className='col-1 categoryMenu'>
                    <div>
                        <span className='categoryName'>麵包</span>
                    </div>
                </Col>
                <Col className='col-1 categoryMenu'>
                    <div>
                        <span className='categoryName'>司康</span>
                    </div>
                </Col>
                <Col className='col-1 categoryMenu'>
                    <div>
                        <span className='categoryName'>餅乾</span>
                    </div>
                </Col>
                <Col className='col-1 categoryMenu'>
                    <div>
                        <span className='categoryName'>奶酪</span>
                    </div>
                </Col>
                <Col className='col-1 categoryMenu'>
                    <div>
                        <span className='categoryName'>關於我們</span>
                    </div>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default SubNavbar;