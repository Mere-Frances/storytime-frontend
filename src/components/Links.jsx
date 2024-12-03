import { Routes, Route} from 'react-router-dom';

import Home from '../pages/Home';
import OurWork from '../pages/OurWork';
import WorkSinglePage from '../pages/WorkSinglePage';

import Resources from '../pages/Resources';
import Resource from './Resource';

import Shop from '../pages/Shop';
import Donate from '../pages/Donate';
import Contact from '../pages/Contact';

import SingleProduct from '../pages/SingleProduct';

import Cart from './Cart';
import Login from '../pages/Login';
import Checkout from '../pages/Checkout';

const Links = () => {
    return (
      <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/ourwork" element={<OurWork />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/login" element={<Login />} />
          <Route path="/shop/singlepage" element={<SingleProduct />} />
          <Route path="/resources/:id" element={<Resource />} />
          <Route path="/work/:pageId" element={<WorkSinglePage />} />
      </Routes>
    )
}

export default Links