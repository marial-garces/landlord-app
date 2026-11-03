import { Owner, Building, Unit, Lease, Tenant, TenantListItem } from "@/types/tenant";

export const owner: Owner = {
  id: "owner-1",
  name: "Familia Pérez",
};

export const building: Building = {
  id: "building-1",
  ownerId: owner.id,
  name: "Residencial Las Palmas",
  address: "Calle Principal #45, Distrito Nacional",
};

export const units: Unit[] = [
  { id: "unit-1", buildingId: building.id, label: "Apto 1A", floor: 1 },
  { id: "unit-2", buildingId: building.id, label: "Apto 1B", floor: 1 },
  { id: "unit-3", buildingId: building.id, label: "Apto 2A", floor: 2 },
  { id: "unit-4", buildingId: building.id, label: "Apto 2B", floor: 2 },
];

export const leases: Lease[] = [
  {
    id: "lease-1",
    tenantId: "tenant-1",
    unitId: "unit-1",
    startDate: "2026-01-01",
    endDate: "2026-12-31",
    rentAmount: 22000,
    currency: "DOP",
  },
  {
    id: "lease-2",
    tenantId: "tenant-2",
    unitId: "unit-2",
    startDate: "2026-03-15",
    endDate: "2027-03-14",
    rentAmount: 25000,
    currency: "DOP",
  },
  {
    id: "lease-3",
    tenantId: "tenant-3",
    unitId: "unit-3",
    startDate: "2025-11-01",
    endDate: "2026-10-31",
    rentAmount: 28000,
    currency: "DOP",
  },
];

export const tenants: Tenant[] = [
  {
    id: "tenant-1",
    fullName: "Carlos Martínez",
    phone: "809-555-0101",
    email: "carlos.martinez@example.com",
    unitId: "unit-1",
    status: "activo",
    leaseId: "lease-1",
  },
  {
    id: "tenant-2",
    fullName: "Ana Rodríguez",
    phone: "809-555-0102",
    email: "ana.rodriguez@example.com",
    unitId: "unit-2",
    status: "atrasado",
    leaseId: "lease-2",
  },
  {
    id: "tenant-3",
    fullName: "Luis Fernández",
    phone: "809-555-0103",
    email: "luis.fernandez@example.com",
    unitId: "unit-3",
    status: "en_salida",
    leaseId: "lease-3",
  },
];

// Resuelve la vista combinada que usará la pantalla de listado (Fase 2).
export function getTenantListItems(): TenantListItem[] {
  return tenants.map((tenant) => {
    const unit = units.find((u) => u.id === tenant.unitId)!;
    const lease = leases.find((l) => l.id === tenant.leaseId)!;
    return {
      id: tenant.id,
      fullName: tenant.fullName,
      phone: tenant.phone,
      email: tenant.email,
      unitLabel: unit.label,
      status: tenant.status,
      leaseStart: lease.startDate,
      leaseEnd: lease.endDate,
      rentAmount: lease.rentAmount,
      currency: lease.currency,
    };
  });
}
