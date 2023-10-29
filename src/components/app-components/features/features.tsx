import {
  Bell,
  Camera,
  Laptop,
  Lightbulb,
  Lock,
  Mic,
  Navigation,
  Settings,
  Webhook,
} from "lucide-react";
import React from "react";

type FeaturesDataType = {
  id: number;
  color: string;
  icons: React.ReactNode;
  title: string;
  desc: string;
};

const featuresData: FeaturesDataType[] = [
  {
    id: 1,
    color: "#73c7b7",
    desc: "Lorem ipsum dolor sicon adipiscing elit. Etiam antferme ntubero eget rorem interdum.",
    title: "powerful security",
    icons: <Lock />,
  },
  {
    id: 2,
    color: "#31A9E1",
    desc: "Lorem ipsum dolor sicon adipiscing elit. Etiam antferme ntubero eget rorem interdum.",
    title: "Creative Ideas ",
    icons: <Lightbulb />,
  },
  {
    id: 3,
    color: "#C183D5",
    desc: "Lorem ipsum dolor sicon adipiscing elit. Etiam antferme ntubero eget rorem interdum.",
    title: "powerful admin panel       ",
    icons: <Settings />,
  },
  {
    id: 4,
    color: "#EB758B",
    desc: "Lorem ipsum dolor sicon adipiscing elit. Etiam antferme ntubero eget rorem interdum.",
    title: "High regulation theme",
    icons: <Mic />,
  },
  {
    id: 5,
    color: "#73C7B7",
    desc: "Lorem ipsum dolor sicon adipiscing elit. Etiam antferme ntubero eget rorem interdum.",
    title: "awesome interface",
    icons: <Webhook />,
  },
  {
    id: 6,
    color: "##31A9E1",
    desc: "Lorem ipsum dolor sicon adipiscing elit. Etiam antferme ntubero eget rorem interdum.",
    title: "ultimate website builder",
    icons: <Navigation />,
  },
  {
    id: 7,
    color: "#EAD175",
    desc: "Lorem ipsum dolor sicon adipiscing elit. Etiam antferme ntubero eget rorem interdum.",
    title: "Responsive Theme",
    icons: <Laptop />,
  },
  {
    id: 8,
    color: "#7189C6",
    desc: "Lorem ipsum dolor sicon adipiscing elit. Etiam antferme ntubero eget rorem interdum.",
    title: "custom content blocks",
    icons: <Bell />,
  },
  {
    id: 9,
    color: "#4AE2A3",
    desc: "Lorem ipsum dolor sicon adipiscing elit. Etiam antferme ntubero eget rorem interdum.",
    title: "Trendy Design",
    icons: <Camera />,
  },
];

const Features = () => {
  return (
    <div className="py-16">
      {/* Features section Heading text start from here */}
      <section
        id="ABOUT-SECTION-HEADING-TEXT"
        className="text-center relative overflow-hidden "
      >
        <h2 className="cursor-pointer stroke-text-light dark:stroke-text-dark text-7xl uppercase tracking-wider opacity-10 font-extrabold inline-block">
          FEATURES
        </h2>
        <h3 className="text-3xl font-semibold absolute left-1/2 top-3/4 -translate-x-1/2 -translate-y-3/4 inline-block text-gray-600">
          WE ARE CREATIVE CRAFTING WITH LOVE
        </h3>
      </section>
      {/* Features section Heading text end from here */}

      {/* Features section items text start from here */}

      <div className="max-w-5xl mx-auto mt-16">
        <div className="grid grid-cols-3 gap-5">
          {featuresData.map((item: FeaturesDataType) => (
            <div key={item.id} className="flex items-start mt-9">
              <i
                style={{ backgroundColor: `${item.color}` }}
                className={` rounded-full me-4 p-3 text-white`}
              >
                {item.icons}
              </i>

              <div>
                <h4 className="mb-3 font-semibold uppercase tracking-wide text-gray-600">
                  {item.title}
                </h4>
                <p className="text-sm tracking-wide leading-6">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Features section items text end from here */}
    </div>
  );
};

export default Features;
