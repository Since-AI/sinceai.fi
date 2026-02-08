"use client";
import React from "react";
import SmoothScroll from "@/components/smoothScroll";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/sections/Footer";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { blogPosts } from "@/lib/blog";
import { getBlogSchema } from "@/lib/schema";

export default function BlogPage() {
  const blogSchema = getBlogSchema();

  return (
    <SmoothScroll>
      <Navbar />

      {/* JSON-LD structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
      />

      <main className="flex flex-col w-full bg-black min-h-screen">
        {/* Hero */}
        <section className="relative w-full px-6 py-24 md:py-32">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight">
                Blog
              </h1>
              <p className="text-xl md:text-2xl text-neutral-400 max-w-2xl mx-auto">
                Guides and playbooks from the Since AI community.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Blog Cards */}
        <section className="relative w-full px-6 py-16 border-t border-white/5">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {blogPosts.map((post, index) => (
                <motion.a
                  key={post.slug}
                  href={post.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group flex flex-col justify-between p-8 md:p-10 rounded-3xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.04] hover:border-white/20 transition-all duration-300"
                >
                  {/* Tags */}
                  <div>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {post.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 text-xs font-medium text-neutral-300 bg-white/5 border border-white/10 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Title */}
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 tracking-tight group-hover:text-neutral-200 transition-colors">
                      {post.title}
                    </h2>

                    {/* Excerpt */}
                    <p className="text-base text-neutral-400 leading-relaxed mb-8">
                      {post.excerpt}
                    </p>
                  </div>

                  {/* CTA */}
                  <div className="flex items-center gap-2 text-white font-semibold group-hover:gap-3 transition-all duration-300">
                    <span>Read on Medium</span>
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </motion.a>
              ))}
            </div>
          </div>
        </section>

        {/* Follow CTA */}
        <section className="relative w-full px-6 py-24 border-t border-white/5">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">
                Follow us on Medium
              </h3>
              <p className="text-lg text-neutral-400 mb-8 max-w-xl mx-auto">
                More guides and insights from the Since AI community, published
                regularly.
              </p>
              <a
                href="https://medium.com/@sinceai"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 text-base font-semibold text-black bg-white rounded-full hover:bg-neutral-100 transition-all duration-300 group"
              >
                Follow on Medium
                <ArrowUpRight className="w-4 h-4 ml-2 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </SmoothScroll>
  );
}
