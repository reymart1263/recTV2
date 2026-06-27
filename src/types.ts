export interface ServiceItem {
  id: string;
  title: string;
  category: "tv-board" | "sound-system" | "videoke";
  shortDesc: string;
  fullDesc: string;
  symptoms: string[];
  features: string[];
  startingPrice: string;
  turnaround: string;
  iconName: string;
}

export interface Milestone {
  year: string;
  title: string;
  description: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  location: string;
  comment: string;
  rating: number;
  avatarSeed: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

export interface BookingSubmission {
  id: string;
  name: string;
  phone: string;
  serviceType: string;
  applianceBrandModel?: string;
  description: string;
  preferredDate: string;
  submittedAt: string;
  status: "pending" | "confirmed";
}
