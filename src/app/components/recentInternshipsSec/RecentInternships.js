import Image from "next/image"
import './recentInternship.scss'
import { int_List } from "../../../../public/int_List"
import InternshipCard from "../internshipCard/InternshipCard"
import Button from "../button/ButtonInt"

export default function RecentInternships() {
  return <>

    <div className="title">
      <h1>Recent Internships</h1>
      <p> <span>Internships came after every two months</span> Grab your internships on your <br />
        favourite domain to boost up yourself in the field of Computer technology</p>

    </div>

    <div className="all_internships">
      {
        int_List.map((e) => {

          console.log("Name : ", e.internshipName);

          return (

            <InternshipCard key={e.id} title={e.internshipName} urlImg={e.imageUrl} />
          )
        })
      }
    </div>

    <div className="btn_browse">

      <Button color={'white'} padding={'22px 50px'} bgColor={'#8C52FE'} border={'0'}  text={"Browse Internship"} fontSize={'15px'} />
    </div>


  </>
}
