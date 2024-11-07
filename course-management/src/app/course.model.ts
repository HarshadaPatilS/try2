// src/app/course.model.ts

export interface Course {
    id?: number; // Optional for new courses
    name: string;
    description: string;
    duration: string; // e.g., "4 weeks"
    availabilityStatus: string; // e.g., "available", "not available"
    availableFrom: string; // Date string
    availableTo: string; // Date string
    slotsAvailable: number;
  }
  