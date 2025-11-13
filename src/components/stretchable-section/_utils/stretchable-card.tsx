import { Button } from '@/components/ui/button'
import KorcomptenzImage from '@/components/korcomptenz-image'
import { cn } from '@/lib/utils'
import Link from 'next/link';
import { DangerousHtml } from '@/components/ui/dangerous-html';

const StretchableSectionCard = ({
  open,
  props,
  data,
  image = "https://aue2kormlworkspacetest01.blob.core.windows.net/pixelteam-datastorage/lets_drive_fdc0c33e0c.png"
}: {
  open: boolean;
  props: React.HTMLAttributes<HTMLDivElement>;
  image?: ImageType | string;
  data: StretchableSectionType['list'][number];
}) => {
  const { ...rest } = props
  return (
    <div
      {...rest}
      className={cn(`bg-light-gray rounded-4xl relative overflow-hidden min-h-80 flex flex-row  transition-all duration-1000 ease-out  
        ${open ? "lg:flex-[2] transform" : "lg:flex-1"}`, props.className)}
    >
      <div className='pl-8 py-8 lg:pl-10 lg:py-10 flex flex-col gap-3'
      // onMouseEnter={onMouseEnter}
      >
        <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-auto">{data?.title}</h2>
        <div
          className={`transition-all duration-1000 ease-out ${open ? "opacity-100 max-h-96" : "opacity-0 max-h-0 overflow-hidden"
            }`}

        >
          <DangerousHtml
          html={data?.description}
          className="text-gray-700 text-lg mb-8 flex-grow"
          />
          {/* <p className="text-gray-700 text-lg mb-8 flex-grow">
            {data?.description}
          </p> */}
        </div>
        <div
          className={`transition-all duration-1000 ease-out z-10`}

        >
          <Link href={data?.link || "#"}>
            <Button size={open ? 'xl' : 'icon'} arrow={true} >
              {open && data?.buttonText}
            </Button>
          </Link>
        </div>
      </div>
      <div className={cn("size-full", open && "relative")}
      // onMouseEnter={onMouseEnter}

      >
        <div
          className={`absolute  w-[200px] h-[230px] flex items-end justify-end transition-all duration-1000 ease-out ${open ? "right-0 bottom-0" : "opacity-20  right-4 top-1/2 -translate-y-1/2"
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