import Image from "next/image";
import img1 from '../public/assets/carousel_img/carousel1.png';
import slide1 from '../public/assets/carousel_img/carousel2.png';
import slide2 from '../public/assets/carousel_img/carousel3.png';
import slide3 from '../public/assets/carousel_img/carousel4.png';
import slide4 from '../public/assets/carousel_img/carousel5.png';
import product_image1 from '../public/assets/product_img/product4.png';
import user1 from '../public/assets/user_img/Ellipse1.png';
import user2 from '../public/assets/user_img/Ellipse2.png';
import user3 from '../public/assets/user_img/Ellipse3.png';
import user4 from '../public/assets/user_img/Ellipse4.png';
import user5 from '../public/assets/user_img/Ellipse5.png';
import user6 from '../public/assets/user_img/Ellipse6.png';
import user7 from '../public/assets/user_img/Ellipse7.png';
import user8 from '../public/assets/user_img/Ellipse8.png';
import user9 from '../public/assets/user_img/Ellipse9.png';
import user10 from '../public/assets/user_img/Ellipse10.png';




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
        <div className="product-wrap pt-4">
          <div className="product-card">
            <Image
              src={product_image1}
              width={350}
              height={350}
              alt="carousel image"
            />
            <div className="product-description">
              <p className="text-[0.75rem]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                aliquam, purus sit amet luctus venenatis, lectus magna fringilla
                urna, porttitor rhoncus dolor pur
              </p>
              <div className="user-reviews">
                <div className="user-image-wrap flex">
                  <Image
                    src={user1}
                    width={30}
                    height={30}
                    alt="user image"
                  />
                  <Image
                    src={user2}
                    width={30}
                    height={30}
                    alt="user image"
                  />
                  <Image
                    src={user3}
                    width={30}
                    height={30}
                    alt="user image"
                  />
                  <Image
                    src={user1}
                    width={30}
                    height={30}
                    alt="user image"
                  />
                  <Image
                    src={user4}
                    width={30}
                    height={30}
                    alt="user image"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
