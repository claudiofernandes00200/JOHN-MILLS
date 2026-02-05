export interface Testimonial {
  id: number;
  name: string;
  role?: string;
  location?: string;
  content: string;
}

export interface ServiceItem {
  id: number;
  title: string;
  description?: string;
  iconName: string;
}

export interface ContactInfo {
  phone: string;
  mobile: string;
  email: string;
  address: string[];
}