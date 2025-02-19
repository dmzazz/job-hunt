import Image from 'next/image';
import React, { FC } from 'react'

interface ClientsProps {
  
}

const clients = [
    '/images/jobox.png',
    '/images/dsign.png',
    '/images/wave.png',
    '/images/twins.png',
    '/images/bubles.png',
]

const Clients: FC<ClientsProps> = ({  }) => {
  return (
    <div className='relative mt-6 lg:mt-0 z-10'>
     <div className='text-lg text-muted-foreground'>
        Companies we helped grow
     </div>
     <div className="mt-8 grid grid-cols-2 gap-4 lg:gap-0 lg:flex lg:flex-row justify-between">
        {clients.map((item: string,i: number)=> (
            <Image key={i} src={item} alt={item} width={139} height={35} className='my-2 lg:my-0'/>
        ))}
     </div>
    </div>
  )
}

export default Clients;