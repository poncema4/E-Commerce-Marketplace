// filepath: src/app/page.tsx
import { redirect } from "next/navigation";
export default function Page() {
  redirect("/home");
  return null;
}