import {Navigationbar} from './navbar';
import {Sidebar} from './sidebar';
import {sanitationProducts} from './products';
import {Footer}from './footer';
import {Card,Row,Col} from 'react-bootstrap';
import {FaPhoneAlt,FaAddressCard,FaUserAlt,FaRupeeSign} from 'react-icons/fa';

function MainSanitationProducts() {
   
    return(
        <div className='sanitation-block'>
        <Navigationbar />
        <Sidebar/>
        <div className="sanitationproducts">
        <Row xs={1} md={2} className="g-4">
        {sanitationProducts.map((seller)=>{
            return(
                <Col className='col-12  col-lg-4' key={seller.id}>
                    <Card className="mb-2">
                        <Card.Img variant="top" src={seller.image} />
                        <hr/>
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
export default MainSanitationProducts;