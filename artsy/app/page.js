import Image from "next/image";
import img1 from '../public/assets/carousel_img/carousel1.png';
import slide1 from '../public/assets/carousel_img/carousel2.png';
import slide2 from '../public/assets/carousel_img/carousel3.png';
import slide3 from '../public/assets/carousel_img/carousel4.png';
import slide4 from '../public/assets/carousel_img/carousel5.png';
import product_image1 from '../public/assets/product_img/product4.png';
import product_image2 from '../public/assets/product_img/product1.png';
import user1 from '../public/assets/user_img/Ellipse1.png';
import user2 from '../public/assets/user_img/Ellipse2.png';
import user3 from '../public/assets/user_img/Ellipse3.png';
import user4 from '../public/assets/user_img/Ellipse4.png';
import user5 from '../public/assets/user_img/Ellipse5.png';
import { FaRegArrowAltCircleRight } from 'react-icons/fa';



export default function Home() {
  return (
    <main className="home mx-3 md:w-100 md:mt-4 md:mx-10">
      <div className="w-full text-center lg:w-1/2 lg:mx-auto">
        <h1 className="text-2xl md:text-4xl/[60px]">
          Photography is poetry & beautiful untold stories
        </h1>
        <p className="text-sm md:text-lg pt-6">
          Flip through more than 10,000 vintage shots, old photograghs, historic
          images and captures seamlessly in one place. Register to get top
          access.
        </p>
      </div>
      <div className="image-cascade pt-6 pb-12">
        <div className="md:hidden">
          <Image src={img1} width={350} height={350} alt="carousel image" />
        </div>
        <div className="sm:hidden flex gap-3">
          <div>
            <Image src={img1} width={350} height={350} alt="carousel image" />
          </div>
          <div>
            <Image src={slide1} width={350} height={350} alt="carousel image" />
          </div>
          <div>
            <Image src={slide2} width={350} height={350} alt="carousel image" />
          </div>
          <div>
            <Image src={slide3} width={350} height={350} alt="carousel image" />
          </div>
          <div>
            <Image src={slide4} width={350} height={350} alt="carousel image" />
          </div>
        </div>
      </div>
      <section className="featured-products">
        <h3 className="text-bold text-lg">Featured Products</h3>
        <div className="product-wrap pt-4 flex-col space-y-8">
          <div className="product-card md:flex md:gap-3 relative">
            <Image
              src={product_image1}
              sizes="100vw"
              style={{
                width: "100%",
                height: "auto",
              }}
              alt="carousel image"
            />
            <div className="product-description pt-4 md:pt-0">
              <span className="md:static absolute inset-y-4 inset-x-1/4 text-white md:text-black text-bold">
                Boolean Egyptian
              </span>
              <p className="text-[0.75rem]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                aliquam, purus sit amet luctus venenatis, lectus magna fringilla
                urna, porttitor rhoncus dolor pur
              </p>
              <div className="md:flex md:justify-between">
                <div className="user-reviews flex gap-3 items-center pt-4 border-b-black">
                  <div className="user-image-wrap flex">
                    <Image
                      src={user1}
                      width={20}
                      height={20}
                      alt="user image"
                    />
                    <Image
                      src={user2}
                      width={20}
                      height={20}
                      alt="user image"
                    />
                    <Image
                      src={user3}
                      width={20}
                      height={20}
                      alt="user image"
                    />
                    <Image
                      src={user4}
                      width={20}
                      height={30}
                      alt="user image"
                    />
                    <Image
                      src={user5}
                      width={20}
                      height={20}
                      alt="user image"
                    />
                  </div>
                  <h3 className="text-sm">64 major creators</h3>
                </div>
                <div className="md:mt-3 md:static absolute inset-y-16 right-4 text-white md:text-black">
                  <FaRegArrowAltCircleRight 
                    style={{
                      width: '24px',
                      height: 'auto',
                    }}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="product-card md:flex md:gap-3 relative">
            <Image
              src={product_image2}
              sizes="100vw"
              style={{
                width: "100%",
                height: "auto",
              }}
              alt="carousel image"
            />
            <div className="product-description pt-4 md:pt-0">
              <span className="md:static absolute inset-y-4 inset-x-1/4 text-white md:text-black text-bold">
                Oloibiri 1997
              </span>
              <p className="text-[0.75rem]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                aliquam, purus sit amet luctus venenatis, lectus magna fringilla
                urna, porttitor rhoncus dolor pur
              </p>
              <div className="md:flex md:justify-between">
                <div className="user-reviews flex gap-3 items-center pt-4">
                  <div className="user-image-wrap flex">
                    <Image
                      src={user1}
                      width={20}
                      height={20}
                      alt="user image"
                    />
                    <Image
                      src={user2}
                      width={20}
                      height={20}
                      alt="user image"
                    />
                    <Image
                      src={user3}
                      width={20}
                      height={20}
                      alt="user image"
                    />
                    <Image
                      src={user4}
                      width={20}
                      height={30}
                      alt="user image"
                    />
                    <Image
                      src={user5}
                      width={20}
                      height={20}
                      alt="user image"
                    />
                  </div>
                  <h3 className="text-sm">64 major creators</h3>
                </div>
                <div className="md:mt-3 md:static absolute inset-y-16 right-4 text-white md:text-black">
                  <FaRegArrowAltCircleRight 
                    style={{
                      width: '24px',
                      height: 'auto',
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-12">

      </section>
    </main>
  );
}
