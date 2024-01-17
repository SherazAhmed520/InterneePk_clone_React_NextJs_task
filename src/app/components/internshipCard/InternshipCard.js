import Image from "next/image"
import { CiLocationOn } from "react-icons/ci";
import { IoMdTime } from "react-icons/io";
import Button from "../button/ButtonInt";
import './card.scss';

export default function InternshipCard() {
    return <>

        <div className="intCard">
            <div className="intImage">
                <Image
                    src="/certified.jpg"
                    alt="Internee meeting"
                    width={370}
                    height={230}
                    quality={100}
                    style={{ position: 'relative', objectFit: 'cover' }}
                />
            </div>

            <h1>Data Analyst</h1>

            <div className="intIcons">
            <CiLocationOn />
            <p>Remote</p>
            <IoMdTime />
            <p>1 Month</p>
            </div>

            <Button color={'white'} padding={'12px'} bgColor={'#8C52FE'} border={'0'} text={"Apply Now"} fontSize={'14px'} />
        </div>
    </>
}
