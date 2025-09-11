import React from 'react'
import StickyTitleCard from './_utils/sticky-title-card';

const salesforceServices: GlobalFieldType[] = [
  {
    title: "Salesforce Sales Cloud",
    description: "Boost revenue with our world-class CRM designed to help your sales teams close deals faster.",
    image: {
      url: '/assets/temp-img.png',
      height: 100,
      width: 100,
      name: "temp-img",
      id: "temp-img",
      createdAt: "temp-img",
      updatedAt: "temp-img",
      publishedAt: "temp-img",
      size: 100,
      ext: "png",
      mime: "image/png",
    }
  },
  {
    title: "Salesforce Service Cloud",
    description: "Deliver exceptional customer service experiences with powerful case management and support tools.",
    image: {
      url: '/assets/temp-img.png',
      height: 100,
      width: 100,
      name: "temp-img",
      id: "temp-img",
      createdAt: "temp-img",
      updatedAt: "temp-img",
      publishedAt: "temp-img",
      size: 100,
      ext: "png",
      mime: "image/png",
    }
  },
  {
    title: "Salesforce Marketing Cloud",
    description: "Execute one-to-one customer journeys with data-first marketing automation tools.",
    image: {
      url: '/assets/temp-img.png',
      height: 100,
      width: 100,
      name: "temp-img",
      id: "temp-img",
      createdAt: "temp-img",
      updatedAt: "temp-img",
      publishedAt: "temp-img",
      size: 100,
      ext: "png",
      mime: "image/png",
    }
  },
  {
    title: "Salesforce Field Service Cloud",
    description: "Optimize field operations with intelligent scheduling, mobile workforce management.",
    image: {
      url: '/assets/temp-img.png',
      height: 100,
      width: 100,
      name: "temp-img",
      id: "temp-img",
      createdAt: "temp-img",
      updatedAt: "temp-img",
      publishedAt: "temp-img",
      size: 100,
      ext: "png",
      mime: "image/png",
    }
  },
  {
    title: "Salesforce Einstein & Analytics",
    description: "Harness the power of AI and advanced analytics to make smarter business decisions.",
    image: {
      url: '/assets/temp-img.png',
      height: 100,
      width: 100,
      name: "temp-img",
      id: "temp-img",
      createdAt: "temp-img",
      updatedAt: "temp-img",
      publishedAt: "temp-img",
      size: 100,
      ext: "png",
      mime: "image/png",
    }
  },
  {
    title: "Salesforce Data Cloud Services",
    description: "Create data lake-level scale insights through a unified view of your customer data.",
    image: {
      url: '/assets/temp-img.png',
      height: 100,
      width: 100,
      name: "temp-img",
      id: "temp-img",
      createdAt: "temp-img",
      updatedAt: "temp-img",
      publishedAt: "temp-img",
      size: 100,
      ext: "png",
      mime: "image/png",
    }
  },
  {
    title: "CRM Rescue & Rapid Response",
    description: "Get immediate help when your CRM system faces critical issues or performance problems.",
    image: {
      url: '/assets/temp-img.png',
      height: 100,
      width: 100,
      name: "temp-img",
      id: "temp-img",
      createdAt: "temp-img",
      updatedAt: "temp-img",
      publishedAt: "temp-img",
      size: 100,
      ext: "png",
      mime: "image/png",
    }
  },
  {
    title: "Agentforce Solutions",
    description: "Deploy intelligent agents that work alongside your team to automate and enhance customer interactions.",
    image: {
      url: '/assets/temp-img.png',
      height: 100,
      width: 100,
      name: "temp-img",
      id: "temp-img",
      createdAt: "temp-img",
      updatedAt: "temp-img",
      publishedAt: "temp-img",
      size: 100,
      ext: "png",
      mime: "image/png",
    }
  }
];
const StickyTitleList = () => {
  return (
    <div className='container-md'>
      <div className="w-full px-6 md:px-12 lg:px-16">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
          {/* Left Sidebar - Title */}
          <div className="lg:w-1/3">
            <div className={`lg:sticky lg:top-28`}>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 ">
                Our Salesforce services
              </h2>
            </div>
          </div>

          {/* Right Content - Service Cards */}
          <div className="lg:w-2/3">
            <div className="space-y-6">
              {salesforceServices.map((service, index) => (
                <StickyTitleCard
                  key={index}
                  data={service}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default StickyTitleList