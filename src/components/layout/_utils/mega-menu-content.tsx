import { AnimatePresence, motion } from 'framer-motion';
import React from 'react'
import { Star } from 'lucide-react';
type ContentSection = {
  id: string;
  title: string;
  description: string;
  items: Array<{
    title: string;
    description: string;
    image?: string;
    tag?: string;
  }>;
}

const contentSections: ContentSection[] = [
  {
    id: 'templates',
    title: 'Premium Templates',
    description: 'Professional website templates for every need',
    items: [
      {
        title: 'Dashboard Templates',
        description: 'Modern admin dashboards and analytics interfaces',
        image: '',
        tag: 'Popular',
      },
      {
        title: 'Landing Pages',
        description: 'High-converting landing page designs',
        tag: 'New',
      },
      {
        title: 'E-commerce',
        description: 'Complete online store templates',
      },
      {
        title: 'SaaS Templates',
        description: 'Software-as-a-Service website designs',
      },
      {
        title: 'Portfolio Sites',
        description: 'Showcase your work with style',
      },
      {
        title: 'Blog Templates',
        description: 'Beautiful layouts for content creators',
      },
    ],
  },
  {
    id: 'components',
    title: 'UI Components',
    description: 'Ready-to-use components for faster development',
    items: [
      {
        title: 'Navigation',
        description: 'Headers, menus, and breadcrumbs',
        tag: 'Essential',
      },
      {
        title: 'Forms',
        description: 'Input fields, validation, and layouts',
      },
      {
        title: 'Data Display',
        description: 'Tables, cards, and lists',
      },
      {
        title: 'Modals & Overlays',
        description: 'Dialogs, tooltips, and popovers',
      },
      {
        title: 'Buttons',
        description: 'Various button styles and states',
      },
      {
        title: 'Charts',
        description: 'Data visualization components',
        tag: 'Pro',
      },
    ],
  },
  {
    id: 'design',
    title: 'Design System',
    description: 'Consistent design tokens and guidelines',
    items: [
      {
        title: 'Color Palette',
        description: 'Carefully crafted color schemes',
      },
      {
        title: 'Typography',
        description: 'Font pairings and text styles',
      },
      {
        title: 'Spacing',
        description: 'Consistent spacing and layout rules',
      },
      {
        title: 'Icons',
        description: 'Complete icon library',
        tag: '500+',
      },
      {
        title: 'Illustrations',
        description: 'Custom SVG illustrations',
      },
      {
        title: 'Brand Kit',
        description: 'Logo variations and brand assets',
      },
    ],
  },
  {
    id: 'tools',
    title: 'Developer Tools',
    description: 'Boost your productivity with these tools',
    items: [
      {
        title: 'Design Tokens',
        description: 'Export design tokens for development',
        tag: 'Beta',
      },
      {
        title: 'Code Generator',
        description: 'Generate React components from designs',
      },
      {
        title: 'Theme Builder',
        description: 'Create custom themes easily',
      },
      {
        title: 'Asset Optimizer',
        description: 'Optimize images and assets',
      },
      {
        title: 'Style Guide',
        description: 'Generate living style guides',
      },
      {
        title: 'Figma Plugin',
        description: 'Seamless Figma integration',
        tag: 'New',
      },
    ],
  },
  {
    id: 'community',
    title: 'Community',
    description: 'Connect with designers and developers',
    items: [
      {
        title: 'Showcases',
        description: 'Featured community projects',
        tag: 'Featured',
      },
      {
        title: 'Discussions',
        description: 'Join design and development talks',
      },
      {
        title: 'Resources',
        description: 'Free resources and tutorials',
      },
      {
        title: 'Events',
        description: 'Workshops and meetups',
        tag: 'Live',
      },
      {
        title: 'Contributors',
        description: 'Meet our community contributors',
      },
      {
        title: 'Feedback',
        description: 'Share your ideas and suggestions',
      },
    ],
  },
];
const MegaMenuContent = ({ activeTab }: { activeTab: string }) => {
  const activeSection = contentSections[0];
  return (
    <AnimatePresence>
      {activeTab && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="absolute top-full left-0 w-full bg-white border-b border-t border-border shadow-lg z-50"
        >
          <div className="max-w-7xl mx-auto px-6 py-8">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1, duration: 0.3 }}
            >
              <div className="mb-6">
                <h2 className="mb-2">{activeSection.title}</h2>
                <p className="text-muted-foreground">{activeSection.description}</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {activeSection.items.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 + index * 0.05, duration: 0.3 }}
                    className="group cursor-pointer"
                  >
                    <div className="p-4 rounded-lg border border-border hover:border-primary/20 hover:shadow-sm transition-all duration-200">
                      {item.image && (
                        <div className="mb-3 rounded-lg overflow-hidden bg-muted">
                          {/* <ImageWithFallback
                            src={item.image}
                            alt={item.title}
                            className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-200"
                          /> */}
                        </div>
                      )}

                      <div className="flex items-start justify-between mb-2">
                        <h4 className="group-hover:text-primary transition-colors duration-200">
                          {item.title}
                        </h4>
                        {item.tag && (
                          <span className="px-2 py-1 text-xs bg-primary text-primary-foreground rounded-full">
                            {item.tag}
                          </span>
                        )}
                      </div>

                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-border">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <button className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200">
                      View all {activeSection.title.toLowerCase()}
                    </button>
                    <span className="text-muted-foreground">•</span>
                    <button className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200">
                      Documentation
                    </button>
                  </div>

                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <Star className="w-4 h-4 fill-current text-yellow-400" />
                    <span>4.9 (2.1k reviews)</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default MegaMenuContent