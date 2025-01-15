import Head from "next/head";
import MortgageCalculator from "./components/MortgageCalculator";

export default function Home() {
  return (
    <>
      <Head>
        <title>Mortgage Calculator</title>
      </Head>
      <main className="min-h-screen bg-blue-50 flex items-center justify-center px-4 sm:px-8 md:px-12">
        <div className="w-full max-w-sm sm:max-w-md md:max-w-2xl lg:max-w-4xl bg-white rounded-lg shadow-lg overflow-hidden">
          <MortgageCalculator />
        </div>
      </main>
    </>
  );
}
