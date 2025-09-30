import { Button } from '@/components/ui/button'
import KorcomptenzImage from '@/components/korcomptenz-image'
import { cn } from '@/lib/utils'

const StretchableSectionCard = ({
  open,
  props,
  data,
  image
}: {
  open: boolean;
  props: React.HTMLAttributes<HTMLDivElement>;
  image?: ImageType;
  data: StretchableSectionType['list'][number];
}) => {
  return (
    <div
      {...props}
      className={cn(`bg-light-gray rounded-4xl relative overflow-hidden min-h-80 flex flex-row  transition-all duration-1000 ease-out  
        ${open ? "lg:flex-[2] transform scale-[1.02]" : "lg:flex-1"}`, props.className)}
    >
      <div className='pl-8 py-8 lg:pl-10 lg:py-10 flex flex-col '>
        <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-auto">{data?.title}</h2>
        <div
          className={`transition-all duration-1000 ease-out ${open ? "opacity-100 max-h-96" : "opacity-0 max-h-0 overflow-hidden"
            }`}
        >
          <p className="text-gray-700 text-lg mb-8 flex-grow">
            {data?.description}
          </p>
        </div>
        <div
          className={`transition-all duration-1000 ease-out `}
        >
          <Button size={open ? 'xl' : 'icon'} arrow={true} >
            {open && data?.buttonText}
          </Button>

        </div>
      </div>
      <div className={cn("size-full", open && "relative")}>
        <div
          className={`absolute  transition-all duration-1000 ease-out ${open ? "right-0 bottom-0" : "opacity-20  right-4 top-1/2 -translate-y-1/2"
            }`}
        >
          <KorcomptenzImage
            src={open ? data?.image : image}
            width={200}
            height={200}
          />
        </div>
      </div>
    </div>
  )
}


export default StretchableSectionCard