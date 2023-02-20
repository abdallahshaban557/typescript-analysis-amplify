import React from "react";
import classNames from "classnames";

const PricingComponent = () => {
  return (
    <div className="flex justify-center mt-8">
      <div className="flex-none mx-4 border-2 border-blue-500 rounded-lg shadow-lg w-72">
        <div className="px-6 py-4 text-white bg-blue-500 rounded-t-lg">
          <h2 className="mb-2 text-3xl font-bold">Basic</h2>
          <p className="text-xl font-semibold">
            $10<span className="text-base font-normal">/month</span>
          </p>
        </div>
        <div className="px-6 py-4 bg-white">
          <ul className="text-sm">
            <li className="py-2">100 GB Storage</li>
            <li className="py-2">1 User</li>
            <li className="py-2">10 Projects</li>
            <li className="py-2">Limited Support</li>
          </ul>
          <button className="block w-full px-4 py-2 mt-4 font-semibold text-white bg-blue-500 rounded-full hover:bg-blue-600">
            Choose Plan
          </button>
        </div>
      </div>

      <div className="flex-none mx-4 border-2 border-blue-500 rounded-lg shadow-lg w-72">
        <div className="px-6 py-4 text-white bg-blue-500 rounded-t-lg">
          <h2 className="mb-2 text-3xl font-bold">Premium</h2>
          <p className="text-xl font-semibold">
            $25<span className="text-base font-normal">/month</span>
          </p>
        </div>
        <div className="px-6 py-4 bg-white">
          <ul className="text-sm">
            <li className="py-2">500 GB Storage</li>
            <li className="py-2">5 Users</li>
            <li className="py-2">50 Projects</li>
            <li className="py-2">Priority Support</li>
          </ul>
          <button className="block w-full px-4 py-2 mt-4 font-semibold text-white bg-blue-500 rounded-full hover:bg-blue-600">
            Choose Plan
          </button>
        </div>
      </div>

      <div className="flex-none mx-4 border-2 border-blue-500 rounded-lg shadow-lg w-72">
        <div className="px-6 py-4 text-white bg-blue-500 rounded-t-lg">
          <h2 className="mb-2 text-3xl font-bold">Enterprise</h2>
          <p className="text-xl font-semibold">Contact Us</p>
        </div>
        <div className="px-6 py-4 bg-white">
          <ul className="text-sm">
            <li className="py-2">Unlimited Storage</li>
            <li className="py-2">Unlimited Users</li>
            <li className="py-2">Unlimited Projects</li>
            <li className="py-2">Premium Support</li>
          </ul>
          <button className="block w-full px-4 py-2 mt-4 font-semibold text-white bg-blue-500 rounded-full hover:bg-blue-600">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default PricingComponent;
