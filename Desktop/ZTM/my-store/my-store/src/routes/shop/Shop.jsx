import {Routes,Route} from 'react-router-dom'
import './shop.scss'
import CategoryComponent from '../../routes/category/CategoryComponent'
import CategoriesPreview from '../categoriesPreview/CategoriesPreview';

const Shop = () => {
  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=':category' element={<CategoryComponent />} />
    </Routes>
  );
};

export default Shop