import {Navigationbar} from './navbar';
import {Sidebar} from './sidebar';
import {Footer}from './footer';
import ControlledCarousel from './shop-top-carousel';
import ShopRecents from './shop-recents';
import ShopCategories from './shop-categories';
import ShopTestimonials from './shop-testimonials';
function Shop() {
   
    return(
        <>
        <Navigationbar />
        <Sidebar/>
        <div className="shop">
        <ControlledCarousel />
        <div >
            <p className='recents'>Let's Celebrate<br/><p className='our-recents'>OUR-RECENTS</p></p>
            <ShopRecents/>
            <p className='categories'>CATEGORIES</p>
            <ShopCategories/>
            <ShopTestimonials/>
        </div>
        </div>
        <Footer/>
        </>
    );
}
export default Shop;