import Image from 'next/image'
import './Navbar.scss'
import Button from '../button/ButtonInt'


function Navbar() {
  return (
    <>
    
    <div className="nav-main">
        <Image
        src="/logo.png"
        alt="Vercel Logo"
        width={200}
        height={50}
        priority
        style={{cursor: 'pointer'}}
    />

    <ul>
        <li>Home</li>
        <li>About</li>
        <li>Internships</li>
        <li>Contact</li>
        <li>LMS<p>New</p></li>
        <li>Job Portal<p>Coming Soon</p></li>
    </ul>

    <Button color={'white'} padding={'12px 20px'} bgColor={'#8C52FE'} border={'0'} text={"Internee Portal"} fontSize={'17px'} />
    
    </div>
    
    
    </>
  )
}

export default Navbar
