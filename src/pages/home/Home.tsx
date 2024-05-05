import { Link } from "react-router-dom";
import HeroImage from "../../images/hero.png";

export default function Home() {
  return (
    <div>
      <section className="my-10 flex flex-col items-center justify-center lg:mb-40 lg:flex-row">
        <div className="flex w-[70vw] flex-col gap-y-2 lg:w-[33rem]">
          <h1 className="text-4xl font-semibold">
            Needs accounts? We got you.
          </h1>
          <p className="text-xl">
            Head over to our {""}
            <Link to="/accounts" className="font-bold underline">
              offer section
            </Link>
            {""} and discover a range of accounts tailored to suit your needs.
          </p>
        </div>
        <img src={HeroImage} className="h-40 w-40 lg:h-64 lg:w-64" />
      </section>

      <section className="mx-10 my-24 flex flex-col gap-y-3">
        <h2 className="text-3xl font-bold">Why Choose Our Accounts?</h2>
        <p>
          Our accounts are designed with your needs in mind. Whether you're a
          seasoned investor or just starting out, we offer a variety of account
          options to meet your financial goals. With competitive interest rates,
          low fees, and flexible terms, our accounts provide the perfect
          solution for managing your money effectively. Plus, our user-friendly
          online platform makes it easy to monitor your accounts anytime,
          anywhere. Experience the convenience and reliability of our accounts
          today and take control of your finances with confidence.
        </p>
      </section>

      <section className="my-30 mx-[25vw] flex flex-col gap-y-8 text-center">
        <div className="flex flex-col gap-y-1">
          <blockquote className="opacity-80 lg:text-2xl">
            I've been using their accounts for years now, and I couldn't be
            happier. The customer service is top-notch, and the rates are
            unbeatable.
          </blockquote>
          <p className="text-sm font-semibold italic">John Doe</p>
        </div>
        <div className="flex flex-col gap-y-1">
          <blockquote className="opacity-80 lg:text-2xl">
            Switching to their accounts was one of the best financial decisions
            I've made. The process was seamless, and I've seen significant
            growth in my savings.
          </blockquote>
          <p className="text-sm font-semibold italic">Jane Smith</p>
        </div>
        <div className="flex flex-col gap-y-1">
          <blockquote className="opacity-80 lg:text-2xl">
            I love how easy it is to manage my accounts online. The interface is
            intuitive, and I feel in control of my finances every step of the
            way.
          </blockquote>
          <p className="text-sm font-semibold italic">Michael Johnson</p>
        </div>
      </section>

      <section className="mx-10 mb-5 mt-20 flex flex-col gap-y-3">
        <h4 className="text-3xl font-bold">What Are You Waiting For?</h4>
        <p>
          Don't miss out on the opportunity to experience the benefits of {""}
          <Link to="/accounts" className="font-bold underline">
            our accounts
          </Link>
          . Join our community of satisfied customers and take control of your
          finances with ease.
        </p>
      </section>
    </div>
  );
}
