"use client";

import { useState } from "react";
import Image from "next/image";
import CalculatorIcon from "../assets/icon-calculator.svg";

export default function CalculatorForm({ updateResults }) {
  const [formData, setFormData] = useState({
    amount: "",
    term: "",
    rate: "",
    type: "Repayment",
  });

  const [validationErrors, setValidationErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Clear validation error for the field when user starts typing
    if (validationErrors[name]) {
      setValidationErrors({ ...validationErrors, [name]: "" });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const errors = {};

    // Validate fields
    if (!formData.amount) errors.amount = "This field is required.";
    if (!formData.term) errors.term = "This field is required.";
    if (!formData.rate) errors.rate = "This field is required.";

    if (Object.keys(errors).length > 0) {
      setValidationErrors(errors);
      return;
    }

    const principal = parseFloat(formData.amount);
    const annualRate = parseFloat(formData.rate) / 100;
    const monthlyRate = annualRate / 12;
    const totalPayments = formData.term * 12;

    let monthlyPayment;
    let totalPayment;

    if (formData.type === "Repayment") {
      monthlyPayment =
        (principal * monthlyRate * Math.pow(1 + monthlyRate, totalPayments)) /
        (Math.pow(1 + monthlyRate, totalPayments) - 1);
    } else if (formData.type === "Interest Only") {
      monthlyPayment = principal * monthlyRate;
    }

    totalPayment = monthlyPayment * totalPayments;

    updateResults({
      monthlyPayment: monthlyPayment.toFixed(2),
      totalPayment: totalPayment.toFixed(2),
      showResults: true,
    });
  };

  const handleReset = () => {
    setFormData({
      amount: "",
      term: "",
      rate: "",
      type: "Repayment",
    });
    setValidationErrors({});
    updateResults({ showResults: false });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full md:w-1/2 p-6 bg-white border-b md:border-b-0 md:border-r border-gray-200"
    >
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl md:text-2xl font-bold text-black">
          Mortgage Calculator
        </h2>
        <button
          type="button"
          onClick={handleReset}
          className="text-sm text-gray-500 hover:underline"
        >
          Clear All
        </button>
      </div>

      <div className="space-y-4">
        <div className="relative">
          <label className="block text-gray-700">Mortgage Amount</label>
          <div className="flex items-center">
            <span
              className={`absolute left-0 p-2 rounded-l-md ${
                validationErrors.amount ? "bg-red-500" : "bg-yellow-500"
              } text-black`}
            >
              £
            </span>
            <input
              type="number"
              name="amount"
              value={formData.amount}
              onChange={handleChange}
              className="w-full pl-10 p-2 border rounded-r-md focus:outline-none"
            />
          </div>
          {validationErrors.amount && (
            <p className="text-sm text-red-500 mt-1">
              {validationErrors.amount}
            </p>
          )}
        </div>

        <div className="flex flex-col md:flex-row md:space-x-4">
          <div className="relative w-full">
            <label className="block text-gray-700">Mortgage Term</label>
            <div className="relative">
              <input
                type="number"
                name="term"
                value={formData.term}
                onChange={handleChange}
                className="w-full p-2 border rounded focus:outline-none"
              />
              <span
                className={`absolute right-0 p-2 rounded-r-md ${
                  validationErrors.term ? "bg-red-500" : "bg-yellow-500"
                } text-black`}
              >
                Years
              </span>
            </div>
            {validationErrors.term && (
              <p className="text-sm text-red-500 mt-1">
                {validationErrors.term}
              </p>
            )}
          </div>

          <div className="relative w-full mt-4 md:mt-0">
            <label className="block text-gray-700">Interest Rate</label>
            <div className="relative">
              <input
                type="number"
                name="rate"
                value={formData.rate}
                onChange={handleChange}
                className="w-full p-2 border rounded focus:outline-none"
              />
              <span
                className={`absolute right-0 p-2 rounded-r-md ${
                  validationErrors.rate ? "bg-red-500" : "bg-yellow-500"
                } text-black`}
              >
                %
              </span>
            </div>
            {validationErrors.rate && (
              <p className="text-sm text-red-500 mt-1">
                {validationErrors.rate}
              </p>
            )}
          </div>
        </div>

        <div>
          <label className="block text-gray-700">Mortgage Type</label>
          <div className="flex flex-col space-y-4 mt-4">
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
        className="flex items-center justify-center mt-6 w-full bg-yellow-400 hover:bg-yellow-500 py-2 rounded-full font-bold text-black"
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
