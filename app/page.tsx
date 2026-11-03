import { getTenantListItems, building } from "@/lib/mock-data";

export default function Home() {
  const tenants = getTenantListItems();

  return (
    <main className="min-h-screen px-6 py-10 md:px-12">
      <h1 className="font-display text-3xl text-ink">{building.name}</h1>
      <p className="mt-1 text-ink-muted">
        {tenants.length} inquilinos registrados — vista de lista llega en la Fase 2.
      </p>
    </main>
  );
}
