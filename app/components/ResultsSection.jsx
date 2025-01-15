import Image from "next/image";
import ResultImage from "../assets/illustration-empty.svg";

export default function ResultsSection({ results }) {
  if (!results.showResults) {
    return (
      <div className="w-full md:w-1/2 p-8 border-none bg-gray-800 text-white flex items-center justify-center md:rounded-bl-[25%]">
        <div className="text-center">
          <Image
            src={ResultImage}
            alt="Calculator Illustration"
            className="w-32 mx-auto"
            width={128}
            height={128}
          />
          <h3 className="text-lg font-semibold mt-5">Results shown here</h3>
          <p className="text-sm mt-5">
            Complete the form and click "Calculate Repayments" to see your
            monthly repayments.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full md:w-1/2 p-8 bg-gray-900 text-white md:rounded-bl-[25%]">
      <h3 className="text-xl md:text-2xl font-semibold mb-4">Your results</h3>
      <p className="text-sm text-gray-300">
        Your results are shown below based on the information you provided.
      </p>
      <div className="bg-gray-800 p-6 rounded-lg mt-6">
        <p className="text-sm uppercase tracking-wide text-yellow-400 border-b border-yellow-400 pb-2 mb-4">
          Your monthly repayments
        </p>
        <h1 className="text-4xl md:text-5xl font-bold text-yellow-500">
          £{results.monthlyPayment}
        </h1>
        <p className="mt-4 text-sm text-gray-300">
          Total you'll repay over the term:{" "}
          <span className="text-white font-bold">£{results.totalPayment}</span>
        </p>
      </div>
    </div>
  );
}
