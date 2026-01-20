"use client";
import React from "react";
import { motion } from "framer-motion";
import { InView } from "@/components/motion-primitives/in-view";
import { ExternalLink, Github } from "lucide-react";

interface Project {
  title: string;
  description: string;
  team: string[];
  githubUrl?: string;
  demoUrl?: string;
  gradient: string;
}

interface FeaturedProjectsProps {
  projects?: Project[];
  viewAllUrl?: string;
}

const defaultProjects: Project[] = [
  {
    title: "Example Project One",
    description: "SoundWatch provides autonomous vessels with the sense of hearing. We developed a CNN-based classifier (AudioResNet-18) that detects and interprets COLREGs whistle signals in real-time, specifically designed to operate in noisy maritime environments.",
    team: ["Theo W.", "Toki T.", "Lassi R."],
    gradient: "from-blue-500/10",
  },
  {
    title: "Example Project Two",
    description: "Automated document understanding system that extracts insights from complex business documents.",
    team: ["John D.", "Emma W."],
    gradient: "from-purple-500/10",
  },
  {
    title: "Example Project Three",
    description: "Natural language programming interface that converts spoken instructions into production-ready code.",
    team: ["Alex R.", "Chris B.", "Jordan P.", "Kim S."],
    githubUrl: "https://github.com",
    gradient: "from-green-500/10",
  },
  {
    title: "Example Project Four",
    description: "Real-time business intelligence platform powered by machine learning for data-driven decisions.",
    team: ["Maria G.", "David L."],
    demoUrl: "https://demo.example.com",
    gradient: "from-orange-500/10",
  },
];

export const FeaturedProjects: React.FC<FeaturedProjectsProps> = ({
  projects = defaultProjects,
  viewAllUrl = "#",
}) => {
  return (
    <section className="py-32 md:py-40 px-6">
      <div className="max-w-7xl mx-auto">
        <InView
          variants={{
            hidden: { opacity: 0, y: 40 },
            visible: { opacity: 1, y: 0 },
          }}
          viewOptions={{ margin: "0px 0px -100px 0px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          once
        >
          <div className="flex flex-col items-center gap-8 mb-24">
            <div className="text-xs md:text-sm font-medium text-neutral-500 tracking-wider">
              Featured Projects
            </div>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-center leading-[1.1] tracking-tight text-white max-w-4xl">
              Built by our
              <br />
              <span className="bg-gradient-to-b from-white to-neutral-500 bg-clip-text text-transparent">community.</span>
            </h2>
          </div>
        </InView>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <InView
              key={project.title}
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0 },
              }}
              viewOptions={{ margin: "0px 0px -50px 0px" }}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.1,
                ease: [0.22, 1, 0.36, 1]
              }}
              once
            >
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="group relative h-full overflow-hidden rounded-2xl transition-all duration-500 border border-white/5 hover:border-white/10"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                
                <div className="relative p-10 md:p-12 flex flex-col gap-8 h-full">
                  <div className="flex-1 space-y-5">
                    <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
                      {project.title}
                    </h3>
                    <p className="text-neutral-400 font-normal leading-relaxed text-base">
                      {project.description}
                    </p>
                  </div>
                  
                  <div className="flex flex-col gap-4">
                    <div className="flex flex-wrap gap-2">
                      {project.team.map((member) => (
                        <span
                          key={member}
                          className="text-xs text-neutral-600 font-medium px-3 py-1 rounded-full bg-white/5"
                        >
                          {member}
                        </span>
                      ))}
                    </div>
                    
                    {(project.githubUrl || project.demoUrl) && (
                      <div className="flex items-center gap-4 pt-2">
                        {project.githubUrl && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-sm text-neutral-500 hover:text-white transition-colors duration-300"
                            aria-label={`View ${project.title} on GitHub`}
                          >
                            <Github className="w-4 h-4" />
                            <span>GitHub</span>
                          </a>
                        )}
                        {project.demoUrl && (
                          <a
                            href={project.demoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-sm text-neutral-500 hover:text-white transition-colors duration-300"
                            aria-label={`View ${project.title} demo`}
                          >
                            <ExternalLink className="w-4 h-4" />
                            <span>Demo</span>
                          </a>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            </InView>
          ))}
        </div>

        <InView
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          viewOptions={{ margin: "0px 0px -50px 0px" }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          once
        >
          <div className="flex justify-center mt-16">
            <a
              href={viewAllUrl}
              className="inline-flex items-center gap-2 text-neutral-500 hover:text-white font-medium transition-colors duration-300 group text-sm"
            >
              <span>View more projects</span>
              <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </a>
          </div>
        </InView>
      </div>
    </section>
  );
};

export default FeaturedProjects;
