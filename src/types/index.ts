export interface Service {
  id: string;
  number: string;
  title: string;
  description: string;
  features: string[];
  image: string;
}

export interface Project {
  id: string;
  title: string;
  category: string;
  location: string;
  image: string;
}

export interface Guarantee {
  number: string;
  title: string;
  description: string;
}
