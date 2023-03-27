import Image from 'next/image'
import qrr from "../public/img/qr.png"
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main >
      <section className='grid shadow-xl p-3 bg-white rounded-3xl' >
        <Image height={300} width={300} className='rounded-3xl' src={qrr} alt="" />
        <div className='w-[18.75rem]  mt-5 px-5'>
          <h1 className={`${inter.className} text-xl text-center font-bold`}>Improve your front-end skill by building projects</h1>
          <p className='text-center font-semibold opacity-40 my-5'>Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>
        </div>
      </section>

    </main>
  )
}
