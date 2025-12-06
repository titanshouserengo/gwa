import React from 'react';

export interface NavItem {
  label: string;
  href: string;
}

export interface Plan {
  id: string;
  name: string;
  price: string;
  period: string;
  features: string[];
  recommended?: boolean;
  description?: string;
}

export interface Testimonial {
  name: string;
  role: string;
  text: string;
  image: string;
}

export interface Service {
  title: string;
  description: string;
  icon: React.ReactNode;
}