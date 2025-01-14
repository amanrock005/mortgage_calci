import Image from "next/image";
import ResultImage from "../assets/illustration-empty.svg";

export default function ResultsSection() {
  return (
    <div
      className="w-1/2 p-8 bg-gray-800 text-white flex items-center justify-center"
      style={{ borderBottomLeftRadius: "25%" }}
    >
      <div className="text-center">
        <div className="mb-4">
          <Image
            src={ResultImage}
            alt="Calculator Illustration"
            className="w-32 mx-auto"
            width={128}
            height={128}
          />
        </div>
        <p className="text-lg font-semibold">Results shown here</p>
        <p className="text-sm mt-2">
          Complete the form and click "Calculate Repayments" to see your monthly
          repayments.
        </p>
      </div>
    </div>
  );
}
