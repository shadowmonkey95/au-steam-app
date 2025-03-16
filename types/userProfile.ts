export interface UserProfile {
    uid: string;
    name: string;
    email: string;
    dob?: string;
    gender?: 'male' | 'female' | 'other';
    hometown?: string;
    phone?: string;
    avatarUrl?: string|number;
    steamMajors?: {
      biology: boolean;
      chemistry: boolean;
      computerScience: boolean;
      dataScience: boolean;
      engineering: boolean;
      environmentalScience: boolean;
      gameDesign: boolean;
      mathematicsStatistics: boolean;
      neuroscience: boolean;
      physics: boolean;
    };
    createdAt: string;
    updatedAt: string;
  }
  
  export const STEAM_MAJORS = [
    { id: 'biology', label: 'Biology' },
    { id: 'chemistry', label: 'Chemistry' },
    { id: 'computerScience', label: 'CS' },
    { id: 'dataScience', label: 'Data Science' },
    { id: 'engineering', label: 'Engineering' },
    // TO DO: too long not fit in smartphone screen
    // { id: 'environmentalScience', label: 'Environmental Science' },
    { id: 'gameDesign', label: 'Game Design' },
    // { id: 'mathematicsStatistics', label: 'Mathematics & Statistics' },
    { id: 'neuroscience', label: 'Neuroscience' },
    { id: 'physics', label: 'Physics' },
  ];