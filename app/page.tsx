import Image from 'next/image'
import DarkModeToggle from "./components/DarkModeToggle/DarkModeToggle";


export default function Home() {
  return (
    <main className='main'>
      <DarkModeToggle />
      <h1>Dark Mode</h1>
    </main>
  )
}
