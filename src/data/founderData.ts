export interface Founder {
  id: number;
  name: string;
  role: string;
  bio: string;
  image: string;
}

const founderData: Founder[] = [
  {
    id: 1,
    name: "Aditya Sharma",
    role: "Founder & CEO",
    bio: "Coffee enthusiast and astrology expert with over 10 years of experience in the coffee industry. Aditya combined his passion for coffee and astrology to create Zodiac Brew.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
  },
  {
    id: 2,
    name: "Priya Patel",
    role: "Co-Founder & Head Barista",
    bio: "Award-winning barista with a background in psychology. Priya developed our unique coffee blends tailored to each zodiac sign's personality traits.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
  },
  {
    id: 3,
    name: "Rahul Kapoor",
    role: "CTO & AI Specialist",
    bio: "Tech innovator with expertise in AI and facial recognition. Rahul developed our mood detection system that helps recommend the perfect coffee based on your current emotional state.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
  },
  {
    id: 4,
    name: "Neha Gupta",
    role: "Creative Director",
    bio: "Former graphic designer with a passion for astrology. Neha is responsible for our brand identity and creating the unique visual experience at Zodiac Brew.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
  }
];

export default founderData;