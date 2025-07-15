"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { signOutUser } from "@/lib/actions/user.actions";

export default function BackButtonLogout() {
  const router = useRouter();

  useEffect(() => {
    const handlePopState = async (e) => {
      e.preventDefault();
      await signOutUser();
      router.replace("/sign-in");
    };
    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, [router]);

  return null;
} 