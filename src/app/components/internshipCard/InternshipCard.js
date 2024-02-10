import Image from "next/image"
import { CiLocationOn } from "react-icons/ci";
import { IoMdTime } from "react-icons/io";
import Button from "../button/ButtonInt";
import { int_List } from "../../../../public/int_List";
import './card.scss';

export default function InternshipCard({title, urlImg}) {
    return <>


    {/* <div className="all_internships">
    {
        int_List.map((e)=>{
            console.log("Name : ", e.internshipName);
            console.log("id : ", e.id);

            return(
            <div key={e.id} className="intCard">
            <div className="intImage">
                <Image
                    src={e.imageUrl}
                    alt="Internee meeting"
                    width={370}
                    height={230}
                    quality={100}
                    style={{ position: 'relative', objectFit: 'cover' }}
                />
            </div>

            <h1>{e.internshipName}</h1>

            <div className="intIcons">
            <p><CiLocationOn /> <span>Remote</span></p>
            <p> <IoMdTime /> <span>1 Month</span></p>
            </div>
            <div className="btn_apply_div">

            <Button color={'white'} padding={'15px 18px'} bgColor={'#8C52FE'} border={'0'} text={"Apply Now"} fontSize={'12px'} />
            </div>
        </div>)
        })
    }
        

    </div> */}

   
            <div  className="intCard">
            <div className="intImage">
                <Image
                    src={urlImg}
                    alt="Internee meeting"
                    width={400}
                    height={250}
                    quality={100}
                    style={{ position: 'relative', objectFit: 'cover' }}
                />
            </div>

            <div className="card_details">
            <h1>{title}</h1>

            <div className="intIcons">
            <p><CiLocationOn /> <span>Remote</span></p>
            <p> <IoMdTime /> <span>1 Month</span></p>
            </div>
            <div className="btn_apply_div">

            <Button color={'white'} padding={'17px 22px'} bgColor={'#8C52FE'} border={'0'} text={"Apply Now"} fontSize={'12px'} />
            </div>

            </div>
        </div>
        


    </>
}
