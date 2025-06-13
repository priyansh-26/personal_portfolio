import { ArrowRight, Github } from "lucide-react";
import chatAppImage from "../assets/chatApp.jpg";
import expenseTrackerImage from "../assets/expenseTracker.jpg";
import vCardImage from "../assets/vCard.jpg";

const projects = [
  {
    id: 1,
    title: "RealTime ChatApp",
    description:
      "A sleek, real-time chat app built with Flutter and powered by Appwrite for seamless messaging and scalability.",
    image: chatAppImage,
    tags: ["Flutter", "Appwrite", "FCM"],
    githubUrl: "https://github.com/priyansh-26/realtime_chatapp",
  },
  {
    id: 2,
    title: "Expense Tracker App",
    description:
      "A clean and intuitive expense tracker app built with Flutter and Sqflite for efficient local data management.",
    image: expenseTrackerImage,
    tags: ["Flutter", "SQFLite"],
    githubUrl: "https://github.com/priyansh-26/expense_tracker",
  },
  {
    id: 3,
    title: "Virtual Card Holder",
    description:
      "A secure virtual card holder app built with Flutter and Sqflite for seamless offline card management.",
    image: vCardImage,
    tags: ["Flutter", "SQFLite"],
    githubUrl: "https://github.com/priyansh-26/v_card_app",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary">Projects</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              {/* Image with gradient overlay and title */}
              <div className="relative h-[400px] overflow-hidden rounded-t-lg">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10" />
                <h3 className="absolute bottom-4 left-4 z-20 text-white text-xl font-semibold">
                  {project.title}
                </h3>
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/priyansh-26"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
