import { createFileRoute } from "@tanstack/react-router";
import Portfolio from "@/components/Portfolio";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Angelica Amina — HR Manager, Recruiter & Payroll Specialist" },
      { name: "description", content: "Angelica Amina is a Human Resource Manager empowering organizations through strategic talent acquisition, employee engagement, payroll and leadership development." },
      { property: "og:title", content: "Angelica Amina — Human Resource Manager" },
      { property: "og:description", content: "Empowering organizations through strategic human resource management and people-centered leadership." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Portfolio,
});
