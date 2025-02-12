import { createRoute } from '../types/navigation';

export const DASHBOARD_ITEMS = [
  {
    label: "Student Involvement",
    route: createRoute("studentInvolvement"),
    image: require("../assets/images/students.jpg"),
    backgroundColor: "#27418b"
  },
  {
    label: "Tutoring & Support",
    route: createRoute("tutoringSupport"),
    image: require("../assets/images/tutoring.jpg"),
    backgroundColor: "#c03d3e"
  },
  {
    label: "Internships",
    route: createRoute("internships"),
    image: require("../assets/images/research.jpg"),
    backgroundColor: "#27418b"
  },
  {
    label: "Research Opportunities",
    route: createRoute("research"),
    image: require("../assets/images/research.jpg"),
    backgroundColor: "#c03d3e"
  },
  {
    label: "Scholarships",
    route: createRoute("scholarships"),
    image: require("../assets/images/general.jpg"),
    backgroundColor: "#27418b"
  },
  {
    label: "Connect",
    route: createRoute("connect"),
    image: require("../assets/images/connect.jpg"),
    backgroundColor: "#c03d3e"
  }
] as const;