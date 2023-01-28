import {Navigationbar} from './navbar';
import {Sidebar} from './sidebar';
import {Footer}from './footer';
function Collaborate(){
   
    return(
        <>
        <Navigationbar />
        <Sidebar/>
        <div className="collaborate">
        <header className='collabhead'>
        <h1>Collaborate With Us!</h1>
        </header>
        <main className='collabmain'>
        <p>Here is the procedure to collaborate with the team if you wish to sell your products on our website</p>
        <p>Condition: Person must be a part of a registered shg group through which you would be producing the goods to sell on this website. </p>
        <p>If you want to registered as a new SHG following link may help.</p>
        </main>
        </div>
        <Footer/>
        </>
    );
}
export default Collaborate;