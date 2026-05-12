import HomePage from "./Home/page";
import LoadingScreen from "@/components/LoadingScreen";

export default function Home() {
  return (
    <div className="relative">
      <HomePage />
      <LoadingScreen />
    </div>
  );
}
