import Bio from "@/components/Bio";
import RecentReadings from "@/components/RecentReadings";
import SocialLinks from "@/components/SocialLinks";

export default function Home() {
  return (
    <div className="sm:flex-1 sm:max-w-xl sm:mt-8">
      <section className="space-y-4">
        <Bio />
        <RecentReadings/>
        <SocialLinks />
      </section>
    </div>
  );
}
