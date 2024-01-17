import Image from 'next/image'
import Navbar from './components/navbar/Navbar'
import Button from './components/button/ButtonInt'

export default function Home() {
  return <>
    <Navbar/>
    <Button color={'white'} size={'15px 30px'} bgColor={'purple'} text={"Internee Portal"} />
  </>
}
