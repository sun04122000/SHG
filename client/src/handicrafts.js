import {Navigationbar} from './navbar';
import {Sidebar} from './sidebar';
import {handicrafts} from './products'
import {Footer}from './footer';
import {FaPhoneAlt,FaAddressCard,FaUserAlt,FaRupeeSign} from 'react-icons/fa';
import {Card,Row,Col} from 'react-bootstrap';

function MainHandicrafts() {
   
    return(
        <div className='handicrafts-block'>
        <Navigationbar />
        <Sidebar/>
        <div className="handicrafts">
        <Row xs={3} sm={3} md={3} className="g-4 ">
        {handicrafts.map((seller)=>{
            return(
                <Col className='col-12  col-lg-4' key={seller.id} >
                    <Card className="mb-2 handicrafts-card">
                        <Card.Img variant="top" src={seller.image} />
                        <Card.Body>
                        <Card.Title>{seller.product}</Card.Title>
                        <Card.Text>
                            <FaRupeeSign/> {seller.price}<br/>
                            <FaUserAlt/> {seller.SHG}<br/>
                            <FaPhoneAlt/> {seller.ContactNo}<br/>
                            <FaAddressCard/> {seller.Address}<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{seller.village}<br/>
                        </Card.Text>
                        </Card.Body>
                    </Card>
                    </Col>
            );
        })}
        </Row>
        </div>
        <Footer/>
        </div>
    );
}
export default MainHandicrafts;