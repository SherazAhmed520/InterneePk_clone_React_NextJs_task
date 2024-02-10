import { BsGlobe } from "react-icons/bs";
import './category.scss'

export default function Categories() {
  return <>
    <div className="all_categories">
      <h1>Browse By Categories</h1>

      <div className="categories_list">
        <div className="category_circle">
          <BsGlobe />
          <p>Web Development</p>
        </div>

        <div className="category_circle">
          <BsGlobe />
          <p>Web Development</p>
        </div>
        <div className="category_circle">
          <BsGlobe />
          <p>Web Development</p>
        </div>
        <div className="category_circle">
          <BsGlobe />
          <p>Web Development</p>
        </div>
        <div className="category_circle">
          <BsGlobe />
          <p>Web Development</p>
        </div>


      </div>
    </div>
  </>
}
