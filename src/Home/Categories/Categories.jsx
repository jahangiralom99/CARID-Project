/* eslint-disable react/no-unescaped-entities */
import { Tabs } from "flowbite-react";
import { HiAdjustments, HiClipboardList } from "react-icons/hi";
import { MdDashboard } from "react-icons/md";

const Categories = () => {
  return (
    <section className="max-w-screen-xl mx-auto mt-12 px-3">
      <Tabs aria-label="Tabs with icons" style="underline">
        <Tabs.Item active title="Top Categories">
          <div className="grid grid-cols-4">
            <div className="hover:cursor-pointer hover:underline">
              <img className="object-center"
                src="https://i.ibb.co/ZW6Xqss/wheels-and-rims-ic-5.jpg"
                alt=""
              />
              <p className="text-center mt-5">Custom Wheels</p>
            </div>
            <div className="hover:cursor-pointer hover:underline">
              <img className="object-center"
                src="https://i.ibb.co/ZW6Xqss/wheels-and-rims-ic-5.jpg"
                alt=""
              />
              <p className="text-center mt-5">Custom Wheels</p>
            </div>
            <div className="hover:cursor-pointer hover:underline">
              <img className="object-center"
                src="https://i.ibb.co/ZW6Xqss/wheels-and-rims-ic-5.jpg"
                alt=""
              />
              <p className="text-center mt-5">Custom Wheels</p>
            </div>
            <div className="hover:cursor-pointer hover:underline">
              <img className="object-center"
                src="https://i.ibb.co/ZW6Xqss/wheels-and-rims-ic-5.jpg"
                alt=""
              />
              <p className="text-center mt-5">Custom Wheels</p>
            </div>
            <div className="hover:cursor-pointer hover:underline">
              <img className="object-center"
                src="https://i.ibb.co/ZW6Xqss/wheels-and-rims-ic-5.jpg"
                alt=""
              />
              <p className="text-center mt-5">Custom Wheels</p>
            </div>
            <div className="hover:cursor-pointer hover:underline">
              <img className="object-center"
                src="https://i.ibb.co/ZW6Xqss/wheels-and-rims-ic-5.jpg"
                alt=""
              />
              <p className="text-center mt-5">Custom Wheels</p>
            </div>
          </div>
        </Tabs.Item>
        <Tabs.Item title="Dashboard" icon={MdDashboard}>
          This is{" "}
          <span className="font-medium text-gray-800 dark:text-white">
            Dashboard tab's associated content
          </span>
          . Clicking another tab will toggle the visibility of this one for the
          next. The tab JavaScript swaps classes to control the content
          visibility and styling.
        </Tabs.Item>
        <Tabs.Item title="Settings" icon={HiAdjustments}>
          This is{" "}
          <span className="font-medium text-gray-800 dark:text-white">
            Settings tab's associated content
          </span>
          . Clicking another tab will toggle the visibility of this one for the
          next. The tab JavaScript swaps classes to control the content
          visibility and styling.
        </Tabs.Item>
        <Tabs.Item title="Contacts" icon={HiClipboardList}>
          This is{" "}
          <span className="font-medium text-gray-800 dark:text-white">
            Contacts tab's associated content
          </span>
          . Clicking another tab will toggle the visibility of this one for the
          next. The tab JavaScript swaps classes to control the content
          visibility and styling.
        </Tabs.Item>
      </Tabs>
    </section>
  );
};

export default Categories;
