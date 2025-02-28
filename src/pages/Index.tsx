
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Search, ShoppingCart, User } from "lucide-react";

const Index = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const featuredRef = useRef<HTMLDivElement>(null);

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
    </div>
  );
};

export default Index;
