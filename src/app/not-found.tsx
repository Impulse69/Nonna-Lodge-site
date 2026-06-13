import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="flex min-h-[60vh] items-center py-20">
      <Container className="text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-clay">404</p>
        <h1 className="mt-3 text-4xl text-charcoal sm:text-5xl">Page not found</h1>
        <p className="mx-auto mt-4 max-w-md text-stone-600">
          Sorry, we couldn&apos;t find the page you were looking for. Let&apos;s get you back on track.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <ButtonLink href="/">Back to home</ButtonLink>
          <ButtonLink href="/rooms" variant="outline">
            Browse rooms
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
