import React from 'react'
import KorcomptenzImage from '../korcomptenz-image'
const buildData = {
  title: 'Build a connected manufacturing ecosystem with our expertise.',
  description:"We help manufacturers overcome challenges across limited supply chain visibility, disconnected processes, and inefficient forecasting by creating intelligent, connected ecosystems that streamline operations and enhance competitiveness. Leveraging deep expertise in Microsoft Dynamics 365, SAP, and AI-driven solutions, we unify people, processes, systems, and data to deliver better planning, faster decision-making, stronger supply chains, and seamless factory-to-customer workflows.",
  image:"/assets/services/buildconnect.png",
  imagemobile:"/assets/services/buildconnectmobile.png",
  alt:"Build a Connect Image"
}
const BuildConnect = () => {
  return (
    <div className='container-md my-10 grid grid-cols-1 lg:grid-cols-2 '>
      <div className='px-5 space-y-3'>
        <h1 className='text-6xl md:text-9xl font-bold text-foreground leading-10 lg:leading-15'>{buildData.title}</h1>
        <p className='text-md md:text-2xl text-foreground leading-7  '>{buildData.description}</p>
      </div>
      <div className='p-5 hidden lg:block'>
        <KorcomptenzImage
          src={buildData.image}
          alt={buildData.alt}
          width={500}
          height={500}
          className="w-full h-auto object-cover"
        />
      </div>
       <div className='p-5 lg:hidden '>
        <KorcomptenzImage
          src={buildData.imagemobile}
          alt={buildData.alt}
          width={500}
          height={500}
          className="w-full h-auto object-cover"
        />
      </div>
    </div>
  )
}

export default BuildConnect