import {Navigationbar} from './navbar';
import {Sidebar} from './sidebar';
import { FaMailBulk,FaPhoneAlt,FaHome,FaIdCard } from "react-icons/fa";
import {Footer}from './footer';
function Contactus(){
   
    return(
        <>
        <Navigationbar />
        <Sidebar/>
        <div className="contactus">
        <header className='contacthead'>
            <h1>We'd Love to hear from you!</h1>
        </header>
        <main className='contactinfo'>
            {/*<section className='contactimg'><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvSs5fEPkT1221rkT4Pmcv9GwZIZOh6n-npA&usqp=CAU" width={"200px"} height={"190px"} alt="contactimg"/></section>*/}
            <section className='section1'>
                <p><FaIdCard/>&nbsp;Unnat Bharat Abhiyan, IIT Roorkee</p>
            </section>
            <section className='section2'><p><FaMailBulk/>&nbsp;Email: uba@iitr.ac.in</p></section>
            <section className='section3'><p><FaPhoneAlt/>&nbsp;Contact: 8505008927</p></section>
            <section className='section4'><p><FaHome/>&nbsp;Address: Unnat Bharat Abhiyan, IIT Roorkee, Uttarakhand</p></section>
        </main>
        </div>
        <Footer/>
        </>
    );
}
export default Contactus;