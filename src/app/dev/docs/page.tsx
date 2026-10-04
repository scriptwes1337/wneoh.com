import { notFound, redirect } from "next/navigation";

export default function DocsPage() {
  if (process.env.NODE_ENV === "production") notFound();
  redirect("/dev");
}
