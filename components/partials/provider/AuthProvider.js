"use client";

import { useGetUserData } from "@/core/services/queries";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

function AuthProvider({ children }) {
  const router = useRouter();
  const { isPending, data } = useGetUserData();
  console.log(data);

  useEffect(() => {
    if (!isPending && !data?.data) router.push("/profile");
  }, [isPending]);

  return children;
}

export default AuthProvider;
