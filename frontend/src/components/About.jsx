import React, { useEffect, useState } from "react";
import aboutImg from "../assets/about.jpg";
import { RiDoubleQuotesL } from "react-icons/ri";
import CountUp from "react-countup";

const About = () => {
  const statistics = [
    { label: "مشتریان راضی", value: 12 },
    { label: "شهرهای مختلف", value: 3 },
    { label: "پروژه های تکمیل شده", value: 45 },
  ];
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const handleSCroll = () => {
      const aboutSection = document.getElementById("about");
      if (aboutSection) {
        const top = aboutSection.getBoundingClientRect().top;
        const bottom = aboutSection.getBoundingClientRect().bottom;
        const isVisible = top < window.innerHeight - 100 && bottom > 100;
        setIsVisible(isVisible);
      }
    };
    window.addEventListener("scroll", handleSCroll);
    return () => {
      window.removeEventListener("scroll", handleSCroll);
    };
  }, []);
  return (
    <section className="max-padd-container py-16 xl:py-28 ">
      <div className="flex flex-col xl:flex-row gap-10">
        <div className="flex-1 flex justify-center flex-col">
          <span className="medium-18"> روایت سفر ما</span>
          <h2 className="h2">
            "تعهد ما به خلق تجربیات بی‌نظیر در حوزه املاک و مستغلات"
          </h2>
          <p className="py-9">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و
            کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
          </p>
          <div className="flex flex-wrap gap-4">
            {statistics.map((statistic, index) => (
              <div key={index} className="bg-primary p-4 rounded-lg">
                <div
                  style={{ direction: "ltr" }}
                  className="flex items-center gap-1"
                >
                  <CountUp
                    start={isVisible ? 0 : null}
                    end={statistic.value}
                    duration={10}
                    delay={3}
                  >
                    {({ countUpRef }) => (
                      <h3
                        ref={countUpRef}
                        className="text-2xl font-semibold"
                      ></h3>
                    )}
                  </CountUp>
                  <h4 className="bold-22">K+</h4>
                </div>
                <p>{statistic.label}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="flex-1 relative">
          <img
            src={aboutImg}
            className="float-left rounded-3xl rounded-tr-[155px] w-[488px] "
            alt=""
          />
          <div className="bg-white absolute bottom-16 left-16 max-w-xs text-justify  p-4  rounded-lg flex-col flexCenter ">
            <span className="relative bottom-8 p-3 shadow-md bg-white h-12 w-12 flex items-center rounded-full">
              <RiDoubleQuotesL className="float-left text-2xl" />
            </span>
            <p className="text-center relative bottom-3">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است. چاپگرها و نیاز و کاربردهای متنوع با
              هدف بهبود ابزارهای .{" "}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
