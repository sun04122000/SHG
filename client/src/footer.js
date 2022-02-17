import {Card,CardGroup,Container,Row,Col} from 'react-bootstrap'
export const Footer = () =>{
   
    return(
    <footer className='footer'>
        <h4 className='shop-bottom-quote'>YOUR DREAMS ARE IN YOUR HANDS NOW BRING THEM TO LIFE</h4>
        <Container>
        <CardGroup className='footer-cards-group'>
        <Card className='footer-cards'>
            <Card.Body className='footer-cards-body'>
            <Card.Title className='footer-title'>IMPORTANT LINKS</Card.Title>
            <Card.Text className='footer-text'>
                This is a wider<br/> 
                eau de <br/> 
                eau de parfum<br/> 
                eau de <br/> 
                This is a wider<br/> 
                 
            </Card.Text>
            <Card.Title className='footer-title'><br/>CONTACT US</Card.Title>
            <Card.Text className='footer-text'>
            This is a wider<br/> 
                eau de <br/> 
                eau de parfum<br/> 
                eau de <br/> 
                eau de 
            </Card.Text>
            </Card.Body>
        </Card>
        <Card className='footer-cards'>
            <Card.Body className='footer-cards-body'>
            <Card.Title className='footer-title'>MAIN</Card.Title>
            <Card.Text className='footer-text'>
                This card has sup<br/>
                This is a wider<br/> 
                eau de <br/> 
                eau de parfum<br/> 
                eau de <br/> 
                This is a wider<br/> 
                eau de <br/> 
                eau de parfum<br/> 
                eau de <br/> 
                eau de <br/>
                eau de 
                content.{' '}
            </Card.Text>
            </Card.Body>
        </Card>
        <Card className='footer-cards'>
            <Card.Body className='footer-cards-body'>
            <Card.Title className='footer-title'>COLLABORATIONS</Card.Title>
            <Card.Text className='footer-text'>
                This is a wider<br/>
                This is a wider<br/> 
                eau de <br/> 
                eau de parfum <br/><br/>
            </Card.Text>
            <Card.Img variant="top" src="images/shg-connect-logo.png" />
            </Card.Body>
            {/*<Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>*/}
        </Card>
            {/*<Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>*/}
       
        </CardGroup>
        </Container>
       <p className='footerstyl'>Website developed by Sunidhi Jindal<br/>Copyrights @2021</p>
    </footer>
    );
}