import { createFileRoute } from "@tanstack/react-router";
import { title } from "@/components/primitives.ts";
import { Button } from "@heroui/react";
import DefaultLayout from "@/layouts/default.tsx";

export const Route = createFileRoute("/about")({
  component: RouteComponent
});

function RouteComponent() {
  return <DefaultLayout>
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="inline-block max-w-lg text-center justify-center">
        <Button>Test</Button>
        <h1 className={title()}>About</h1>
      </div>
    </section>
  </DefaultLayout>;
}
