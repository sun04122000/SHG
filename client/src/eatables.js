import {Navigationbar} from './navbar';
import {Sidebar} from './sidebar';
import {eatables} from './products';
import {Footer}from './footer';
import {Card,Row,Col} from 'react-bootstrap'
import {FaPhoneAlt,FaAddressCard,FaUserAlt,FaRupeeSign} from 'react-icons/fa';
import { icons } from 'react-icons/lib';

function MainEatables() {
   
    return(
        <div className='eatables-block'>
        <Navigationbar />
        <Sidebar/>
        <h1 className="quote">Wholesome goodness is here</h1>
        <div className="eatables">
        <Row xs={1} md={2} className="g-4">
        {eatables.map((seller)=>{
            return(
                <Col className='col-12  col-lg-4' key={seller.id}>
                    <Card className="mb-2">
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
export default MainEatables;