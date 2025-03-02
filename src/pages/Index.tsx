<lov-code>
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Search, ShoppingCart, User, Truck, CreditCard, Tv, LayoutGrid, Check, ArrowRight, Instagram } from "lucide-react";

const Index = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const featuredRef = useRef<HTMLDivElement>(null);
  const whyChooseUsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (featuredRef.current) {
      const cards = featuredRef.current.querySelectorAll(".collection-card");
      cards.forEach((card, index) => {
        setTimeout(() => {
          card.classList.add("fade-in");
        }, 100 * index);
      });
    }

    if (whyChooseUsRef.current) {
      const cards = whyChooseUsRef.current.querySelectorAll(".feature-card");
      cards.forEach((card, index) => {
        setTimeout(() => {
          card.classList.add("fade-in");
        }, 100 * index);
      });
    }
  }, []);

  const collections = [
    {
      id: "sherwani",
      name: "SHERWANI",
      description: "Traditional Indian ceremonial outfit for men from the royal families.",
      image: "/lovable-uploads/10f79791-8753-45ac-b3eb-74ca64e881d5.png"
    },
    {
      id: "tuxedo",
      name: "TUXEDO",
      description: "Western formal attire for special events like weddings, galas, or black-tie affairs.",
      image: "/lovable-uploads/10f79791-8753-45ac-b3eb-74ca64e881d5.png"
    },
    {
      id: "indo-western",
      name: "INDO WESTERN",
      description: "Fusion outfits for modern style.",
      image: "/lovable-uploads/10f79791-8753-45ac-b3eb-74ca64e881d5.png"
    },
    {
      id: "lehenga",
      name: "LEHENGA",
      description: "Vibrant and intricate designs for amazing festivals.",
      image: "/lovable-uploads/10f79791-8753-45ac-b3eb-74ca64e881d5.png"
    },
    {
      id: "gown",
      name: "GOWN",
      description: "Elegant designs for special events.",
      image: "/lovable-uploads/10f79791-8753-45ac-b3eb-74ca64e881d5.png"
    },
    {
      id: "anarkali",
      name: "ANARKALI",
      description: "Flowing silhouettes with intricate embroidery.",
      image: "/lovable-uploads/10f79791-8753-45ac-b3eb-74ca64e881d5.png"
    }
  ];

  const features = [
    {
      id: "delivery",
      title: "Fast Delivery",
      description: "Experience lightning-fast delivery across India with the assurance of multiple warehouses and efficient tracking system.",
      icon: <Truck className="w-6 h-6 text-purple-400" />
    },
    {
      id: "shipping",
      title: "Easy Free Shipping",
      description: "Hassle-free doorstep delivery with detailed package tracking for all domestic exchanges and returns.",
      icon: <CreditCard className="w-6 h-6 text-purple-400" />
    },
    {
      id: "warranty",
      title: "1-Year Warranty",
      description: "Shop with confidence knowing you have a full year of warranty coverage on all of our products across all our collections.",
      icon: <Tv className="w-6 h-6 text-purple-400" />
    },
    {
      id: "return",
      title: "Easy Return",
      description: "Experience lightning-fast delivery across India with the assurance of multiple warehouses and efficient tracking system.",
      icon: <LayoutGrid className="w-6 h-6 text-purple-400" />
    },
    {
      id: "check",
      title: "Quality Check",
      description: "Experience lightning-fast delivery across India with the assurance of multiple warehouses and efficient tracking system.",
      icon: <Check className="w-6 h-6 text-purple-400" />
    }
  ];

  const socialPosts = [
    {
      id: "post1",
      image: "/lovable-uploads/4897bd4b-7b98-4290-b9ce-959c1399b24f.png",
      alt: "Fashion model in white outfit"
    },
    {
      id: "post2",
      image: "/lovable-uploads/4897bd4b-7b98-4290-b9ce-959c1399b24f.png",
      alt: "Model in yellow outfit"
    },
    {
      id: "post3",
      image: "/lovable-uploads/4897bd4b-7b98-4290-b9ce-959c1399b24f.png",
      alt: "Close-up portrait"
    },
    {
      id: "post4",
      image: "/lovable-uploads/4897bd4b-7b98-4290-b9ce-959c1399b24f.png",
      alt: "Man in stylish outfit"
    },
    {
      id: "post5",
      image: "/lovable-uploads/4897bd4b-7b98-4290-b9ce-959c1399b24f.png",
      alt: "Woman with hat"
    },
    {
      id: "post6",
      image: "/lovable-uploads/4897bd4b-7b98-4290-b9ce-959c1399b24f.png",
      alt: "Woman in traditional dress"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <header 
        className={`py-4 px-6 md:px-12 fixed w-full z-50 transition-all duration-300 ${
          isScrolled ? "bg-black/90 backdrop-blur-md" : "bg-transparent"
        }`}
      >
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold tracking-wider mr-12">
              fad
            </Link>
            <nav className="hidden md:flex gap-8">
              <Link to="/" className="hover:text-neutral-300 transition-colors text-sm tracking-wider">
                HOME
              </Link>
              <Link to="/about" className="hover:text-neutral-300 transition-colors text-sm tracking-wider">
                ABOUT US
              </Link>
              <Link to="/products" className="hover:text-neutral-300 transition-colors text-sm tracking-wider">
                FASHION
              </Link>
            </nav>
          </div>
          <div className="flex items-center gap-6">
            <button className="hover:text-neutral-300 transition-colors">
              <Search size={20} />
            </button>
            <button className="hover:text-neutral-300 transition-colors relative">
              <ShoppingCart size={20} />
              <span className="absolute -top-2 -right-2 bg-white text-black text-xs w-4 h-4 rounded-full flex items-center justify-center">
                2
              </span>
            </button>
            <button className="hover:text-neutral-300 transition-colors">
              <User size={20} />
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="h-screen relative overflow-hidden">
        <div className="absolute inset-0 grid grid-cols-2">
          <div className="relative overflow-hidden">
            <div className="absolute inset-0 bg-black/30 z-10"></div>
            <img 
              src="/lovable-uploads/10f79791-8753-45ac-b3eb-74ca64e881d5.png" 
              alt="Bride in traditional attire" 
              className="object-cover h-full w-full object-center transform scale-105 hover:scale-110 transition-transform duration-700"
            />
          </div>
          <div className="relative overflow-hidden">
            <div className="absolute inset-0 bg-black/30 z-10"></div>
            <img 
              src="/lovable-uploads/10f79791-8753-45ac-b3eb-74ca64e881d5.png" 
              alt="Man in embroidered jacket" 
              className="object-cover h-full w-full object-center transform scale-105 hover:scale-110 transition-transform duration-700"
            />
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 py-16 bg-gradient-to-t from-black to-transparent z-20">
          <div className="container mx-auto px-6 md:px-12">
            <h1 className="text-4xl md:text-5xl font-medium tracking-widest mb-4 text-center">
              FEATURED COLLECTION
            </h1>
            <p className="text-neutral-300 text-center max-w-2xl mx-auto">
              Experience quality, convenience, and unbeatable value—all in one place!
            </p>
          </div>
        </div>
      </section>

      {/* Collection Grid */}
      <section ref={featuredRef} className="py-16 px-6 md:px-12 bg-black">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {collections.map((collection) => (
              <div 
                key={collection.id} 
                className="collection-card opacity-0 transform translate-y-8 transition-all duration-500 ease-out bg-gradient-to-b from-purple-900/40 to-black/40 rounded-xl overflow-hidden border border-purple-900/30"
              >
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={collection.image} 
                    alt={collection.name} 
                    className="w-full h-full object-cover object-center transform scale-100 hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-medium tracking-wider mb-2">
                    {collection.name}
                  </h3>
                  <p className="text-neutral-400 text-sm mb-4">
                    {collection.description}
                  </p>
                  <Link 
                    to={`/collection/${collection.id}`} 
                    className="inline-block text-sm tracking-wider text-white hover:text-purple-300 transition-colors underline underline-offset-4"
                  >
                    View Collection
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section ref={whyChooseUsRef} className="py-16 px-6 md:px-12 bg-black border-t border-purple-900/30">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-medium tracking-widest mb-2 text-center">
            WHY CHOOSE US
          </h2>
          <div className="h-1 w-24 bg-purple-600 mx-auto mb-6"></div>
          <p className="text-neutral-300 text-center max-w-2xl mx-auto mb-12">
            Experience quality, convenience, and unbeatable value—all in one place!
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature) => (
              <div 
                key={feature.id} 
                className="feature-card opacity-0 transform translate-y-8 transition-all duration-500 ease-out bg-gradient-to-b from-purple-900/40 to-black/40 rounded-xl overflow-hidden border border-purple-900/30 p-6"
              >
                <div className="flex items-center mb-4">
                  {feature.icon}
                  <h3 className="text-lg font-medium tracking-wider ml-3">
                    {feature.title}
                  </h3>
                </div>
                <p className="text-neutral-400 text-sm">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Media Feed */}
      <section className="py-16 px-6 md:px-12 bg-black border-t border-purple-900/30">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-medium tracking-widest mb-6 text-center">
            FOLLOW US ON @fadclothing
          </h2>
          <p className="text-neutral-300 text-center max-w-2xl mx-auto mb-12">
            Experience quality, convenience, and unbeatable value—all in one place!
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-4 mb-6">
            {socialPosts.map((post) => (
              <div 
                key={post.id} 
                className="aspect-square overflow-hidden relative group"
              >
                <img 
                  src={post.image} 
                  alt={post.alt} 
                  className="w-full h-full object-cover object-center transform scale-100 group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <Instagram className="w-8 h-8 text-white" />
                </div>
              </div>
            ))}
          </div>
          
          <div className="flex justify-center">
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-purple-600 text-white px-4 py-2 rounded-md flex items-center gap-2 hover:bg-purple-700 transition-all"
            >
              <Instagram size={16} />
              Follow On Instagram
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-purple-900/30 pt-12 pb-6">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <div>
              <h3 className="text-lg font-medium mb-4">fad</h3>
              <p className="text-sm text-neutral-400 mb-4">
                Experience quality, convenience, and unbeatable value—all in one place!
              </p>
              <div className="flex gap-3">
                <a href="#" className="text-neutral-400 hover:text-white transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
                  </svg>
                </a>
                <a href="#" className="text-neutral-400 hover:text-white transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"/>
                  </svg>
                </a>
                <a href="#" className="text-neutral-400 hover:text-white transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
                  </svg>
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-medium mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm text-neutral-400">
                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Collections</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-medium mb-4">Contact Us</h3>
              <ul className="space-y-3 text-sm text-neutral-400">
                <li className="flex items-start gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 min-w-5 text-neutral-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>Premium Retail, 20/303 Studio, Mumbai</span>
                </li>
                <li className="flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 min-w-5 text-neutral-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span>contact@fadclothing.co.in</span>
                </li>
                <li className="flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 min-w-5 text-neutral-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span>+91 9898989898</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-medium mb-4">We Accept</h3>
              <ul className="space-y-2 text-sm text-neutral-400">
                <li><a href="#" className="hover:text-white transition-colors flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-neutral-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                  </svg>
                  <span>Visa / Mastercard</span>
                </a></li>
                <li><a href="#" className="hover:text-white transition-colors flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-neutral-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2z" />
                  </svg>
                  <span>Secure Payment</span>
                </a></li>
                <li><a href="#" className="hover:text-white transition-colors flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-neutral-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 
