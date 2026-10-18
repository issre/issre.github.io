import React from 'react';
import {
  Trophy,
  Medal,
  Award,
  ExternalLink,
  X,
  BookOpen,
  Calendar,
  Users,
  Code2,
  FileCheck,
  Building,
  ChevronRight,
  Star
} from 'lucide-react';
import { SCNewsItem } from './types';

interface Awards2026ModalProps {
  news: SCNewsItem;
  onClose: () => void;
  onNavigate?: (tab: 'home' | 'editions' | 'awards' | 'committees' | 'documents' | 'hosting', filter?: string) => void;
}

export const ISSRE_2026_AWARDS_DATA = {
  testOfTime: [
    {
      id: 'tot-2026-w',
      title: 'Experience Report: System Log Analysis for Anomaly Detection',
      authors: ['Shilin He', 'Jieming Zhu', 'Pinjia He', 'Michael R. Lyu'],
      venue: 'ISSRE 2016',
      isWinner: true,
      doi: '10.1109/ISSRE.2016.21',
      paperUrl: 'https://doi.org/10.1109/ISSRE.2016.21',
      badge: 'Test of Time Award Winner',
      description: 'Recognized for 10-year enduring impact in automated log-based anomaly detection benchmarks, methodology, and practical tooling.'
    },
    {
      id: 'tot-2026-ru',
      title: 'Anomaly Detection and Root Cause Localization in Virtual Network Functions',
      authors: ['Carla Sauvanaud', 'Kahina Lazri', 'Mohamed Kaâniche', 'Karama Kanoun'],
      venue: 'ISSRE 2016',
      isRunnerUp: true,
      doi: '10.1109/ISSRE.2016.32',
      paperUrl: 'https://doi.org/10.1109/ISSRE.2016.32',
      badge: 'Test of Time Runner-Up',
      description: 'Recognized for pioneering contributions to machine learning-based root cause localization and SLA protection in virtualized networks.'
    }
  ],
  researchTrack: [
    {
      id: 'rp-1',
      title: 'Calibration Without Comprehension: Diagnosing the Limits of Fine-Tuning LLMs for Vulnerability Detection in Systems Software',
      authors: ['Arastoo Zibaeirad', 'Marco Vieira'],
      track: 'Research Track'
    },
    {
      id: 'rp-2',
      title: 'ProvScope: A tool to assist cybersecurity analysts in identifying information flows in complex systems',
      authors: ['Loic Robert', 'Vincent Nicomette', 'Eric Lacombe', 'Marie-José Huguet', 'Emmanuel Hebrard'],
      track: 'Research Track'
    },
    {
      id: 'rp-3',
      title: 'Resilient Page Table Management under ECC-uncorrectable Memory Errors',
      authors: ['Kazuki Takeda', 'Hiroshi Yamada'],
      track: 'Research Track'
    },
    {
      id: 'rp-4',
      title: 'RotDroid: Cross-Orientation State Equivalence Testing for Detecting GUI Rotation Bugs in Android Apps',
      authors: ['Mengdi Qin', 'Bo Jiang'],
      track: 'Research Track'
    },
    {
      id: 'rp-5',
      title: 'When Agents Fail: A Comprehensive Study of Bugs in LLM Agents with Automated Labeling',
      authors: ['Niful Islam', 'Ragib Shahriar Ayon', 'Deepak George Thomas', 'Shibbir Ahmed', 'Mohammad Wardat'],
      track: 'Research Track'
    }
  ],
  reneTrack: [
    {
      id: 'rene-1',
      title: 'From Benchmark Accuracy to Diagnostic Boundaries: A Time-Aware Replication of DEST',
      authors: [
        'Hang Cui', 'Cenjie Hu', 'Changhua Pei', 'Juncheng Hu', 'Haotian Si',
        'Zihan Liu', 'Ke Xiang', 'Yuxuan Li', 'Quan Zhou', 'Xiaohui Nie',
        'Zexin Wang', 'Jingjing Li', 'Dan Pei', 'Gaogang Xie'
      ],
      track: 'RENE Track'
    }
  ],
  industryTrack: [
    {
      id: 'ind-1',
      title: 'Bridging the Mitigation Gap: A Taxonomy-Driven Empirical Study of Incident Recovery in Production LLM Serving',
      authors: ['Bhala Ranganathan', 'Minghua Ma'],
      track: 'Industry Track'
    },
    {
      id: 'ind-2',
      title: 'Making Deployments Safe at Meta: Health Checks for Continuous Change-Safety',
      authors: ['Prakash Kl', 'Anton Korenkov', 'Uttam Thakore', 'Christopher Hegre'],
      track: 'Industry Track'
    },
    {
      id: 'ind-3',
      title: 'The Prover Is the Judge: Verified Security Software from AI Coding Agents in Ada/SPARK',
      authors: ['Tobias Philipp'],
      track: 'Industry Track'
    }
  ],
  bestArtifact: [
    {
      id: 'art-1',
      title: 'SIEVE: Hybrid Hardware/Software Detection of Multi-Bit Errors in Random-Access Memory',
      authors: ['Robin Thunig', 'Christoph Borchert', 'Urs Kober', 'Horst Schirmeier'],
      track: 'Artifacts Track'
    }
  ],
  reviewersResearch: [
    { name: 'Andrea Bombarda', affiliation: 'University of Bergamo, Italy' },
    { name: 'Zitao Chen', affiliation: 'University of Kansas, USA' },
    { name: 'Diego Clerissi', affiliation: 'University of Milano – Bicocca, Italy' },
    { name: 'Raffaele Della Corte', affiliation: 'University of Naples Federico II, Italy' },
    { name: 'Jingzhi Gong', affiliation: 'King’s College London, UK' },
    { name: 'Wenwei Gu', affiliation: 'Nankai University, China' },
    { name: 'Yintong Huo', affiliation: 'Singapore Management University, Singapore' },
    { name: 'Giovanni Quattrocchi', affiliation: 'University of Milan, Italy' },
    { name: 'Drishti Yadav', affiliation: 'University of Luxembourg, Luxembourg' },
    { name: 'Shenglin Zhang', affiliation: 'Nankai University, China' }
  ],
  reviewersIndustry: [
    { name: 'Zhuangbin Chen', affiliation: 'Sun Yat-sen University, China' },
    { name: 'Muslim Chochlov', affiliation: 'Lero – The Irish Software Research Centre, Ireland' },
    { name: 'Fabrizio Pastore', affiliation: 'University of Luxembourg, Luxembourg' },
    { name: 'Uttam Thakore', affiliation: 'Meta, USA' }
  ]
};

export const Awards2026Modal: React.FC<Awards2026ModalProps> = ({ news, onClose, onNavigate }) => {
  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="awards-2026-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 bg-slate-950/75 backdrop-blur-md transition-opacity duration-300 animate-in fade-in"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white border border-slate-200/90 rounded-2xl max-w-4xl lg:max-w-5xl w-full max-h-[90vh] flex flex-col shadow-2xl overflow-hidden relative"
      >
        {/* Simple, Clean Header */}
        <div className="bg-white border-b border-slate-200/80 px-6 sm:px-8 pt-6 pb-4 relative flex-shrink-0">
          {/* Close Button */}
          <button
            onClick={onClose}
            aria-label="Close modal"
            className="absolute top-5 right-5 p-2 text-slate-400 hover:text-slate-800 hover:bg-slate-100 rounded-full transition-colors cursor-pointer"
          >
            <X size={20} />
          </button>

          <div className="pr-12">
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-md bg-blue-100 text-blue-800">
                {news.category || 'Announcement'}
              </span>
              <span className="text-xs text-slate-400 font-semibold flex items-center gap-1">
                <Calendar size={12} /> {new Date(news.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
              </span>
            </div>

            <h2 id="awards-2026-title" className="font-serif text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              ISSRE 2026 Awards
            </h2>

            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Official awards announced at the 37th IEEE International Symposium on Software Reliability Engineering.
            </p>
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div className="overflow-y-auto flex-1 p-5 sm:p-6 md:p-8 space-y-8 bg-slate-50/40">
          {/* SECTION 1: Test of Time Awards */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 pb-2 border-b border-slate-200">
              <div className="w-8 h-8 rounded-lg bg-amber-500/10 text-amber-600 flex items-center justify-center">
                <Trophy size={18} />
              </div>
              <div>
                <h3 className="font-serif text-xl font-bold text-slate-900">
                  Test of Time
                </h3>
                <p className="text-xs text-slate-500">
                  Honoring papers from ISSRE 2016 that have demonstrated lasting influence over the past decade (2016–2026).
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4">
              {/* Winner */}
              {ISSRE_2026_AWARDS_DATA.testOfTime.filter(a => a.isWinner).map(award => (
                <div
                  key={award.id}
                  className="p-6 rounded-2xl bg-gradient-to-br from-amber-50/70 via-white to-amber-50/30 border-2 border-amber-300/80 shadow-sm hover:shadow-md transition-all duration-200 relative group overflow-hidden"
                >
                  <div className="absolute top-0 right-0">
                    <div className="bg-gradient-to-r from-amber-500 to-amber-600 text-white text-[10px] font-bold uppercase tracking-widest px-4 py-1.5 rounded-bl-xl shadow-sm flex items-center gap-1.5">
                      <Trophy size={12} /> {award.badge}
                    </div>
                  </div>

                  <div className="pr-40 mb-3">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-amber-700 bg-amber-100/80 px-2.5 py-0.5 rounded-md">
                      {award.venue}
                    </span>
                    <h4 className="font-serif text-xl sm:text-2xl font-bold text-slate-900 mt-2 leading-snug group-hover:text-primary transition-colors">
                      {award.title}
                    </h4>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-3">
                    {award.authors.map((author, idx) => (
                      <span
                        key={idx}
                        className="inline-flex items-center gap-1 text-xs font-semibold text-slate-700 bg-white/90 border border-amber-200 px-2.5 py-1 rounded-lg"
                      >
                        <Users size={12} className="text-amber-600" /> {author}
                      </span>
                    ))}
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                    {award.description}
                  </p>

                  <div className="flex flex-wrap items-center gap-3 pt-3 border-t border-amber-200/60">
                    {award.paperUrl && (
                      <a
                        href={award.paperUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-primary hover:text-accent bg-white border border-slate-200 hover:border-accent px-3 py-1.5 rounded-lg transition-colors shadow-2xs"
                      >
                        <BookOpen size={13} /> View on IEEE Xplore <ExternalLink size={12} />
                      </a>
                    )}
                    <span className="text-[11px] font-mono text-slate-400">
                      DOI: {award.doi}
                    </span>
                  </div>
                </div>
              ))}

              {/* Runner-Up */}
              {ISSRE_2026_AWARDS_DATA.testOfTime.filter(a => a.isRunnerUp).map(award => (
                <div
                  key={award.id}
                  className="p-6 rounded-2xl bg-white border border-slate-300/80 shadow-sm hover:shadow-md transition-all duration-200 relative group overflow-hidden"
                >
                  <div className="absolute top-0 right-0">
                    <div className="bg-slate-700 text-white text-[10px] font-bold uppercase tracking-widest px-4 py-1.5 rounded-bl-xl shadow-sm flex items-center gap-1.5">
                      <Medal size={12} /> {award.badge}
                    </div>
                  </div>

                  <div className="pr-36 mb-3">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-600 bg-slate-100 px-2.5 py-0.5 rounded-md">
                      {award.venue}
                    </span>
                    <h4 className="font-serif text-lg sm:text-xl font-bold text-slate-900 mt-2 leading-snug group-hover:text-primary transition-colors">
                      {award.title}
                    </h4>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-3">
                    {award.authors.map((author, idx) => (
                      <span
                        key={idx}
                        className="inline-flex items-center gap-1 text-xs font-semibold text-slate-700 bg-slate-50 border border-slate-200 px-2.5 py-1 rounded-lg"
                      >
                        <Users size={12} className="text-slate-500" /> {author}
                      </span>
                    ))}
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                    {award.description}
                  </p>

                  <div className="flex flex-wrap items-center gap-3 pt-3 border-t border-slate-100">
                    {award.paperUrl && (
                      <a
                        href={award.paperUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-primary hover:text-accent bg-white border border-slate-200 hover:border-accent px-3 py-1.5 rounded-lg transition-colors shadow-2xs"
                      >
                        <BookOpen size={13} /> View on IEEE Xplore <ExternalLink size={12} />
                      </a>
                    )}
                    <span className="text-[11px] font-mono text-slate-400">
                      DOI: {award.doi}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* SECTION 2: Research Track Distinguished Papers */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 pb-2 border-b border-slate-200">
              <div className="w-8 h-8 rounded-lg bg-blue-500/10 text-primary flex items-center justify-center">
                <Award size={18} />
              </div>
              <div>
                <h3 className="font-serif text-xl font-bold text-slate-900">
                  Research Track
                </h3>
                <p className="text-xs text-slate-500">
                  Recognizing five top-tier research contributions exhibiting exceptional methodological rigor, originality, and impact.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {ISSRE_2026_AWARDS_DATA.researchTrack.map((paper, idx) => (
                <div
                  key={paper.id}
                  className="p-5 rounded-2xl bg-white border border-slate-200 hover:border-primary/40 shadow-xs hover:shadow-md transition-all duration-200 flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-2.5">
                      <span className="text-[10px] font-bold uppercase tracking-widest text-primary bg-primary/10 px-2.5 py-0.5 rounded-md">
                        Distinguished Paper
                      </span>
                      <span className="text-xs font-bold text-slate-300 font-mono">
                        #{idx + 1}
                      </span>
                    </div>
                    <h4 className="font-serif text-base sm:text-lg font-bold text-slate-900 leading-snug group-hover:text-primary transition-colors mb-3">
                      {paper.title}
                    </h4>
                  </div>

                  <div className="pt-3 border-t border-slate-100 mt-2">
                    <div className="flex items-start gap-1.5">
                      <Users size={13} className="text-slate-400 flex-shrink-0 mt-0.5" />
                      <span className="text-xs text-slate-600 font-medium leading-relaxed">
                        {paper.authors.join(', ')}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* SECTION 3: RENE Track & Industry Track */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* RENE Track */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 pb-2 border-b border-slate-200">
                <div className="w-8 h-8 rounded-lg bg-purple-500/10 text-purple-600 flex items-center justify-center">
                  <FileCheck size={18} />
                </div>
                <div>
                  <h3 className="font-serif text-xl font-bold text-slate-900">
                    RENE Track
                  </h3>
                  <p className="text-xs text-slate-500">
                    Replications & Negative Results Track
                  </p>
                </div>
              </div>

              {ISSRE_2026_AWARDS_DATA.reneTrack.map(paper => (
                <div
                  key={paper.id}
                  className="p-5 rounded-2xl bg-white border border-purple-200/80 shadow-xs hover:shadow-md transition-all duration-200 group"
                >
                  <div className="flex items-center justify-between mb-2.5">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-purple-700 bg-purple-100 px-2.5 py-0.5 rounded-md">
                      Distinguished Paper
                    </span>
                  </div>
                  <h4 className="font-serif text-base sm:text-lg font-bold text-slate-900 leading-snug group-hover:text-primary transition-colors mb-3">
                    {paper.title}
                  </h4>
                  <div className="pt-3 border-t border-slate-100">
                    <div className="flex items-start gap-1.5">
                      <Users size={13} className="text-slate-400 flex-shrink-0 mt-0.5" />
                      <span className="text-xs text-slate-600 font-medium leading-relaxed">
                        {paper.authors.join(', ')}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Industry Track */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 pb-2 border-b border-slate-200">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/10 text-emerald-600 flex items-center justify-center">
                  <Building size={18} />
                </div>
                <div>
                  <h3 className="font-serif text-xl font-bold text-slate-900">
                    Industry Track
                  </h3>
                  <p className="text-xs text-slate-500">
                    Demonstrating high-impact solutions, real-world deployment lessons, and industrial practices.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-4">
                {ISSRE_2026_AWARDS_DATA.industryTrack.map((paper, idx) => (
                  <div
                    key={paper.id}
                    className="p-5 rounded-2xl bg-white border border-emerald-200/80 shadow-xs hover:shadow-md transition-all duration-200 group"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-800 bg-emerald-100 px-2.5 py-0.5 rounded-md">
                        Distinguished Paper
                      </span>
                      <span className="text-xs font-bold text-slate-300 font-mono">
                        #{idx + 1}
                      </span>
                    </div>
                    <h4 className="font-serif text-base sm:text-lg font-bold text-slate-900 leading-snug group-hover:text-primary transition-colors mb-3">
                      {paper.title}
                    </h4>
                    <div className="pt-2.5 border-t border-slate-100">
                      <div className="flex items-start gap-1.5">
                        <Users size={13} className="text-slate-400 flex-shrink-0 mt-0.5" />
                        <span className="text-xs text-slate-600 font-medium leading-relaxed">
                          {paper.authors.join(', ')}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* SECTION 4: Best Artifact Award */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 pb-2 border-b border-slate-200">
              <div className="w-8 h-8 rounded-lg bg-cyan-500/10 text-cyan-700 flex items-center justify-center">
                <Code2 size={18} />
              </div>
              <div>
                <h3 className="font-serif text-xl font-bold text-slate-900">
                  Artifacts
                </h3>
                <p className="text-xs text-slate-500">
                  Recognizing outstanding reproducibility, open science commitment, and reusable tooling.
                </p>
              </div>
            </div>

            {ISSRE_2026_AWARDS_DATA.bestArtifact.map(art => (
              <div
                key={art.id}
                className="p-6 rounded-2xl bg-gradient-to-br from-cyan-50/50 via-white to-blue-50/40 border border-cyan-200 shadow-sm hover:shadow-md transition-all duration-200 group"
              >
                <div className="flex items-center gap-2 mb-2.5">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-cyan-800 bg-cyan-100 px-2.5 py-0.5 rounded-md">
                    Best Artifact Award
                  </span>
                  <span className="text-xs text-slate-400">• Research Reproducibility</span>
                </div>

                <h4 className="font-serif text-lg sm:text-xl font-bold text-slate-900 leading-snug group-hover:text-primary transition-colors mb-3">
                  {art.title}
                </h4>

                <div className="flex flex-wrap gap-2 pt-2 border-t border-cyan-100">
                  {art.authors.map((author, idx) => (
                    <span
                      key={idx}
                      className="inline-flex items-center gap-1 text-xs font-semibold text-slate-700 bg-white border border-cyan-200 px-2.5 py-1 rounded-lg"
                    >
                      <Users size={12} className="text-cyan-700" /> {author}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* SECTION 5: Distinguished Reviewers */}
          <div className="space-y-5">
            <div className="flex items-center gap-2 pb-2 border-b border-slate-200">
              <div className="w-8 h-8 rounded-lg bg-amber-500/10 text-amber-600 flex items-center justify-center">
                <Star size={18} />
              </div>
              <div>
                <h3 className="font-serif text-xl font-bold text-slate-900">
                  Distinguished Reviewers
                </h3>
                <p className="text-xs text-slate-500">
                  Acknowledging program committee members who provided consistently constructive, timely, and high-quality peer reviews.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Research Track Reviewers */}
              <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-2xs">
                <div className="flex items-center gap-2 mb-4 pb-2 border-b border-slate-100">
                  <span className="text-xs font-bold uppercase tracking-wider text-primary bg-primary/10 px-2.5 py-1 rounded-md">
                    Research Track ({ISSRE_2026_AWARDS_DATA.reviewersResearch.length})
                  </span>
                </div>
                <div className="space-y-2.5">
                  {ISSRE_2026_AWARDS_DATA.reviewersResearch.map((rev, idx) => (
                    <div
                      key={idx}
                      className="p-2.5 rounded-xl bg-slate-50/80 hover:bg-slate-100/80 transition-colors flex items-start gap-2.5"
                    >
                      <div className="w-6 h-6 rounded-full bg-primary/10 text-primary text-[10px] font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                        {rev.name.charAt(0)}
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="text-xs font-bold text-slate-900 truncate">
                          {rev.name}
                        </p>
                        <p className="text-[11px] text-slate-500 leading-snug">
                          {rev.affiliation}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Industry Track Reviewers */}
              <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-2xs">
                <div className="flex items-center gap-2 mb-4 pb-2 border-b border-slate-100">
                  <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-100 px-2.5 py-1 rounded-md">
                    Industry Track ({ISSRE_2026_AWARDS_DATA.reviewersIndustry.length})
                  </span>
                </div>
                <div className="space-y-2.5">
                  {ISSRE_2026_AWARDS_DATA.reviewersIndustry.map((rev, idx) => (
                    <div
                      key={idx}
                      className="p-2.5 rounded-xl bg-slate-50/80 hover:bg-slate-100/80 transition-colors flex items-start gap-2.5"
                    >
                      <div className="w-6 h-6 rounded-full bg-emerald-500/10 text-emerald-700 text-[10px] font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                        {rev.name.charAt(0)}
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="text-xs font-bold text-slate-900 truncate">
                          {rev.name}
                        </p>
                        <p className="text-[11px] text-slate-500 leading-snug">
                          {rev.affiliation}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="bg-white border-t border-slate-200 px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-3 flex-shrink-0">
          <div className="flex items-center gap-2">
            {onNavigate && (
              <button
                onClick={() => {
                  onNavigate('awards');
                  onClose();
                }}
                className="text-xs font-bold text-slate-700 hover:text-primary inline-flex items-center gap-1.5 transition-colors cursor-pointer py-1.5 px-3 rounded-lg hover:bg-slate-100"
              >
                <Trophy size={14} className="text-accent" /> Explore All-Time Hall of Fame <ChevronRight size={13} />
              </button>
            )}
          </div>

          <div className="flex items-center gap-2.5 w-full sm:w-auto justify-end">
            <a
              href={news.link || 'https://cyprusconferences.org/issre2026/awards/'}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-xs !py-2.5 !px-5 inline-flex items-center gap-2 shadow-sm"
            >
              Official ISSRE 2026 Awards Page <ExternalLink size={13} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
