export interface SidebarItem {
  id: string;
  label: string;
  subtitle?: string;
  icon: string;
  gradientClass: string;
}

export interface AppMenuItem {
  id: string;
  title: string;
  subtitle: string;
  icon: string;
  bgClass: string;
}

export interface RoomItem {
  id: string;
  roomNo: string;
  building: string;
  floor: string;
  status: 'active' | 'pending' | 'inactive';
  note?: string;
}
