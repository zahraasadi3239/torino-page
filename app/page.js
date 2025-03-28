import HomePage from "@/components/templates/HomePage";
import { serverFetch } from "@/core/services/http";

//
export default async function Home({ searchParams }) {

  const data = await serverFetch("tour", searchParams, { cache: "no-store" });
  
  return <HomePage data={data} />;
}
