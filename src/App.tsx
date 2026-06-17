/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import {
  Trophy,
  Home,
  Users,
  ExternalLink,
  Award as AwardIcon,
  Calendar,
  MapPin,
  ChevronRight,
  ChevronLeft,
  Menu,
  X,
  Search,
  BookOpen,
  Mail,
  Globe,
  FileText,
  Newspaper,
  Bell
} from 'lucide-react';
import { AWARDS, CONFERENCES, HIGHLIGHT_PAPERS } from './constants';
import { Award, Conference, HighlightPaper, HighlightCategory, SCNewsItem } from './types';

interface SponsorLogoProps {
  srcs: string[];
  alt: string;
  fallbackText: string;
  href?: string;
}

const SponsorLogo: React.FC<SponsorLogoProps> = ({ srcs, alt, fallbackText, href }) => {
  const [imgIndex, setImgIndex] = useState(0);
  const [failed, setFailed] = useState(false);

  const handleError = () => {
    setImgIndex((prevIndex) => {
      if (prevIndex < srcs.length - 1) {
        return prevIndex + 1;
      } else {
        setFailed(true);
        return prevIndex;
      }
    });
  };

  const content = (
    <img
      src={srcs[imgIndex]}
      alt={alt}
      onError={handleError}
      className="max-h-full max-w-full object-contain"
    />
  );

  const fallbackContent = (
    <div className="px-3 py-1.5 bg-white/5 rounded border border-white/10 text-[10px] font-bold text-white tracking-wider whitespace-nowrap uppercase">
      {fallbackText}
    </div>
  );

  if (failed) {
    if (href) {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer" className="block hover:scale-105 transition-transform duration-200">
          {fallbackContent}
        </a>
      );
    }
    return fallbackContent;
  }

  const containerClasses = "h-10 w-28 bg-white p-1 rounded-md flex items-center justify-center shadow-sm opacity-80 hover:opacity-100 transition-all duration-300 hover:scale-105 hover:shadow-md";

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={containerClasses}>
        {content}
      </a>
    );
  }

  return (
    <div className={containerClasses}>
      {content}
    </div>
  );
};

export default function App() {
  const [activeTab, setActiveTab] = useState<'home' | 'editions' | 'awards' | 'committees' | 'documents' | 'hosting'>('home');
  const [initialAwardsFilter, setInitialAwardsFilter] = useState<string>('All');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigateToTab = (tab: typeof activeTab, filter: string = 'All') => {
    setInitialAwardsFilter(filter);
    setActiveTab(tab);
    setIsMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const NavItem = ({ id, label, icon: Icon }: { id: typeof activeTab, label: string, icon: any }) => (
    <button
      onClick={() => navigateToTab(id)}
      className={`flex items-center gap-2 px-4 py-2 rounded-full ${activeTab === id
        ? 'bg-primary text-white shadow-md'
        : 'text-slate-600 hover:bg-slate-100'
        }`}
    >
      <Icon size={18} />
      <span className="font-medium">{label}</span>
    </button>
  );

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-6'
        }`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => setActiveTab('home')}>
            <img
              src="logos/issre.png"
              alt="ISSRE"
              className="h-32 w-auto object-contain"
              onError={(e) => {
                const target = e.currentTarget;
                target.style.display = 'none';
                target.nextElementSibling?.removeAttribute('hidden');
              }}
            />
            <div hidden className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg">
              I
            </div>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-2">
            <NavItem id="home" label="Home" icon={Home} />
            <NavItem id="editions" label="Editions" icon={Calendar} />
            <NavItem id="awards" label="Awards" icon={Trophy} />
            <NavItem id="committees" label="Committees" icon={Users} />
          </div>

          {/* Mobile Menu Toggle */}
          <button className="md:hidden text-slate-900" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}

      {isMenuOpen && (
        <div
          className="fixed inset-0 z-40 bg-white pt-24 px-6 md:hidden"
        >
          <div className="flex flex-col gap-4">
            <NavItem id="home" label="Home" icon={Home} />
            <NavItem id="editions" label="Editions" icon={Calendar} />
            <NavItem id="awards" label="Awards" icon={Trophy} />
            <NavItem id="committees" label="Committees" icon={Users} />
          </div>
        </div>
      )}


      {/* Main Content */}
      <main className="flex-grow pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-6">

          {activeTab === 'home' && <HomeView key="home" onNavigate={navigateToTab} />}
          {activeTab === 'editions' && <EditionsView key="editions" />}
          {activeTab === 'awards' && <AwardsView key="awards" initialFilter={initialAwardsFilter} />}
          {activeTab === 'committees' && <CommitteeView key="committees" />}
          {activeTab === 'documents' && <DocumentsView key="documents" onNavigate={navigateToTab} />}
          {activeTab === 'hosting' && <HostingView key="hosting" />}

        </div>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-12">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center text-white font-bold">I</div>
              <h2 className="text-white font-serif text-lg font-bold">ISSRE</h2>
            </div>
            <p className="text-sm leading-relaxed max-w-xl">
              The IEEE International Symposium on Software Reliability Engineering is the premier conference for software reliability research and practice.
            </p>
          </div>
          <div className="md:text-right">
            <h3 className="text-white font-bold mb-6 uppercase text-xs tracking-widest">Connect</h3>
            <div className="flex gap-6 md:justify-end">
              <a href="https://www.linkedin.com/in/issre-conference/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">LinkedIn</a>
              <a href="https://ieeexplore.ieee.org/xpl/conhome/1000700/all-proceedings" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center gap-1">
                IEEE Xplore
              </a>
            </div>
          </div>
        </div>

        {/* Sponsors Row */}
        <div className="max-w-7xl mx-auto px-6 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex flex-col items-center md:items-start gap-1">
              <h3 className="text-white font-bold uppercase text-xs tracking-widest">Sponsors</h3>
              <p className="text-xs text-slate-500">Supported by the leading software reliability societies.</p>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-6 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
              <SponsorLogo
                srcs={['logos/ieee.svg', 'logos/ieee.png', 'logos/ieee.jpg', 'ieee.svg', 'ieee.png', 'ieee.jpg']}
                alt="IEEE"
                fallbackText="IEEE"
                href="https://www.ieee.org"
              />
              <SponsorLogo
                srcs={['logos/ieee-computer.svg', 'logos/ieee-computer.png', 'logos/ieee-computer.jpg', 'ieee-computer.svg', 'ieee-computer.png', 'ieee-computer.jpg']}
                alt="IEEE Computer Society"
                fallbackText="IEEE Computer Society"
                href="https://www.computer.org"
              />
              <SponsorLogo
                srcs={['logos/ieee-reliability.svg', 'logos/ieee-reliability.png', 'logos/ieee-reliability.jpg', 'ieee-reliability.svg', 'ieee-reliability.png', 'ieee-reliability.jpg']}
                alt="IEEE Reliability Society"
                fallbackText="IEEE Reliability Society"
                href="https://rs.ieee.org"
              />
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 mt-12 pt-8 border-t border-white/5 text-center text-xs">
          © {new Date().getFullYear()} ISSRE Steering Committee. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

const DEFAULT_IMAGES = [
  {
    url: 'images/keynote.jpg',
    caption: 'ISSRE Keynote Presentations',
    alt: 'Large lecture hall filled with conference attendees watching a keynote presentation'
  },
  {
    url: 'images/networking.jpg',
    caption: 'Academic & Industry Networking',
    alt: 'Academic and industry professionals networking and chatting in a conference hall'
  },
  {
    url: 'images/technical.jpg',
    caption: 'Technical Sessions & Workshops',
    alt: 'Group of researchers presenting and discussing technical details in a seminar room'
  },
  {
    url: 'images/panel.jpg',
    caption: 'Panel Forums & Discussions',
    alt: 'Panelists discussing state-of-the-art software reliability engineering challenges on stage'
  }
];

const ImageCarousel: React.FC = () => {
  const [carouselImages, setCarouselImages] = useState<Array<{ url: string; caption: string; alt: string }>>([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    const base = import.meta.env.BASE_URL.replace(/\/$/, '');
    fetch(`${base}/images.json`)
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data) && data.length > 0) {
          // Normalize URLs: strip leading slash so they are relative to base
          const normalized = data.map((img: { url: string; caption: string; alt: string }) => ({
            ...img,
            url: `${base}/${img.url.replace(/^\//, '')}`,
          }));
          setCarouselImages(normalized);
        } else {
          setCarouselImages(DEFAULT_IMAGES);
        }
      })
      .catch(() => {
        setCarouselImages(DEFAULT_IMAGES);
      });
  }, []);

  useEffect(() => {
    if (!isPlaying || carouselImages.length <= 1) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % carouselImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isPlaying, carouselImages]);

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (carouselImages.length <= 1) return;
    setActiveIndex((prev) => (prev - 1 + carouselImages.length) % carouselImages.length);
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (carouselImages.length <= 1) return;
    setActiveIndex((prev) => (prev + 1) % carouselImages.length);
  };

  if (carouselImages.length === 0) {
    return <div className="w-full h-full bg-slate-900 animate-pulse rounded-[2rem]" />;
  }

  const hasMultiple = carouselImages.length > 1;

  return (
    <div
      className="relative w-full h-full group/carousel select-none overflow-hidden"
      onMouseEnter={() => setIsPlaying(false)}
      onMouseLeave={() => setIsPlaying(true)}
    >
      {/* Slides Container */}
      <div className="relative w-full h-full bg-slate-950">
        {carouselImages.map((img, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === activeIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
              }`}
          >
            {/* Blurred Background Layer (Dynamic Letterbox) */}
            <img
              src={img.url}
              alt=""
              className="absolute inset-0 w-full h-full object-cover blur-2xl opacity-35 scale-110 pointer-events-none select-none"
              referrerPolicy="no-referrer"
            />

            {/* Crisp Foreground Image (Zero crop, Zero distortion) */}
            <div className="absolute inset-0 flex items-center justify-center p-6 pb-12">
              <img
                src={img.url}
                alt={img.alt}
                className={`max-w-full max-h-full object-contain rounded-xl shadow-2xl transition-transform duration-[5000ms] ease-out ${index === activeIndex ? 'scale-102' : 'scale-100'
                  }`}
                referrerPolicy="no-referrer"
                onError={() => {
                  setCarouselImages((prev) => {
                    const filtered = prev.filter((_, i) => i !== index);
                    if (activeIndex >= filtered.length) {
                      setActiveIndex(Math.max(0, filtered.length - 1));
                    }
                    return filtered;
                  });
                }}
              />
            </div>

            {/* Caption Overlay */}
            <div className="absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-6 pb-8">
              <span className="text-white text-[10px] uppercase font-bold tracking-widest bg-primary/90 backdrop-blur-md px-3 py-1.5 rounded-lg shadow-lg">
                {img.caption}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      {hasMultiple && (
        <>
          <button
            onClick={handlePrev}
            aria-label="Previous Slide"
            className="absolute left-4 top-1/2 -translate-y-1/2 z-30 w-10 h-10 flex items-center justify-center rounded-full bg-white/20 hover:bg-white/40 border border-white/20 backdrop-blur-md text-white opacity-0 group-hover/carousel:opacity-100 hover:scale-105 transition-all duration-300 shadow-md cursor-pointer"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={handleNext}
            aria-label="Next Slide"
            className="absolute right-4 top-1/2 -translate-y-1/2 z-30 w-10 h-10 flex items-center justify-center rounded-full bg-white/20 hover:bg-white/40 border border-white/20 backdrop-blur-md text-white opacity-0 group-hover/carousel:opacity-100 hover:scale-105 transition-all duration-300 shadow-md cursor-pointer"
          >
            <ChevronRight size={20} />
          </button>
        </>
      )}

      {/* Slide Indicators */}
      {hasMultiple && (
        <div className="absolute bottom-4 right-4 z-30 flex gap-2">
          {carouselImages.map((_, index) => (
            <button
              key={index}
              onClick={(e) => {
                e.stopPropagation();
                setActiveIndex(index);
              }}
              aria-label={`Go to slide ${index + 1}`}
              className={`h-2 rounded-full transition-all duration-300 ${index === activeIndex
                ? 'w-6 bg-white shadow-md'
                : 'w-2 bg-white/50 hover:bg-white/80'
                }`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

interface HomeViewProps {
  onNavigate: (tab: 'home' | 'editions' | 'awards' | 'committees' | 'documents' | 'hosting', filter?: string) => void;
}

const HomeView: React.FC<HomeViewProps> = ({ onNavigate }) => {
  const [news, setNews] = useState<SCNewsItem[]>([]);
  const [selectedNews, setSelectedNews] = useState<SCNewsItem | null>(null);
  const [showAllNews, setShowAllNews] = useState(false);

  useEffect(() => {
    const base = import.meta.env.BASE_URL.replace(/\/$/, '');
    fetch(`${base}/news.json`)
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setNews(data);
        }
      })
      .catch((err) => {
        console.error("Failed to load SC news", err);
      });
  }, []);

  return (
    <div
      className="space-y-20"
    >
      {/* Hero Section */}
      <section className="relative overflow-hidden rounded-[2rem] bg-slate-900 text-white p-12 md:p-20">
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-l from-primary to-transparent" />
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path d="M0 100 L100 0 L100 100 Z" fill="currentColor" />
          </svg>
        </div>

        <div className="relative z-10 max-w-6xl">
          <span
            className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-white/10 text-white text-xs font-bold tracking-widest uppercase mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-accent" />
            Current Edition: ISSRE 2026
          </span>
          <h1 className="font-serif text-3xl md:text-5xl font-bold mb-8 leading-tight">
            International Symposium on <span className="text-accent italic">Software Reliability</span> Engineering
          </h1>
          <p className="text-lg text-slate-300 mb-10 leading-relaxed max-w-2xl">
            ISSRE is the world's leading symposium focused on the theory and practice of software reliability engineering. We bring together researchers and practitioners to solve the most critical challenges in software quality.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="https://cyprusconferences.org/issre2026/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-white text-slate-900 rounded-xl font-bold hover:bg-accent hover:text-white flex items-center gap-2 group"
            >
              ISSRE 2026 <ChevronRight size={18} className="group-hover:translate-x-1" />
            </a>
            <button
              onClick={() => onNavigate('editions')}
              className="px-8 py-4 bg-white/10 text-white border border-white/20 rounded-xl font-bold hover:bg-white/20"
            >
              Editions
            </button>
            <button
              onClick={() => onNavigate('awards')}
              className="px-8 py-4 bg-white/10 text-white border border-white/20 rounded-xl font-bold hover:bg-white/20"
            >
              Hall of Fame
            </button>
            <button
              onClick={() => onNavigate('hosting')}
              className="px-8 py-4 bg-accent/20 text-accent border border-accent/40 rounded-xl font-bold hover:bg-accent/30"
            >
              Hosting ISSRE
            </button>
          </div>
        </div>
      </section>

      {/* Steering Committee News Section */}
      {news.length > 0 && (
        <section className="space-y-8">
          <div className="flex items-center gap-3">
            <div className="w-1.5 h-8 rounded-full bg-primary" />
            <div>
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-slate-900">
                News from ISSRE
              </h2>
              <p className="text-slate-500 text-xs mt-1">
                Official announcements, policy updates, and calls from ISSRE.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {news.slice(0, showAllNews ? undefined : 6).map((item) => (
              <div
                key={item.id}
                onClick={() => item.content && setSelectedNews(item)}
                className={`glass-card p-6 flex flex-col justify-between hover:shadow-lg hover:-translate-y-1 hover:border-primary/20 transition-all duration-300 group ${item.content ? 'cursor-pointer' : ''
                  }`}
              >
                <div>
                  <div className="flex justify-between items-center mb-4">
                    <span className={`text-[9px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-md ${item.category === 'Call' ? 'bg-amber-100 text-amber-800' :
                        item.category === 'Governance' ? 'bg-emerald-100 text-emerald-800' :
                          item.category === 'Awards' ? 'bg-purple-100 text-purple-800' :
                            'bg-blue-100 text-blue-800'
                      }`}>
                      {item.category}
                    </span>
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest flex items-center gap-1">
                      <Calendar size={10} /> {new Date(item.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                    </span>
                  </div>

                  <h3 className="font-serif text-lg font-bold text-slate-950 mb-3 group-hover:text-primary transition-colors leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-slate-600 text-xs md:text-sm leading-relaxed mb-6">
                    {item.summary}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100/50 flex items-center justify-between mt-auto">
                  {item.content ? (
                    <button className="text-xs font-bold text-primary hover:text-accent flex items-center gap-1 transition-colors uppercase tracking-wider group-hover:underline cursor-pointer">
                      Read Details <ChevronRight size={14} />
                    </button>
                  ) : item.linkLabel ? (
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        if (item.linkLabel === 'View Hosting Guidelines') {
                          onNavigate('hosting');
                        } else if (item.linkLabel === 'Go to Documents') {
                          onNavigate('documents');
                        } else if (item.linkLabel === 'Go to Committees') {
                          onNavigate('committees');
                        } else if (item.link) {
                          window.open(item.link, '_blank');
                        }
                      }}
                      className="text-xs font-bold text-primary hover:text-accent flex items-center gap-1 transition-colors uppercase tracking-wider group-hover:underline cursor-pointer"
                    >
                      {item.linkLabel} <ChevronRight size={14} />
                    </button>
                  ) : null}
                </div>
              </div>
            ))}
          </div>

          {news.length > 6 && (
            <div className="flex justify-center mt-8">
              <button
                onClick={() => setShowAllNews(!showAllNews)}
                className="px-6 py-3 border border-slate-200 bg-white hover:border-slate-350 hover:bg-slate-50 text-slate-700 text-xs font-bold uppercase tracking-widest rounded-xl shadow-sm transition-all duration-200 cursor-pointer"
              >
                {showAllNews ? 'Show Less' : `View All News (${news.length})`}
              </button>
            </div>
          )}
        </section>
      )}

      {/* About Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="section-title">ISSRE Mission</h2>
          <div className="space-y-6 text-slate-600 leading-relaxed">
            <p>
              The International Symposium on Software Reliability Engineering (ISSRE) is focused on innovative techniques and tools for assessing, predicting, and improving the reliability, safety, and security of software systems.
            </p>
            <p>
              ISSRE covers a wide range of topics, including reliability modeling, testing, verification, fault tolerance, and software quality assurance. It provides a unique forum for researchers and practitioners to share their latest findings and experiences.
            </p>
          </div>
        </div>
        <div className="relative">
          <div className="aspect-[4/3] rounded-[2rem] overflow-hidden shadow-2xl z-10">
            <ImageCarousel />
          </div>
          <div className="absolute -bottom-6 -left-6 glass-card p-6 max-w-xs shadow-xl z-20">
            <p className="text-sm italic font-serif text-slate-700">
              "ISSRE has been the cornerstone of my research career for over two decades."
            </p>
            <p className="text-xs font-bold mt-4 text-primary uppercase tracking-wider">— Distinguished Professor</p>
          </div>
        </div>
      </section>

      {/* News Modal */}
      {selectedNews && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm transition-opacity duration-300">
          <div className="bg-white border border-slate-200/80 rounded-2xl max-w-2xl w-full p-8 shadow-2xl relative max-h-[85vh] overflow-y-auto transform transition-all duration-300">
            <button
              onClick={() => setSelectedNews(null)}
              aria-label="Close modal"
              className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-900 hover:bg-slate-100 rounded-full transition-colors cursor-pointer"
            >
              <X size={20} />
            </button>

            <div className="flex items-center gap-2.5 mb-4">
              <span className={`text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-md ${selectedNews.category === 'Call' ? 'bg-amber-100 text-amber-800' :
                  selectedNews.category === 'Governance' ? 'bg-emerald-100 text-emerald-800' :
                    selectedNews.category === 'Awards' ? 'bg-purple-100 text-purple-800' :
                      'bg-blue-100 text-blue-800'
                }`}>
                {selectedNews.category}
              </span>
              <span className="text-xs text-slate-400 font-semibold">{new Date(selectedNews.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
            </div>

            <h3 className="font-serif text-2xl md:text-3xl font-bold text-slate-900 mb-6 leading-tight">
              {selectedNews.title}
            </h3>

            <div className="text-slate-650 text-sm md:text-base leading-relaxed space-y-4 whitespace-pre-wrap font-sans">
              {selectedNews.content}
            </div>

            {selectedNews.linkLabel && (
              <div className="mt-8 pt-6 border-t border-slate-100 flex justify-end">
                <button
                  onClick={() => {
                    if (selectedNews.linkLabel === 'View Hosting Guidelines') {
                      onNavigate('hosting');
                    } else if (selectedNews.linkLabel === 'Go to Documents') {
                      onNavigate('documents');
                    } else if (selectedNews.linkLabel === 'Go to Committees') {
                      onNavigate('committees');
                    } else if (selectedNews.link) {
                      window.open(selectedNews.link, '_blank');
                    }
                    setSelectedNews(null);
                  }}
                  className="px-6 py-2.5 bg-primary text-white text-xs font-bold uppercase tracking-widest rounded-xl hover:bg-accent hover:text-white transition-all duration-200 flex items-center gap-2 cursor-pointer font-sans"
                >
                  {selectedNews.linkLabel} <ChevronRight size={14} />
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

function EditionsView() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeDecade, setActiveDecade] = useState<'All' | '2020s' | '2010s' | '2000s' | '90s'>('All');

  const decades = ['All', '2020s', '2010s', '2000s', '90s'];

  const filteredConferences = CONFERENCES.filter(conf => {
    const matchesSearch = conf.year.toString().includes(searchTerm) ||
      conf.location.toLowerCase().includes(searchTerm.toLowerCase());

    if (activeDecade === 'All') return matchesSearch;
    if (activeDecade === '2020s') return matchesSearch && conf.year >= 2020;
    if (activeDecade === '2010s') return matchesSearch && conf.year >= 2010 && conf.year < 2020;
    if (activeDecade === '2000s') return matchesSearch && conf.year >= 2000 && conf.year < 2010;
    if (activeDecade === '90s') return matchesSearch && conf.year < 2000;
    return matchesSearch;
  });

  return (
    <div
    >
      <div className="mb-8 text-center max-w-2xl mx-auto">
        <h2 className="section-title mb-2">Conference Editions</h2>
        <p className="text-slate-500">Exploring over three decades of reliability engineering history.</p>
      </div>
      <div className="flex flex-col md:flex-row justify-center mb-12 gap-4">
        <div className="flex flex-col md:flex-row gap-4 w-full md:w-auto">
          <div className="flex bg-slate-100 p-1 rounded-xl">
            {decades.map(decade => (
              <button
                key={decade}
                onClick={() => setActiveDecade(decade as any)}
                className={`px-4 py-1.5 rounded-lg text-xs font-bold ${activeDecade === decade
                  ? 'bg-white text-slate-900 shadow-sm'
                  : 'text-slate-500 hover:text-slate-700'
                  }`}
              >
                {decade}
              </button>
            ))}
          </div>
          <div className="relative w-full md:w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
            <input
              type="text"
              placeholder="Search locations..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/20"
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredConferences.map((conf) => {
          const currentYear = new Date().getFullYear();
          const isUpcoming = conf.year > currentYear;
          const isCurrent = conf.year === currentYear;
          return (
            <div key={conf.year} className={`glass-card p-6 hover:shadow-md group ${isUpcoming ? 'border-accent/30' : isCurrent ? 'border-primary/30' : ''}`}>
              <div className="flex justify-between items-start mb-4">
                <span className="text-3xl font-bold text-slate-900">{conf.year}</span>
                {isUpcoming && (
                  <span className="text-[9px] font-bold uppercase tracking-widest text-accent bg-accent/10 px-2.5 py-1 rounded-full">
                    Upcoming
                  </span>
                )}
                {isCurrent && (
                  <span className="text-[9px] font-bold uppercase tracking-widest text-primary bg-primary/10 px-2.5 py-1 rounded-full">
                    Current
                  </span>
                )}
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-slate-600">
                  <MapPin size={16} className="text-primary" />
                  <span className="text-sm font-medium">{conf.location}</span>
                </div>
                <div className="flex items-center gap-2 text-slate-600">
                  <Calendar size={16} className="text-primary" />
                  <span className="text-sm font-medium">{conf.dates}</span>
                </div>
              </div>
              <div className="mt-6 pt-6 border-t border-slate-100 flex gap-4">
                {conf.websiteUrl && (
                  <a
                    href={conf.websiteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-bold text-primary hover:underline flex items-center gap-1"
                  >
                    <Globe size={12} /> Website
                  </a>
                )}
                {conf.proceedingsUrl && (
                  <a
                    href={conf.proceedingsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-bold text-slate-600 hover:text-primary flex items-center gap-1"
                  >
                    <BookOpen size={12} /> Proceedings
                  </a>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {filteredConferences.length === 0 && (
        <div className="text-center py-20">
          <p className="text-slate-400 font-medium">No conferences found matching your criteria.</p>
        </div>
      )}
    </div>
  );
}

interface AwardsViewProps {
  initialFilter?: string;
}

const AwardsView: React.FC<AwardsViewProps> = ({ initialFilter }) => {
  const [awardTypeGroup, setAwardTypeGroup] = useState<'annual' | 'highlights'>('annual');
  const [filter, setFilter] = useState<string>('All');

  useEffect(() => {
    if (initialFilter === '30-Year Highlights') {
      setAwardTypeGroup('highlights');
      setFilter('30-Year Highlights');
    } else if (initialFilter) {
      setAwardTypeGroup('annual');
      setFilter(initialFilter);
    }
  }, [initialFilter]);

  const filteredAwards = (filter === 'All'
    ? [...AWARDS]
    : AWARDS.filter(a => {
      if (filter === 'Test of Time') return a.type === 'Test of Time';
      if (filter === 'Best Research Paper') return a.type === 'Best Paper' && a.track === 'Research';
      if (filter === 'Best Industry Paper') return a.type === 'Best Paper' && a.track === 'Industry';
      return false;
    })).sort((a, b) => {
      if (a.year !== b.year) return b.year - a.year;
      // For same year, prioritize winners over runner-ups
      if (a.runnerUp && !b.runnerUp) return 1;
      if (!a.runnerUp && b.runnerUp) return -1;
      return a.type.localeCompare(b.type);
    });

  return (
    <div
    >
      <div className="mb-16 text-center max-w-2xl mx-auto">
        <h2 className="section-title mb-4">Hall of Fame</h2>
        <p className="text-slate-500">
          Celebrating excellence and enduring impact in software reliability engineering research.
        </p>
      </div>

      {/* Top Group Switcher */}
      <div className="flex justify-center mb-12">
        <div className="flex bg-slate-100/80 backdrop-blur-sm p-1 rounded-2xl border border-slate-200 shadow-sm">
          <button
            onClick={() => { setAwardTypeGroup('annual'); setFilter('All'); }}
            className={`px-6 py-2.5 rounded-xl text-xs font-bold transition-all duration-200 flex items-center gap-2 ${awardTypeGroup === 'annual'
              ? 'bg-slate-900 text-white shadow-md'
              : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
              }`}
          >
            <Trophy size={14} /> Annual Awards
          </button>
          <button
            onClick={() => { setAwardTypeGroup('highlights'); setFilter('30-Year Highlights'); }}
            className={`px-6 py-2.5 rounded-xl text-xs font-bold transition-all duration-200 flex items-center gap-2 ${awardTypeGroup === 'highlights'
              ? 'bg-slate-900 text-white shadow-md'
              : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
              }`}
          >
            <AwardIcon size={14} /> 30-Year Retrospective
          </button>
        </div>
      </div>

      {/* Filter Tabs for Annual Awards */}
      {awardTypeGroup === 'annual' && (
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {['All', 'Test of Time', 'Best Research Paper', 'Best Industry Paper'].map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-5 py-2 rounded-full text-xs font-bold ${filter === cat
                ? 'bg-slate-900 text-white shadow-lg'
                : 'bg-white text-slate-600 border border-slate-200 hover:border-slate-400'
                }`}
            >
              {cat}
            </button>
          ))}
        </div>
      )}

      {awardTypeGroup === 'highlights' ? (
        <HighlightsView />
      ) : (
        <div className="space-y-8">

          {filteredAwards.map((award) => (
            <div
              key={award.id}
              className="glass-card p-8 relative overflow-hidden group"
            >
              {/* Category Badge */}
              <div className="absolute top-0 right-0 flex overflow-hidden rounded-bl-xl shadow-sm z-10">
                {award.runnerUp && (
                  <div className="px-4 py-2 bg-slate-200 text-slate-700 text-[10px] font-bold uppercase tracking-widest">
                    Runner-up
                  </div>
                )}
                <div className={`px-6 py-2 text-white text-[10px] font-bold uppercase tracking-widest ${award.type === 'Test of Time' ? 'bg-accent' :
                  award.track === 'Industry' ? 'bg-emerald-600' :
                    award.type === 'Best Paper' ? 'bg-primary' : 'bg-slate-900'
                  }`}>
                  {award.type === 'Best Paper' ? (award.track ? `Best ${award.track} Paper` : 'Best Paper') : award.type}
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-8">
                <div className="flex-shrink-0">
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center ${award.type === 'Test of Time' ? 'bg-accent/10 text-accent' :
                    award.track === 'Industry' ? 'bg-emerald-500/10 text-emerald-600' :
                      award.type === 'Best Paper' ? 'bg-primary/10 text-primary' :
                        'bg-emerald-500/10 text-emerald-600'
                    }`}>
                    <AwardIcon size={32} />
                  </div>
                  <div className="mt-4 text-center">
                    <span className="text-2xl font-serif font-bold text-slate-900">{award.year}</span>
                  </div>
                </div>

                <div className="flex-grow">
                  <h3 className="text-2xl font-serif font-bold text-slate-900 mb-3 group-hover:text-primary">
                    {award.title}
                  </h3>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {award.authors.map((author, idx) => (
                      <span key={idx} className="text-sm font-medium text-slate-600">
                        {author}{idx < award.authors.length - 1 ? ',' : ''}
                      </span>
                    ))}
                  </div>

                  {award.description && (
                    <p className="text-slate-500 text-sm leading-relaxed mb-6 italic">
                      "{award.description}"
                    </p>
                  )}

                  <div className="flex items-center gap-4 text-xs font-bold uppercase tracking-wider text-slate-400">
                    {award.paperUrl ? (
                      <a href={award.paperUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-primary hover:underline">
                        <BookOpen size={12} /> Paper
                      </a>
                    ) : (() => {
                      const conf = CONFERENCES.find(c => c.year === award.year);
                      return conf?.proceedingsUrl ? (
                        <a href={conf.proceedingsUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-primary hover:underline">
                          <BookOpen size={12} /> Proceedings
                        </a>
                      ) : null;
                    })()}
                  </div>
                </div>
              </div>
            </div>
          ))}

        </div>
      )}
    </div>
  );
};

interface DocumentsViewProps {
  onNavigate: (tab: any) => void;
}

const DocumentsView: React.FC<DocumentsViewProps> = ({ onNavigate }) => {
  const documents = [
    {
      title: "Steering Committee Charter",
      description: "The official charter defining the purpose, structure, and responsibilities of the ISSRE Steering Committee.",
      type: "PDF",
      category: "Governance"
    },
    {
      title: "Symposium Policies",
      description: "Comprehensive policies regarding symposium organization, paper submission, and review processes.",
      type: "PDF",
      category: "Policy"
    },
    {
      title: "Hosting Guidelines",
      description: "Detailed instructions and requirements for institutions interested in hosting future ISSRE editions.",
      type: "Web",
      category: "Guidelines",
      isInternalLink: true,
      targetTab: 'hosting'
    },
    {
      title: "Code of Conduct",
      description: "Standards of behavior for all participants in ISSRE events to ensure a welcoming and inclusive environment.",
      type: "Web",
      category: "Policy"
    }
  ];

  return (
    <div
    >
      <div className="mb-16">
        <h2 className="section-title">ISSRE Documents</h2>
        <p className="text-slate-500 max-w-2xl">
          Access official governance documents, policies, and guidelines for the International Symposium on Software Reliability Engineering.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {documents.map((doc: any, idx) => (
          <div
            key={idx}
            onClick={() => doc.isInternalLink && onNavigate(doc.targetTab)}
            className={`glass-card p-8 flex gap-6 items-start group cursor-pointer ${doc.isInternalLink ? 'border-primary/20' : ''}`}
          >
            <div className="w-14 h-14 rounded-2xl bg-primary/5 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white shrink-0">
              <FileText size={28} />
            </div>
            <div className="flex-grow">
              <div className="flex justify-between items-start mb-2">
                <span className="text-[10px] font-bold uppercase tracking-widest text-primary bg-primary/5 px-2 py-1 rounded">
                  {doc.category}
                </span>
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                  {doc.type}
                </span>
              </div>
              <h3 className="font-serif text-xl font-bold text-slate-900 mb-3 group-hover:text-primary">
                {doc.title}
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-6">
                {doc.description}
              </p>
              <button
                onClick={(e) => {
                  if (doc.isInternalLink) {
                    e.stopPropagation();
                    onNavigate(doc.targetTab);
                  }
                }}
                className="flex items-center gap-2 text-xs font-bold text-slate-900 uppercase tracking-widest hover:text-primary"
              >
                {doc.isInternalLink ? 'View Web Page' : 'Download Document'} <ExternalLink size={14} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function HighlightsView() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = [
    { name: 'All', label: 'All Areas', count: HIGHLIGHT_PAPERS.length },
    { name: 'Software Reliability Analysis', label: 'Reliability Analysis', count: HIGHLIGHT_PAPERS.filter(p => p.category === 'Software Reliability Analysis').length },
    { name: 'Failure Analysis and Monitoring', label: 'Failure & Monitoring', count: HIGHLIGHT_PAPERS.filter(p => p.category === 'Failure Analysis and Monitoring').length },
    { name: 'Software Testing', label: 'Software Testing', count: HIGHLIGHT_PAPERS.filter(p => p.category === 'Software Testing').length },
    { name: 'Fault Injection and Robustness Testing', label: 'Fault Injection', count: HIGHLIGHT_PAPERS.filter(p => p.category === 'Fault Injection and Robustness Testing').length },
    { name: 'Software Aging and Rejuvenation', label: 'Aging & Rejuvenation', count: HIGHLIGHT_PAPERS.filter(p => p.category === 'Software Aging and Rejuvenation').length }
  ];

  const filteredPapers = HIGHLIGHT_PAPERS.filter(paper => {
    const matchesSearch =
      paper.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      paper.authors.some(a => a.toLowerCase().includes(searchTerm.toLowerCase())) ||
      paper.year.toString().includes(searchTerm) ||
      paper.venue.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesCategory = activeCategory === 'All' || paper.category === activeCategory;

    return matchesSearch && matchesCategory;
  }).sort((a, b) => b.year - a.year);

  return (
    <div className="space-y-16">
      {/* Header section with HSL tailored colors and sleeker grid layout */}
      <div className="relative overflow-hidden rounded-[2rem] bg-slate-900 text-white p-10 md:p-16 shadow-2xl">
        <div className="absolute top-0 right-0 w-1/3 h-full opacity-10 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-l from-accent to-transparent" />
        </div>
        <div className="relative z-10 max-w-4xl">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-white text-[10px] font-bold tracking-widest uppercase mb-6">
            <AwardIcon size={12} className="text-accent animate-pulse" />
            ISSRE 2019 &amp; 2020 Anniversary Initiative
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-bold mb-6 leading-tight">
            Highlights from <span className="text-accent italic">30 Years</span> of ISSRE
          </h2>
          <p className="text-slate-300 text-sm md:text-base leading-relaxed mb-6">
            Promoted in the 2019 edition of the conference (ISSRE 2019, Berlin, Germany), this special initiative identified the most influential papers in our history.
          </p>
          <p className="text-slate-400 text-xs md:text-sm leading-relaxed max-w-3xl">
            Selected through a combination of community nominations, longitudinal bibliometric analysis across 5-year epochs, and in-depth interviews with former Program Chairs, these 26 landmark papers represent the core foundational discoveries and engineering milestones of our field.
          </p>
        </div>
      </div>

      {/* Embedded Slide Deck & Process Section */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        <div className="lg:col-span-7 glass-card p-8 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-1.5 h-6 rounded-full bg-primary" />
              <h3 className="font-serif text-xl md:text-2xl font-bold text-slate-900">
                Celebrating Our History
              </h3>
            </div>
            <p className="text-slate-600 text-sm leading-relaxed mb-6">
              Explore the official commemorative presentation delivered to celebrate these landmark papers. The slide deck outlines the community's historical path, selection methodology, and honors the visionary authors who shaped the software reliability engineering discipline.
            </p>
          </div>
          {/* Responsive SlideShare Iframe Wrapper */}
          <div className="relative aspect-video w-full rounded-xl overflow-hidden border border-slate-200/80 shadow-lg bg-slate-950">
            <iframe
              src="https://www.slideshare.net/slideshow/embed_code/key/kOfCKMd0MfBKdd"
              className="absolute inset-0 w-full h-full"
              allowFullScreen
              frameBorder="0"
              scrolling="no"
              title="Celebrating 30 years of ISSRE Slideshow"
            />
          </div>
        </div>

        <div className="lg:col-span-5 glass-card p-8 flex flex-col justify-between bg-gradient-to-br from-white to-slate-50">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-1.5 h-6 rounded-full bg-accent" />
              <h3 className="font-serif text-xl md:text-2xl font-bold text-slate-900">
                How Papers Were Identified
              </h3>
            </div>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary font-bold text-sm shrink-0">1</div>
                <div>
                  <h4 className="text-slate-900 font-bold text-sm mb-1">Open Community Nominations</h4>
                  <p className="text-slate-500 text-xs leading-normal">
                    An open call was published inviting community suggestions, accompanied by detailed motivations for their influence.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary font-bold text-sm shrink-0">2</div>
                <div>
                  <h4 className="text-slate-900 font-bold text-sm mb-1">Longitudinal Bibliometric Study</h4>
                  <p className="text-slate-500 text-xs leading-normal">
                    A thorough citation and impact analysis divided the 30-year conference history into 5-year epochs to ensure uniform historical representation.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary font-bold text-sm shrink-0">3</div>
                <div>
                  <h4 className="text-slate-900 font-bold text-sm mb-1">Program Chair Interviews</h4>
                  <p className="text-slate-500 text-xs leading-normal">
                    Interviews were conducted with the former Program Chairs across all 30 editions to contextualize and validate paper contributions.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-slate-400">
            <span>TOTAL POOL: 30 YEARS OF ISSRE</span>
            <span className="text-primary bg-primary/5 px-2.5 py-1 rounded-full uppercase tracking-wider">26 Landmark Papers</span>
          </div>
        </div>
      </div>

      {/* Filter and Search Bar Container */}
      <div className="flex flex-col gap-6 p-2">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="w-full md:w-auto">
            <h3 className="font-serif text-2xl font-bold text-slate-900">Landmark Publications</h3>
            <p className="text-slate-500 text-xs mt-1">Filter and search through the 26 most influential research papers.</p>
          </div>
          <div className="relative w-full md:w-80">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
            <input
              type="text"
              placeholder="Search by title, author, year..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-11 pr-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/20 bg-white/70 backdrop-blur-sm text-sm"
            />
          </div>
        </div>

        {/* Filter Pills with counting badge */}
        <div className="flex flex-wrap gap-2 pt-2">
          {categories.map((cat) => (
            <button
              key={cat.name}
              onClick={() => setActiveCategory(cat.name)}
              className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all duration-200 flex items-center gap-2 border shadow-sm ${activeCategory === cat.name
                ? 'bg-slate-900 text-white border-slate-900 shadow-md scale-102'
                : 'bg-white text-slate-600 border-slate-200 hover:border-slate-350 hover:bg-slate-50'
                }`}
            >
              <span>{cat.label}</span>
              <span className={`text-[10px] px-1.5 py-0.5 rounded-full ${activeCategory === cat.name ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-500'
                }`}>
                {cat.count}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Grid of cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredPapers.map((paper) => (
          <div
            key={paper.id}
            className="glass-card p-6 flex flex-col justify-between hover:shadow-lg hover:border-slate-300 transition-all duration-300 group"
          >
            <div>
              {/* Category and Year Badge */}
              <div className="flex justify-between items-center mb-4">
                <span className="text-[9px] font-bold uppercase tracking-widest text-primary bg-primary/5 px-2.5 py-1 rounded-md">
                  {paper.category === 'Software Reliability Analysis' ? 'Reliability Analysis' :
                    paper.category === 'Failure Analysis and Monitoring' ? 'Failure & Monitoring' :
                      paper.category === 'Software Testing' ? 'Software Testing' :
                        paper.category === 'Fault Injection and Robustness Testing' ? 'Fault Injection' :
                          'Aging & Rejuvenation'}
                </span>
                <span className="text-xl font-serif font-bold text-slate-800 bg-slate-100/80 px-2.5 py-0.5 rounded-md">
                  {paper.year}
                </span>
              </div>

              {/* Title */}
              <h4 className="font-serif text-lg font-bold text-slate-950 mb-3 group-hover:text-primary transition-colors leading-snug">
                {paper.title}
              </h4>

              {/* Authors */}
              <div className="flex flex-wrap gap-x-2 gap-y-1 mb-4">
                {paper.authors.map((author, index) => (
                  <span key={index} className="text-xs font-semibold text-slate-600">
                    {author}{index < paper.authors.length - 1 ? ',' : ''}
                  </span>
                ))}
              </div>
            </div>

            {/* Venue & Link */}
            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                <Calendar size={12} className="text-slate-400" />
                {paper.venue}
              </span>
              <a
                href={paper.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-bold text-primary hover:text-accent flex items-center gap-1 transition-colors uppercase tracking-wider group-hover:underline"
              >
                Paper <ExternalLink size={12} />
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Empty State */}
      {filteredPapers.length === 0 && (
        <div className="text-center py-20 bg-white/40 backdrop-blur-sm rounded-2xl border border-dashed border-slate-200">
          <BookOpen size={40} className="mx-auto text-slate-350 mb-4 animate-bounce" />
          <h4 className="text-base font-bold text-slate-800">No matching publications found</h4>
          <p className="text-slate-500 text-xs mt-1">Try adjusting your search keywords or active category filters.</p>
          <button
            onClick={() => { setSearchTerm(''); setActiveCategory('All'); }}
            className="mt-6 px-4 py-2 bg-slate-900 text-white rounded-lg text-xs font-bold shadow hover:bg-slate-800"
          >
            Reset Filters
          </button>
        </div>
      )}
    </div>
  );
}

function HostingView() {
  return (
    <div
      className="max-w-4xl mx-auto"
    >
      <div className="mb-16">
        <h2 className="section-title">Hosting ISSRE</h2>
        <p className="text-slate-500 mt-4 leading-relaxed">
          Information for institutions and organizations interested in hosting future editions of the IEEE International Symposium on Software Reliability Engineering.
        </p>
      </div>

      <div className="glass-card p-12 text-center border-dashed border-2">
        <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-6 text-slate-300">
          <Globe size={40} />
        </div>
        <h3 className="text-2xl font-serif font-bold text-slate-900 mb-4">Coming Soon</h3>
        <p className="text-slate-500 max-w-md mx-auto">
          We are currently updating our hosting guidelines and proposal submission process. Detailed information about requirements, timelines, and the selection process will be available here soon.
        </p>
        <div className="mt-10 flex justify-center gap-4">
          <a
            href="mailto:marco.vieira@charlotte.edu,jwxiang@whut.edu.cn?subject=Hosting%20ISSRE%20Inquiry"
            className="px-6 py-3 bg-primary text-white rounded-xl font-bold text-sm shadow-lg hover:bg-primary/90 hover:scale-102 transition-all duration-200 flex items-center gap-2"
          >
            <Mail size={16} /> Contact Steering Committee
          </a>
        </div>
      </div>
    </div>
  );
}

function CommitteeView() {
  const [committeeFilter, setCommitteeFilter] = useState<'All' | 'Steering Committee' | 'Advisory Board'>('All');

  const steeringCommittee = [
    { name: 'Marco Vieira', role: 'Chair', affiliation: 'University of North Carolina at Charlotte', country: 'USA', committeeType: 'Steering Committee', image: 'people/marco_vieira.jpg', website: 'https://marcovieira.me' },
    { name: 'Jianwen Xiang', role: 'Vice-Chair', affiliation: 'Wuhan University of Technology', country: 'China', committeeType: 'Steering Committee', image: 'people/jianwen_xiang.jpeg', website: 'http://www.wut-dscl.cn/JianwenXiang.html' },
    { name: 'Domenico Cotroneo', affiliation: 'University of North Carolina at Charlotte', country: 'USA', committeeType: 'Steering Committee', image: 'people/domenico_cotroneo.jpg', website: 'https://webpages.charlotte.edu/dcotrone/' },
    { name: 'Valerio Formicola', affiliation: 'California Polytechnic State University in Pomona', country: 'USA', committeeType: 'Steering Committee', image: 'people/valerio_formicola.jpg', website: 'https://scholar.google.com/citations?hl=en&user=Mtg5mIMAAAAJ' },
    { name: 'Katerina Goseva-Popstojanova', affiliation: 'West Virginia University', country: 'USA', committeeType: 'Steering Committee', image: 'people/katerina_goseva_popstojanova.jpg', website: 'https://directory.statler.wvu.edu/faculty-staff-directory/katerina-goseva-popstojanova' },
    { name: 'Leonardo Mariani', affiliation: 'University of Milano - Bicocca', country: 'Italy', committeeType: 'Steering Committee', image: 'people/leonardo_mariani.jpg', website: 'https://en.unimib.it/leonardo-mariani' },
    { name: 'Hélène Waeselynck', affiliation: 'LAAS-CNRS', country: 'France', committeeType: 'Steering Committee', image: 'people/helene_waeselynck.jpg', website: 'https://homepages.laas.fr/waeselyn/' },
    { name: 'Ganesh Pai', affiliation: 'NASA Ames Research Center', country: 'USA', committeeType: 'Steering Committee', image: 'people/ganesh_pai.jpg', website: 'https://gjp.bitbucket.io' },
  ];

  const advisoryBoard = [
    { name: 'Bojan Cukic', affiliation: 'University of North Carolina at Charlotte', country: 'USA', committeeType: 'Advisory Board', image: 'people/bojan_cukic.jpeg', website: 'https://cci.charlotte.edu/directory/bojan-cukic' },
    { name: 'Ram Chillarege', affiliation: 'Industry Focus, Chillarege Inc', country: 'USA', committeeType: 'Advisory Board', image: 'people/ram_chillarege.jpg', website: 'http://chillarege.com/ram/' },
    { name: 'Phil Laplante', affiliation: 'Pennsylvania State University', country: 'USA', committeeType: 'Advisory Board', image: 'people/phil_laplante.jpg', website: 'https://phil.laplante.io/' },
    { name: 'Karama Kanoun', affiliation: 'LAAS, CNRS', country: 'France', committeeType: 'Advisory Board', image: 'people/karama_kanoun.jpg', website: 'https://homepages.laas.fr/kanoun/' },
    { name: 'Veena Mendiratta', affiliation: 'Northwestern University', country: 'USA', committeeType: 'Advisory Board', image: 'people/veena_mendiratta.jpeg', website: 'https://www.mccormick.northwestern.edu/research-faculty/directory/affiliated/mendiratta-veena.html' },
    { name: 'Brendan Murphy', affiliation: 'Microsoft Research', country: 'UK', committeeType: 'Advisory Board', image: 'people/brendan_murphy.jpeg', website: 'https://scholar.google.com/citations?hl=en&user=Udpq7N8AAAAJ' },
    { name: 'Tadashi Dohi', affiliation: 'Hiroshima University', country: 'Japan', committeeType: 'Advisory Board', image: 'people/tadashi_dohi.jpg', website: 'https://seeds.office.hiroshima-u.ac.jp/profile/en.4f7bb9c13738bd7f520e17560c007669.html' },
    { name: 'Mladen Vouk', affiliation: 'North Carolina State University', country: 'USA', committeeType: 'Advisory Board', image: 'people/mladen_vouk.jpg', website: 'https://csc.ncsu.edu/people/vouk/' },
  ];

  const allMembers = [...steeringCommittee, ...advisoryBoard];

  const filteredMembers = allMembers.filter(m =>
    committeeFilter === 'All' || m.committeeType === committeeFilter
  );

  const showSteering = committeeFilter === 'All' || committeeFilter === 'Steering Committee';
  const showAdvisory = committeeFilter === 'All' || committeeFilter === 'Advisory Board';

  const visibleSteering = filteredMembers.filter(m => m.committeeType === 'Steering Committee');
  const visibleAdvisory = filteredMembers.filter(m => m.committeeType === 'Advisory Board');

  const committeeTypes: Array<'All' | 'Steering Committee' | 'Advisory Board'> = ['All', 'Steering Committee', 'Advisory Board'];

  const MemberCard: React.FC<{ member: any }> = ({ member }) => {
    const [imgLoaded, setImgLoaded] = useState(false);
    const [imgError, setImgError] = useState(false);

    const fallbackUrl = `https://api.dicebear.com/7.x/initials/svg?seed=${member.name}&backgroundColor=0f172a&fontFamily=Georgia`;
    const imageUrl = member.image || fallbackUrl;

    const ImageWrapper = () => {
      const imgEl = (
        <>
          {/* Loading Skeleton */}
          {!imgLoaded && !imgError && (
            <div className="absolute inset-0 bg-slate-100 flex items-center justify-center animate-pulse">
              <Users className="text-slate-300" size={24} />
            </div>
          )}

          <img
            src={imgError ? fallbackUrl : imageUrl}
            alt={member.name}
            onLoad={() => setImgLoaded(true)}
            onError={() => {
              setImgError(true);
              setImgLoaded(true);
            }}
            className={`w-full h-full object-cover transition-opacity duration-500 ${imgLoaded ? 'opacity-100' : 'opacity-0'}`}
          />
        </>
      );

      if (member.website) {
        return (
          <a
            href={member.website}
            target="_blank"
            rel="noopener noreferrer"
            className="w-24 h-24 rounded-2xl overflow-hidden mb-3 border-4 border-white shadow-md group-hover:shadow-lg relative bg-slate-100 transition-all duration-300 group-hover:scale-105 group-hover:rotate-1 block cursor-pointer hover:ring-4 hover:ring-primary/20"
            title={`Visit website of ${member.name}`}
          >
            {imgEl}
          </a>
        );
      }

      return (
        <div className="w-24 h-24 rounded-2xl overflow-hidden mb-3 border-4 border-white shadow-md group-hover:shadow-lg relative bg-slate-100 transition-all duration-300 group-hover:scale-105 group-hover:rotate-1">
          {imgEl}
        </div>
      );
    };

    const hasSpecialRole = member.role && (member.role === 'Chair' || member.role === 'Vice-Chair');

    return (
      <div
        className="glass-card p-5 pb-4 flex flex-col items-center text-center group hover:bg-slate-50/50 hover:shadow-xl transition-all duration-300 relative h-full"
      >
        <ImageWrapper />

        {/* Uniform Name Container */}
        <div className="w-full min-h-[2.5rem] flex items-center justify-center mb-1">
          <h3 className="font-serif text-base font-bold text-slate-900 leading-tight">
            {member.name}
          </h3>
        </div>

        {/* Selective Role Badge Container */}
        <div className="w-full min-h-[1.75rem] flex items-center justify-center mb-2">
          {hasSpecialRole && (
            <span className="text-primary font-bold text-[9px] uppercase tracking-widest bg-primary/5 px-2.5 py-0.5 rounded-full">
              {member.role}
            </span>
          )}
        </div>

        {/* Uniform Affiliation Container */}
        <div className="w-full min-h-[2.75rem] flex items-center justify-center px-1 mb-2">
          <p className="text-slate-600 text-xs font-medium leading-normal">
            {member.affiliation}
          </p>
        </div>

        {/* Country block aligned at the bottom */}
        <div className="w-full mt-auto pt-3 flex items-center justify-center gap-1.5 text-slate-400 text-[9px] font-bold uppercase tracking-wider border-t border-slate-100/50">
          <Globe size={9} /> {member.country}
        </div>
      </div>
    );
  };

  return (
    <div
    >
      {/* Header */}
      <div className="mb-10 text-center max-w-2xl mx-auto">
        <h2 className="section-title">Committees</h2>
        <p className="text-slate-500">
          Meet the leaders and advisors who guide the ISSRE symposium series — from long-term steering to strategic advisory support.
        </p>
      </div>

      {/* Filter Bar */}
      <div className="flex flex-wrap gap-2 mb-12 justify-center">
        {committeeTypes.map(type => (
          <button
            key={type}
            id={`committee-filter-${type.toLowerCase().replace(/\s+/g, '-')}`}
            onClick={() => setCommitteeFilter(type)}
            className={`px-6 py-2 rounded-full text-sm font-bold ${committeeFilter === type
              ? 'bg-slate-900 text-white shadow-lg'
              : 'bg-white text-slate-600 border border-slate-200 hover:border-slate-400'
              }`}
          >
            {type}
          </button>
        ))}
      </div>

      {/* Steering Committee Section */}
      {showSteering && visibleSteering.length > 0 && (
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-2 h-8 rounded-full bg-primary" />
            <div>
              <h3 className="font-serif text-2xl font-bold text-slate-900">Steering Committee</h3>
              <p className="text-slate-500 text-sm mt-0.5">
                {committeeFilter === 'All' ? 'Long-term vision and oversight for the symposium series.' : 'Provides long-term vision and oversight for the symposium series, ensuring its continued excellence and relevance.'}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {visibleSteering.map((member, idx) => (
              <MemberCard key={`sc-${idx}`} member={member} />
            ))}
          </div>

        </div>
      )}

      {/* Advisory Board Section */}
      {showAdvisory && visibleAdvisory.length > 0 && (
        <div className={showSteering && visibleSteering.length > 0 ? 'mt-8' : ''}>
          <div className="flex items-center gap-3 mb-8">
            <div className="w-2 h-8 rounded-full bg-accent" />
            <div>
              <h3 className="font-serif text-2xl font-bold text-slate-900">Advisory Board</h3>
              <p className="text-slate-500 text-sm mt-0.5">
                {committeeFilter === 'All' ? 'Distinguished leaders from academia and industry providing strategic guidance.' : 'Distinguished leaders from academia and industry who provide strategic guidance to the Steering Committee.'}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {visibleAdvisory.map((member, idx) => (
              <MemberCard key={`ab-${idx}`} member={member} />
            ))}
          </div>

        </div>
      )}

      {/* Empty state */}
      {filteredMembers.length === 0 && (
        <div
          className="text-center py-24"
        >
          <Users className="mx-auto text-slate-300 mb-4" size={48} />
          <p className="text-slate-400 font-medium">No members match the selected filters.</p>
          <button
            onClick={() => setCommitteeFilter('All')}
            className="mt-4 text-xs font-bold text-primary hover:underline"
          >
            Clear filters
          </button>
        </div>
      )}
    </div>
  );
}
