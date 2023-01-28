
import {Card,CardGroup} from 'react-bootstrap'

function ShopRecents(){
    return(
<CardGroup className='shop-recents'>
  <Card>
    <Card.Img variant="top" src="images/Shop-page-images/recents-1.png" />
    <Card.Body>
      <Card.Title className='shop-recents-title'>EATABLES</Card.Title>
      <Card.Text className='shop-recents-text'>
        This is a wider 
      </Card.Text>
    </Card.Body>
  </Card>
  <Card>
    <Card.Img variant="top" src="images/Shop-page-images/recents-2.png" />
    <Card.Body>
      <Card.Title className='shop-recents-title'>INCENSE</Card.Title>
      <Card.Text className='shop-recents-text'>
        This card has sup
        content.{' '}
      </Card.Text>
    </Card.Body>
  </Card>
  <Card>
    <Card.Img variant="top" src="images/Shop-page-images/recents-3.png" />
    <Card.Body>
      <Card.Title className='shop-recents-title'>JUTE</Card.Title>
      <Card.Text className='shop-recents-text'>
        This is a wider
      </Card.Text>
    </Card.Body>
    {/*<Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>*/}
  </Card>
</CardGroup>
    );
}

export default ShopRecents