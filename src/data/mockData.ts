import { College, ChatSession } from '../types';

export const mockColleges: College[] = [
  {
    id: '1',
    name: 'Indian Institute of Technology Bombay',
    location: 'Powai, Mumbai',
    city: 'Mumbai',
    state: 'Maharashtra',
    rating: 4.8,
    fees: '₹2.5L/year',
    course: 'BTech CSE',
    placements: '₹45L avg',
    image: 'https://images.pexels.com/photos/1438081/pexels-photo-1438081.jpeg?auto=compress&cs=tinysrgb&w=400',
    website: 'https://iitb.ac.in',
    established: 1958,
    type: 'Government',
    nirf_ranking: 1
  },
  {
    id: '2',
    name: 'Veermata Jijabai Technological Institute',
    location: 'Matunga, Mumbai',
    city: 'Mumbai',
    state: 'Maharashtra',
    rating: 4.5,
    fees: '₹1.2L/year',
    course: 'BTech CSE',
    placements: '₹18L avg',
    image: 'https://images.pexels.com/photos/1438081/pexels-photo-1438081.jpeg?auto=compress&cs=tinysrgb&w=400',
    website: 'https://vjti.ac.in',
    established: 1887,
    type: 'Government'
  },
  {
    id: '3',
    name: 'Sardar Patel Institute of Technology',
    location: 'Andheri, Mumbai',
    city: 'Mumbai',
    state: 'Maharashtra',
    rating: 4.3,
    fees: '₹3.8L/year',
    course: 'BTech CSE',
    placements: '₹12L avg',
    image: 'https://images.pexels.com/photos/1438081/pexels-photo-1438081.jpeg?auto=compress&cs=tinysrgb&w=400',
    website: 'https://spit.ac.in',
    established: 1962,
    type: 'Private'
  },
  {
    id: '4',
    name: 'DJ Sanghavi College of Engineering',
    location: 'Vile Parle, Mumbai',
    city: 'Mumbai',
    state: 'Maharashtra',
    rating: 4.2,
    fees: '₹2.1L/year',
    course: 'BTech CSE',
    placements: '₹8L avg',
    image: 'https://images.pexels.com/photos/1438081/pexels-photo-1438081.jpeg?auto=compress&cs=tinysrgb&w=400',
    website: 'https://djsce.ac.in',
    established: 1994,
    type: 'Private'
  }
];

export const mockChatSessions: ChatSession[] = [
  {
    id: '1',
    title: 'Best colleges in Mumbai for CSE',
    messages: [],
    lastActivity: new Date(Date.now() - 1000 * 60 * 30) // 30 minutes ago
  },
  {
    id: '2',
    title: 'Engineering colleges under 5L fees',
    messages: [],
    lastActivity: new Date(Date.now() - 1000 * 60 * 60 * 2) // 2 hours ago
  },
  {
    id: '3',
    title: 'Top rated colleges in Delhi',
    messages: [],
    lastActivity: new Date(Date.now() - 1000 * 60 * 60 * 24) // 1 day ago
  }
];

export const quickFilters = [
  { id: 'course', label: 'Course', options: ['BTech CSE', 'BTech ECE', 'BTech Mech', 'MBA', 'BBA'] },
  { id: 'city', label: 'City', options: ['Mumbai', 'Delhi', 'Bangalore', 'Pune', 'Chennai'] },
  { id: 'fees', label: 'Fees', options: ['Under 2L', '2L-5L', '5L-10L', 'Above 10L'] },
  { id: 'type', label: 'Type', options: ['Government', 'Private', 'Deemed'] }
];

export const suggestedQueries = [
  "Best engineering colleges in Mumbai 🏗️",
  "Affordable MBA colleges under 5L 💰",
  "Top rated colleges for Computer Science 💻",
  "Colleges with highest placements 📈",
  "Best private universities in Delhi 🎓"
];