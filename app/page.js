import Head from "next/head";
import MortgageCalculator from "./components/MortgageCalculator";

export default function Home() {
  return (
    <>
      <Head>
        <title>Mortgage Calculator</title>
      </Head>
      <main className="min-h-screen bg-blue-50 flex items-center justify-center">
        <MortgageCalculator />
      </main>
    </>
  );
}

// input border yellow
// pond sign
// input field hidding arrow
// rounded border background
// error field
// calculate result
// mobile response

// mortgage amount cannot be negative
// field validation
