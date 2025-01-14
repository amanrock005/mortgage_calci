"use client";

import Image from "next/image";
import { useState } from "react";
import CalculatorIcon from "../assets/icon-calculator.svg";

export default function CalculatorForm() {
  const [formData, setFormData] = useState({
    amount: "",
    term: 25,
    rate: 5.25,
    type: "Repayment",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Perform calculations and update state.
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-1/2 p-8 bg-gray-50 border-r border-gray-200"
    >
      <h2 className="text-2xl font-bold mb-6 text-black">
        Mortgage Calculator
      </h2>
      <div className="space-y-4">
        <div className="relative">
          <label className="block text-gray-700">Mortgage Amount</label>
          <div className="flex items-center">
            <span
              className="absolute left-2 text-gray-500 bg-blue-100 p-2 rounded-l-md"
              id="currency-symbol"
            >
              £
            </span>
            <input
              type="number"
              name="amount"
              value={formData.amount}
              onChange={handleChange}
              placeholder="Amount"
              className="w-full pl-10 p-2 border rounded-r-md appearance-none focus:outline-none"
              style={{
                "-webkit-appearance": "none",
                "-moz-appearance": "textfield",
                appearance: "none",
              }}
            />
          </div>
        </div>
        <div className="flex space-x-4">
          <div>
            <label className="block text-gray-700">Mortgage Term</label>
            <input
              type="number"
              name="term"
              value={formData.term}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
          </div>
          <div>
            <label className="block text-gray-700">Interest Rate</label>
            <input
              type="number"
              name="rate"
              value={formData.rate}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
          </div>
        </div>
        <div>
          <label className="block text-gray-700">Mortgage Type</label>
          <div className="flex  flex-col space-y-4 mt-5">
            <label
              className={`flex items-center px-4 py-2 border rounded-md cursor-pointer ${
                formData.type === "Repayment" ? "bg-yellow-400" : "bg-gray-100"
              }`}
            >
              <input
                type="radio"
                name="type"
                value="Repayment"
                checked={formData.type === "Repayment"}
                onChange={handleChange}
                className="mr-2"
              />
              Repayment
            </label>

            <label
              className={`flex items-center px-4 py-2 border rounded-md cursor-pointer ${
                formData.type === "Interest Only"
                  ? "bg-yellow-500"
                  : "bg-gray-100"
              }`}
            >
              <input
                type="radio"
                name="type"
                value="Interest Only"
                checked={formData.type === "Interest Only"}
                onChange={handleChange}
                className="mr-2"
              />
              Interest Only
            </label>
          </div>
        </div>
      </div>
      <button
        type="submit"
        className=" flex items-center justify-center mt-6 w-full bg-yellow-400 hover:bg-yellow-500 py-2 rounded-full text-black"
      >
        <Image
          src={CalculatorIcon}
          alt="Calculator Illustration"
          className="w-8 h-6 mr-5"
        />
        Calculate Repayments
      </button>
    </form>
  );
}
