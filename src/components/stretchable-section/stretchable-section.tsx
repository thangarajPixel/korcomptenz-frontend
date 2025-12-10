"use client"
import StretchableSectionCard from './_utils/stretchable-card'
import { useMobile } from '@/utils/custom-hooks'
import CardSwiper from '../ui/card-swiper'

const StretchableSection = ({ item }: { item: StretchableSectionType }) => {
  // const defaultCard = item?.list?.[1]?.title?.toLowerCase() || null;
  const isMobile = useMobile();
  // const [hoveredCard, setHoveredCard] = useState<string | null>(defaultCard);

  return (
    <section data-debug="page-componets.stretchable-section" className="container-md">
      <h4 className="text-4xl lg:text-6xl font-bold text-foreground mb-12  lg:mb-16  text-balance">
        {item?.title}
      </h4>
      <div className="flex flex-col lg:flex-row gap-6 lg:gap-4">
        {isMobile ? (
          <CardSwiper disableAutoSlide>
            {item?.list?.map((value) => (
              <StretchableSectionCard
                key={`stretchable-section-card-${value?.id}`}
                // open={true}
                props={{
                  className: "embla__custom_slide"
                }}
                image={item?.image}
                data={value}
              />
            ))}
          </CardSwiper>
        ) : (
          <div className="flex flex-wrap justify-center gap-4 w-full">
            {item?.list?.map((value) => (
              <StretchableSectionCard
                key={`stretchable-section-card-${value?.title?.toLowerCase()}`}
                // open={hoveredCard === value?.title?.toLowerCase()}
                props={{
                  className: 'flex-grow lg:basis-1/4 md:basis-1/3 sm:basis-1/2 basis-full',
                  // onMouseEnter: () => setHoveredCard(value?.title?.toLowerCase()),
                  // onMouseLeave: () => setHoveredCard(defaultCard)
                }}
                image={item?.image}
                data={value}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

export default StretchableSection