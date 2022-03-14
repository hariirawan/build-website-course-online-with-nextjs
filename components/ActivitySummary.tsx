import Image from "next/image";
import React from "react";
import Map from "../assets/map.png";
import Ecommerce from "../assets/E-commerce.png";
import Customizeyourexperience from "../assets/Customize-your-experience.png";
import Winner from "../assets/Winner.png";
import Launchproduct from "../assets/Launch-product.png";

export default function ActivitySummary() {
  return (
    <section className="bg-#F0F4F9 border py-14">
      <div className="container mx-auto max-w-5xl relative">
        <div className="absolute left-0 right-0 flex justify-center my-14">
          <Image src={Map} width={728 / 1.5} height={367 / 1.5} />
        </div>
        <div className="grid grid-cols-4 relative gap-28">
          <CardSummary image={Ecommerce} width={160.16} height={153.51} />
          <CardSummary
            image={Customizeyourexperience}
            width={181.67}
            height={175.79}
          />
          <CardSummary image={Launchproduct} width={114.94} height={153.39} />
          <CardSummary image={Winner} width={166.31} height={109.65} />
        </div>
      </div>
    </section>
  );
}

function CardSummary(props: { image: any; width?: any; height?: any }) {
  return (
    <div className="flex flex-col items-center">
      <div className="h-52 w-52 flex  items-center justify-center">
        <Image
          src={props.image}
          layout={"intrinsic"}
          width={props.width}
          height={props.height}
        />
      </div>
      <div className="text-4xl font-CormorantGaramond font-bold">768</div>
      <div className="text-sm font-Inter font-bold">COURSES PUBLISHED</div>
    </div>
  );
}
