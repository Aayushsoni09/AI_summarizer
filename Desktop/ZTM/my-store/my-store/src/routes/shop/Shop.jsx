import {Routes,Route} from 'react-router-dom'
import './shop.scss'
import Category from '../../components/category/Category'
import CategoriesPreview from '../categoriesPreview/CategoriesPreview';

const Shop = () => {
  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      {/* <Route path=':category' element={<Category />} /> */}
    </Routes>
  );
};

export default Shop