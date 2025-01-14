import CalculatorForm from "./CalculatorForm";
import ResultsSection from "./ResultsSection";

export default function MortgageCalculator() {
  return (
    <div className="bg-white rounded-lg shadow-lg flex w-full max-w-4xl overflow-hidden">
      <CalculatorForm />
      <ResultsSection />
    </div>
  );
}
