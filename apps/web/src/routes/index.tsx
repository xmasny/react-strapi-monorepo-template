import { createFileRoute } from "@tanstack/react-router";
import { subtitle, title } from "@/components/primitives.ts";
import { Link, buttonVariants } from "@heroui/react";
import { GithubIcon } from "@/components/icons.tsx";
import DefaultLayout from "@/layouts/default.tsx";

export const Route = createFileRoute("/")({
  component: RouteComponent
});

function RouteComponent() {
  return <DefaultLayout>
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="inline-block max-w-lg text-center justify-center">
        <span className={title()}>Make&nbsp;</span>
        <span className={title({ color: "violet" })}>beautiful&nbsp;</span>
        <br />
        <span className={title()}>
          websites regardless of your design experience.
        </span>
        <div className={subtitle({ class: "mt-4" })}>
          Beautiful, fast and modern React UI library.
        </div>
      </div>

      <div className="flex gap-3">
        <Link
          className={buttonVariants({
            variant: "primary",
          })}
          href='/docs'
        >
          Documentation
        </Link>
        <Link
          className={buttonVariants({ variant: "outline" })}
          href='/about'
        >
          <GithubIcon size={20} />
          GitHub
        </Link>
      </div>

      <div className="mt-8">
        <div className="rounded-lg border border-separator px-4 py-3 text-sm text-foreground">
          <span>
            Get started by editing{" "}
            <code className="rounded-sm bg-accent-soft px-1.5 py-0.5 text-accent-soft-foreground">
              pages/index.tsx
            </code>
          </span>
        </div>
      </div>
    </section>
  </DefaultLayout>;
}
