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
    <section className="py-24 md:py-32 px-4">
      <div className="max-w-6xl mx-auto">
        <InView
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0 },
          }}
          viewOptions={{ margin: "0px 0px -100px 0px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          once
        >
          <div className="flex flex-col items-center gap-6 mb-16">
            <div className="text-sm font-medium text-white/50 uppercase tracking-[0.3em]">
              Featured Projects
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-center leading-tight text-white max-w-4xl">
              Built by our
              <br />
              <span className="text-white/70">community.</span>
            </h2>
          </div>
        </InView>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <InView
              key={project.title}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              viewOptions={{ margin: "0px 0px -50px 0px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              once
            >
              <motion.div
                whileHover={{ scale: 1.01 }}
                transition={{ duration: 0.3 }}
                className="group relative h-full overflow-hidden rounded-3xl backdrop-blur-xl transition-all duration-500"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                <div className="relative p-8 md:p-10 flex flex-col gap-6 h-full">
                  <div className="flex-1 space-y-4">
                    <h3 className="text-xl md:text-2xl font-medium text-white">
                      {project.title}
                    </h3>
                    <p className="text-white/60 font-light leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                  
                  <div className="flex flex-col gap-4">
                    <div className="flex flex-wrap gap-2">
                      {project.team.map((member) => (
                        <span
                          key={member}
                          className="text-xs text-white/40 font-light"
                        >
                          {member}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex items-center gap-4 pt-2">
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-sm text-white/50 hover:text-white transition-colors duration-200"
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
                          className="inline-flex items-center gap-2 text-sm text-white/50 hover:text-white transition-colors duration-200"
                          aria-label={`View ${project.title} demo`}
                        >
                          <ExternalLink className="w-4 h-4" />
                          <span>Demo</span>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            </InView>
          ))}
        </div>

        <InView
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1 },
          }}
          viewOptions={{ margin: "0px 0px -50px 0px" }}
          transition={{ duration: 0.5, delay: 0.4 }}
          once
        >
          <div className="flex justify-center mt-12">
            <a
              href={viewAllUrl}
              className="inline-flex items-center gap-2 text-white/60 hover:text-white font-light transition-colors duration-200 group"
            >
              <span>More</span>
              <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
            </a>
          </div>
        </InView>
      </div>
    </section>
  );
};

export default FeaturedProjects;
