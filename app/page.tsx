import { UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import LeftNavigation from './components/LeftNavigation'

export default function Home() {
  return (
    <main className="flex min-h-screen ">
      {/* <UserButton afterSignOutUrl="/"/> */}
      <div >
       
      </div>
      <div className='flex-grow mt-2 mb-0 rounded-t-md bg-stone-500 '>
        <h1> DashBoard</h1>
      </div>
     
    </main>
  )
}
