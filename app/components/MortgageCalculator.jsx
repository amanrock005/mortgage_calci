"use client";

import { useState } from "react";
import CalculatorForm from "./CalculatorForm";
import ResultsSection from "./ResultsSection";

export default function MortgageCalculator() {
  const [results, setResults] = useState({
    monthlyPayment: null,
    totalPayment: null,
    showResults: false,
  });

  return (
    <div className="bg-white rounded-lg shadow-lg flex flex-col md:flex-row w-full max-w-4xl overflow-hidden">
      <CalculatorForm updateResults={setResults} />
      <ResultsSection results={results} />
    </div>
  );
}
