import { testimonials } from "../constants";
import TitleHeader from "../components/TitleHeader";
import GlowCard from "../components/GlowCard";

const Testimonials = () => {
  return (
    <section
      id="testimonials"
      className="flex-center section-padding relative z-1 pt-32 bg-black/3 backdrop-blur-[2px]"
    >
      <div className="w-full h-full md:px-10 px-5">
        <TitleHeader
          title="LinkedIn Testimonials"
          sub="⭐️ Co-workers feedback"
        />

        <div className="lg:columns-3 md:columns-2 columns-1 mt-16 gap-12">
          {testimonials.map((testimonial, index) => (
            <GlowCard card={testimonial} key={index} index={index}>
              <div className="flex items-center gap-3">
                <div>
                  <img
                    src={testimonial.imgPath}
                    alt=""
                    className="w-14 h-14  min-w-14 min-h-14 rounded-full"
                  />
                </div>
                <div>
                  <p className="font-bold">{testimonial.name}</p>
                  <p className="text-white-50">{testimonial.role}</p>
                </div>
              </div>
            </GlowCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
