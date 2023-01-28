import {Navigationbar} from './navbar';
import {Sidebar} from './sidebar';
import {Footer}from './footer';
function Aboutus(){
   
    return(
        <>
        <Navigationbar />
        <Sidebar/>
        <div className="aboutus">
        <header className='abouthead'>
            <h1>Welcome to SHG Connect</h1>
        </header>
        <main className='aboutinfo'>
            <section className='section1'>
                <p>The team Unnat Bharat Abhiyan identified that there are numerous SHG women who are willing to work and have relevant skills but the main issue
                faced the the village women is accessibility to market. Apart from this the villagers unaware of the products being poduced by them need to travel long distance to purchase different goods even fr their basic needs. 
                Especially in case of emergency it becomes really difficult for them to get those goods to it is infeasible to travel long for small everyday needs.</p>
            </section>
            <section className='section2'><p>To help sort this issue and bridge the gap between the village consumers and SHG women sellers team developed this easy to use website.</p></section>
            <section className='section3'><p>The products have been categorized and displayed on the website. The consumer can directly contact the seller and access the seller address and easily aval those proucts in very affordable prices.The interested women can easily contact the existing SHGs and be a part of them if they want to be.</p></section>
            <section className='section4'><p>Hope you would enjoy the website!</p></section>
        </main>
        </div>
        <Footer/>
        </>
    );
}
export default Aboutus;