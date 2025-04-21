import Head from "next/head";
import HeroComponent from "../components/home/HeroComponent";
import ValueProposition from "../components/home/ValueProposition";
import QuickLinks from "../components/home/QuickLinks";
import TechStack from "../components/home/TechStactComponent";
import ProudProjects from "../components/home/ProudProjectsComponent";

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Aiden | Systems Thinker & Developer</title>
        <meta
          name="description"
          content="Exploring elegant solutions to complex systems"
        />
      </Head>
      <main className="relative overflow-hidden">
        {/* Gradient background spanning all sections */}
        <div className="fixed inset-0 -z-10 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900" />

        {/* Subtle grid overlay for technical aesthetic */}
        <div className="fixed inset-0 -z-10 opacity-5 bg-[url('/grid-pattern.svg')] bg-[length:40px_40px]" />

        {/* Animated red accent elements (positioned absolutely) */}
        <div className="fixed top-1/4 -left-20 w-64 h-64 rounded-full bg-red-500/10 blur-3xl -z-10" />
        <div className="fixed bottom-1/3 -right-20 w-64 h-64 rounded-full bg-red-500/10 blur-3xl -z-10" />

        <div className="space-y-0">
          {" "}
          {/* Removed gap and control spacing within components */}
          <HeroComponent />
          <TechStack />
          <ProudProjects />
          <ValueProposition />
          <QuickLinks />
        </div>
      </main>
    </>
  );
}
