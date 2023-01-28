import {Navigationbar} from './navbar';
import {Sidebar} from './sidebar';
import { sellers } from './sellers';
import {Footer}from './footer';
import {FaPhoneAlt,FaAddressCard,FaUserAlt,FaRupeeSign} from 'react-icons/fa';
import {Card,Row,Col} from 'react-bootstrap'

function MainSellers(){
   
    return(
        <div className='current-sellers-block'>
        <Navigationbar />
        <Sidebar/>
        <div className="sellertext">
        <Row xs={3} sm={3} md={3} className="g-4 ">
        {sellers.map((seller)=>{
            return(
                <Col className='col-12  col-lg-4' key={seller.id} >
                    <Card className="mb-2 sellers-card">
                        <Card.Img variant="top" src={seller.image} />
                        <Card.Body>
                        <Card.Title>{seller.Name}</Card.Title>
                        <Card.Text>
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
export default MainSellers;