import { BsGlobe } from "react-icons/bs";
import { category_List } from "../../../../public/category_List";
import './category.scss'

export default function Categories() {
  return <>
    <div className="all_categories">
      <h1>Browse By Categories</h1>

      <div className="categories_list">
{
  category_List.map((val)=>{

    console.log("name :", val.categoryTitle);
    return<>
        <div className="category_circle">
          {val.categoryIcon}
          <p>{val.categoryTitle}</p>
        </div>
    </>
  })

}
        
      </div>
    </div>
  </>
}
