import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

const ResourcesPage: React.FC = () => {
  const countryGuides = [
    { country: 'Portugal', program: 'Golden Visa', investment: '€280,000', timeline: '6-8 months' },
    { country: 'Malta', program: 'Individual Investor Programme', investment: '€690,000', timeline: '12-14 months' },
    { country: 'Antigua & Barbuda', program: 'Citizenship by Investment', investment: '$100,000', timeline: '3-4 months' },
    { country: 'St. Kitts & Nevis', program: 'Citizenship by Investment', investment: '$150,000', timeline: '3-6 months' },
    { country: 'Singapore', program: 'Global Investor Programme', investment: '$2.5M', timeline: '6-12 months' },
    { country: 'United States', program: 'EB-5 Investor Visa', investment: '$800,000', timeline: '18-24 months' },
  ]

  const caseStudies = [
    {
      title: 'Tech Startup Expansion to Europe',
      client: 'Series B SaaS Company',
      challenge: 'Needed EU market access and founder visa solutions',
      solution: 'Portugal Golden Visa + subsidiary setup',
      outcome: '€50M Series C raised, 300% revenue growth',
    },
    {
      title: 'VC Fund Global Mobility',
      client: 'Tier 1 Venture Capital Fund',
      challenge: 'Partners needed citizenship options for global investing',
      solution: 'Malta IIP for 3 partners + family members',
      outcome: 'Expanded to 15 new markets, $500M fund raised',
    },
    {
      title: 'Family Office Diversification',
      client: 'Ultra-High-Net-Worth Family',
      challenge: 'Seeking citizenship diversification and tax optimization',
      solution: 'Multi-jurisdiction strategy with Caribbean citizenship',
      outcome: '40% tax savings, enhanced global mobility',
    },
  ]

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="hero-gradient py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-charcoal-green mb-6">
              Resources & <span className="text-sage">Insights</span>
            </h1>
            <p className="text-xl text-charcoal-green/70 leading-relaxed">
              Comprehensive guides, case studies, and insights to help you navigate the world of global mobility and investment migration.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Country Guides */}
      <section className="py-24 bg-off-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-charcoal-green mb-6">
              Country Guides
            </h2>
            <p className="text-xl text-charcoal-green/70 max-w-3xl mx-auto">
              Detailed information on the world's leading citizenship and residency by investment programs.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {countryGuides.map((guide, index) => (
              <motion.div
                key={guide.country}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="service-card p-6 rounded-2xl"
              >
                <h3 className="text-xl font-serif font-bold text-charcoal-green mb-2">
                  {guide.country}
                </h3>
                <p className="text-sage font-medium mb-4">{guide.program}</p>
                
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between">
                    <span className="text-charcoal-green/70">Investment</span>
                    <span className="font-semibold text-charcoal-green">{guide.investment}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-charcoal-green/70">Timeline</span>
                    <span className="font-semibold text-charcoal-green">{guide.timeline}</span>
                  </div>
                </div>
                
                <Link
                  href={`/resources/${guide.country.toLowerCase().replace(/\s+/g, '-')}`}
                  className="text-sage hover:text-forest font-medium transition-colors"
                >
                  Read Full Guide →
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section id="case-studies" className="py-24 bg-cream/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-charcoal-green mb-6">
              Case Studies
            </h2>
            <p className="text-xl text-charcoal-green/70 max-w-3xl mx-auto">
              Real success stories from our clients who have achieved their global mobility goals.
            </p>
          </motion.div>

          <div className="space-y-8">
            {caseStudies.map((study, index) => (
              <motion.div
                key={study.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-off-white p-8 rounded-2xl shadow-lg"
              >
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                  <div>
                    <h3 className="text-xl font-serif font-bold text-charcoal-green mb-2">
                      {study.title}
                    </h3>
                    <p className="text-sage font-medium">{study.client}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-charcoal-green mb-2">Challenge</h4>
                    <p className="text-charcoal-green/70 text-sm">{study.challenge}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-charcoal-green mb-2">Solution</h4>
                    <p className="text-charcoal-green/70 text-sm">{study.solution}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-charcoal-green mb-2">Outcome</h4>
                    <p className="text-forest font-medium text-sm">{study.outcome}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-off-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-charcoal-green mb-6">
              Frequently Asked Questions
            </h2>
          </motion.div>

          <div className="space-y-6">
            {[
              {
                question: 'What is citizenship by investment?',
                answer: 'Citizenship by investment (CBI) programs allow individuals to obtain citizenship in a country by making a qualifying investment, typically in real estate, government bonds, or business ventures.',
              },
              {
                question: 'How long does the process typically take?',
                answer: 'Processing times vary by program, ranging from 3-4 months for Caribbean programs to 12-18 months for European programs. We provide detailed timelines for each jurisdiction.',
              },
              {
                question: 'Can family members be included?',
                answer: 'Most programs allow inclusion of spouse, dependent children, and often dependent parents or grandparents. Each program has specific requirements for family inclusion.',
              },
              {
                question: 'What are the ongoing obligations?',
                answer: 'Requirements vary by program but may include minimum stay requirements, tax obligations, or investment maintenance. We ensure full compliance with all ongoing obligations.',
              },
              {
                question: 'Is dual citizenship allowed?',
                answer: 'This depends on your current citizenship and the target country. We provide comprehensive analysis of dual citizenship implications for your specific situation.',
              },
            ].map((faq, index) => (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-cream/30 p-6 rounded-lg"
              >
                <h3 className="text-lg font-semibold text-charcoal-green mb-3">
                  {faq.question}
                </h3>
                <p className="text-charcoal-green/70 leading-relaxed">
                  {faq.answer}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-cream/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-charcoal-green mb-6">
              Need Personalized Guidance?
            </h2>
            <p className="text-xl text-charcoal-green/70 mb-8 leading-relaxed">
              Our experts are ready to help you navigate your specific situation and find the optimal solution for your global mobility needs.
            </p>
            <Link href="/contact" className="btn-primary">
              Schedule a Consultation
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default ResourcesPage

