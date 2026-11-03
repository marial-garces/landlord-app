// Modelo de datos base del proyecto.
// Pensado desde el inicio para soportar varios edificios y, a futuro, varios propietarios,
// aunque en esta fase solo exista un Owner y un Building.

export type TenantStatus = "activo" | "atrasado" | "en_salida" | "inactivo";

export interface Owner {
  id: string;
  name: string;
}

export interface Building {
  id: string;
  ownerId: string;
  name: string;
  address: string;
}

export interface Unit {
  id: string;
  buildingId: string;
  label: string; // ej. "Apto 2B"
  floor?: number;
}

export interface Lease {
  id: string;
  tenantId: string;
  unitId: string;
  startDate: string; // ISO date
  endDate: string; // ISO date
  rentAmount: number;
  currency: string; // ej. "DOP"
}

export interface Tenant {
  id: string;
  fullName: string;
  phone: string;
  email: string;
  unitId: string;
  status: TenantStatus;
  leaseId: string;
}

// Vista combinada que usará el módulo de listado,
// ya resuelta a partir de Tenant + Unit + Lease.
export interface TenantListItem {
  id: string;
  fullName: string;
  phone: string;
  email: string;
  unitLabel: string;
  status: TenantStatus;
  leaseStart: string;
  leaseEnd: string;
  rentAmount: number;
  currency: string;
}
