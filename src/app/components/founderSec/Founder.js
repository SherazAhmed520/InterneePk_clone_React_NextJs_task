import Image from "next/image"
import Button from "../button/ButtonInt"
import "./founder.scss"

export default function Founder() {
    return <>

        <div className="fd_main">
        <div className="founder_main">
            <div className="founder_container">
                <Image
                    src="/founder.jpg"
                    alt="Internee meeting"
                    width={300}
                    height={500}
                    objectFit="contain"
                    style={{ position: 'relative' }}
                />
            </div>

            <div className="company_desc">
                <h1>Welcome to Internee.pk</h1>
                <p>
                    Our internship program is designed to give students the opportunity to work on
                    meaningful projects and tasks, while also receiving mentorship and guidance from
                    experienced professionals in the field. Our goal is to help interns develop the
                    skills and knowledge they need to succeed in their careers, while also building
                    a strong network of talented individuals who may become valuable members of our
                    team in the future. If you're looking for a challenging and rewarding internship
                    experience, we invite you to explore our program and <span>Apply Today</span>
                </p>

                <div className="btn_explore">
                <Button  color={'white'} padding={'12px 17px'} bgColor={'transparent'} border={'2px solid white'} text={"Get to know us"} fontSize={'14px'} />

                <p>Explore Internships</p>
                </div>
            </div>
            <div className="Cmo_container">
                 <Image
                    src="/rayyan.jpg"
                    alt="Internee meeting"
                    width={300}
                    height={500}
                    objectFit="contain"
                    style={{ position: 'relative' }}
                />
            </div>
        </div>

        </div>
    </>
}
