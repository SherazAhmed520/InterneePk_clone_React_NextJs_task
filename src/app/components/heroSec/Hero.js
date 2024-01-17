import Button from "@/app/components/button/ButtonInt";
import Image from "next/image";
import './hero.scss'

export default function Hero() {
  return (
   <>
      <div className="hero_sec">

<div className="hero_image">
  <Image
    src="/hero1.jpg"
    alt="Internee meeting"
    width={0}
    height={0}
    layout="responsive"
    objectFit="contain"
    style={{ position: 'relative' }}
  />
  <div
    style={{
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundColor: 'rgba(0, 100, 0, 0.5)', // Adjust the color and opacity as needed
    }}
  />
</div>

<div className="hero_desc">
  <span>Are you looking for your dream Internship ?</span>
  <h1>Join <br />
    Internee.pk now..!</h1>
   <p>Pakistan's Virtual Internship Platform Powered By <span>TechvioChats</span></p>
  <Button color={'white'} padding={'12px 20px'} bgColor={'transparent'} border={'2px solid white'} text={"Browse Internships"} fontSize={'14px'} />
</div>

</div>

   </>
  )
}
