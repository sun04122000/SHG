import {Card,CardGroup,Container, Row,Col} from 'react-bootstrap'

function ShopCategories(){
    return(
        <Container>
            <Row className='categories-row1'>
            <CardGroup className='shop-categories'>
            <Card>
                <Card.Img variant="top" src="images/Shop-page-images/categories-1.png" />
            </Card>
            <Card>
                <Card.Img variant="top" src="images/Shop-page-images/categories-2.png" />
            </Card>
            <Card>
                <Card.Img variant="top" src="images/Shop-page-images/categories-3.png" />
                {/*<Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>*/}
            </Card>
            </CardGroup>
            </Row>
            <Row className='categories-row2'>
            <CardGroup className='shop-categories'>
            <Card>
                <Card.Img variant="top" src="images/Shop-page-images/categories-4.png" />
            </Card>
            <Card>
                <Card.Img variant="top" src="images/Shop-page-images/categories-5.png" />
            </Card>
            </CardGroup>
            </Row>
</Container>
    );
}

export default ShopCategories