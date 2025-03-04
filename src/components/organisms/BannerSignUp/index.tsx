import { Button } from '@/components/ui/button';
import Image from 'next/image';
import React, { FC } from 'react'

interface BannerSignUpProps {
  
}

const BannerSignUp: FC<BannerSignUpProps> = ({  }) => {
  return (
    <div className='mt-32 mb-10 bg-primary text-primary-foreground px-16 pt-16 flex flex-row justify-between items-start'>
     <div>
        <div className="text-5xl font-semibold">
            Start posting <br /> jobs today
        </div>
        <div className="my-6">Start posting job for only $10</div>
        <Button size='lg' variant='secondary' className='mb-6 xl:mb-0 hover:text-primary'>
            Sign Up for free
        </Button>
     </div>
     <div>
        <Image src='/images/dashboard.png' alt='/images/dashboard.png' width={500} height={300}/>
     </div>
    </div>
  )
}

export default BannerSignUp;