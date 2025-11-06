
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from '@/components/ui/carousel'
import React from 'react'

const MasonryGallery = () => {
  return (
    <Carousel className="w-full">
      <div className="flex mb-5  justify-between w-full">
        <div />
        <h2 className="text-6xl text-center font-bold  text-foreground">Featured Content</h2>
        <div className="flex items-center ">
          <CarouselPrevious
            className="relative top-1/2 -left-5 hover:bg-primary hover:text-white size-9"
            variant={"default"}
            fontSize="size-4"
          />
          <CarouselNext
            className="relative top-1/2 right-0 hover:bg-primary hover:text-white size-9"
            variant={"default"}
            fontSize="size-4"
          />

        </div>
      </div>
      <CarouselContent firstItemClassName='rounded-none' >
        <CarouselItem className=" md:basis-1/2 lg:basis-1/3 flex flex-col gap-4">
          <div>
            <img
              className="h-auto max-w-full  object-cover object-center"
              src="https://images.unsplash.com/photo-1432462770865-65b70566d673?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1950&amp;q=80"
              alt="gallery-photo"
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full object-cover object-center "
              src="https://images.unsplash.com/photo-1629367494173-c78a56567877?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=927&amp;q=80"
              alt="gallery-photo"
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full object-cover object-center"
              src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=2940&amp;q=80"
              alt="gallery-photo"
            />
          </div>
        </CarouselItem>
        <CarouselItem className=" md:basis-1/2 lg:basis-1/3 flex flex-col gap-4">
          <div>
            <img
              className="h-auto max-w-full object-cover object-center"
              src="https://images.unsplash.com/photo-1552960562-daf630e9278b?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=687&amp;q=80"
              alt="gallery-photo"
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full object-cover object-center"
              src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"
              alt="gallery-photo"
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full object-cover object-center "
              src="https://docs.material-tailwind.com/img/team-3.jpg"
              alt="gallery-photo"
            />
          </div>
        </CarouselItem>
        <CarouselItem className="  md:basis-1/2 lg:basis-1/3 flex flex-col gap-4">
          <div>
            <img
              className="h-auto max-w-full object-cover object-center"
              src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=2940&amp;q=80"
              alt="gallery-photo"
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full object-cover object-center "
              src="https://docs.material-tailwind.com/img/team-3.jpg"
              alt="gallery-photo"
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full object-cover object-center"
              src="https://images.unsplash.com/photo-1552960562-daf630e9278b?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=687&amp;q=80"
              alt="gallery-photo"
            />
          </div>
        </CarouselItem>
        <CarouselItem className=" md:basis-1/2 lg:basis-1/3 flex flex-col gap-4">
          <div>
            <img
              className="h-auto max-w-full object-cover object-center"
              src="https://images.unsplash.com/photo-1552960562-daf630e9278b?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=687&amp;q=80"
              alt="gallery-photo"
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full object-cover object-center"
              src="https://images.unsplash.com/photo-1629367494173-c78a56567877?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=927&amp;q=80"
              alt="gallery-photo"
            />
          </div>
        </CarouselItem>
      </CarouselContent>
    </Carousel>
  )
}

export default MasonryGallery