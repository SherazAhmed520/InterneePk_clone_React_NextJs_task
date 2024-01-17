import Image from "next/image"
import "./launching.scss"

export default function Launching() {
    return <>
        <div className="launching_tech">

            <div className="tech_users">
                <h1>Launching tech careers with internships, exposure, and networking.</h1>

                <p>Internee.pk kickstart student's tech careers with first internships,
                    providing industry exposure, practical skills, and networking
                    opportunities, paving the way for their success in the tech industry.</p>
                <div className="t_users">

                    <div className="users_tech">
                        <h1>5000+</h1>
                        <p>Registered users</p>
                    </div>
                    <div className="users_tech">
                        <h1>35+</h1>
                        <p>Other Internships</p>
                    </div>

                </div>


            </div>

            <div className="tech_certification">
                <Image
                    src="/certified.jpg"
                    alt="Internee meeting"
                    width={630}
                    height={630}
                    quality={100}
                    style={{ position: 'relative', objectFit: 'cover' }}
                />
            </div>

        </div>
    </>
}
