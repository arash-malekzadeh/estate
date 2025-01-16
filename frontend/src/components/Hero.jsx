import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="max-padd-container  pt-[99px]">
      <div className="max-padd-container  bg-hero bg-center bg-cover bg-no-repeat h-[655px] w-full rounded-3xl  ">
        <div className="lg:right-[30rem]  md:right-[10rem]  relative top-32 xs:top-52">
          <span className="medium-18 mx-20">
            به پورتال دفتر مرکزی املاک خوش آمدید
          </span>
          <h1 className="h1 mr-20 max-w-[35rem]">
            یافتن خانه های بی نظیر با پورتال دفتر مرکزی
          </h1>
          <p className="max-w-[33rem] mr-20   text-justify mb-6">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و
            کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی
            در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را
            می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی
          </p>
          <div className="mr-52 inline-flex items-center justify-center gap-4 p-2 bg-white rounded-xl">
            <div className=" text-center regular-14 leading-tight pl-5">
              <h5>10% تخفیف</h5>
              <p> برای همه املاک</p>
            </div>
            <Link
              className="btn-secondary rounded-xl flexCenter !py-3"
              to={"/listing"}
            >
              خرید{" "}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
