// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE_TITLE = 'Eduware India';
export const SITE_DESCRIPTION = 'Your ultimate destination for competitive exam preparation. Master SSC, RRB, Banking, UPSC, and other government exams with mock tests, study materials, and expert guidance.';
export const SITE_URL = 'https://eduwareindia.vercel.app';
export const SITE_AUTHOR = 'Abhay Patel';
export const CONTACT_EMAIL = 'patelabhay550@gmail.com';
export const GITHUB_URL = 'https://github.com/PatelAbhay550';

// Categories for competitive exams
export const CATEGORIES = [
  'SSC Exams',
  'Banking Exams', 
  'Railway Exams',
  'UPSC Exams',
  'State PSC',
  'Police Exams',
  'Insurance Exams',
  'Teaching Exams',
  'RRB Exams',
  'algorithms',
  'NCERT',
  'Class 12',
  'Class 11',
  'Class 10',
  'Class 9'
] as const;

export type Category = typeof CATEGORIES[number];
