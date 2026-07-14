import type { Metadata } from "next";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { RestaurantLanding } from "@/components/restaurant/RestaurantLanding";

export const metadata: Metadata = {
  title: "Restaurant AI Platform | SwiftAIApps",
  description: "AI-powered guest experiences, restaurant operations, and multi-location intelligence in one connected platform.",
};

export default function RestaurantPage() {
  return <><Navbar /><main><RestaurantLanding /></main><Footer /></>;
}
