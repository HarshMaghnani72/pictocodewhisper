
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, Filter, SlidersHorizontal } from "lucide-react";
import { useState } from "react";

const ProductsPage = () => {
  const [activeFilter, setActiveFilter] = useState<string>("all");
  
  const products = [
    {
      id: "p1",
      name: "Royal Blue Sherwani",
      category: "sherwani",
      price: 599.99,
      image: "/lovable-uploads/10f79791-8753-45ac-b3eb-74ca64e881d5.png"
    },
    {
      id: "p2",
      name: "Black Classic Tuxedo",
      category: "tuxedo",
      price: 799.99,
      image: "/lovable-uploads/10f79791-8753-45ac-b3eb-74ca64e881d5.png"
    },
    {
      id: "p3",
      name: "Modern Indo-Western Set",
      category: "indo-western",
      price: 649.99,
      image: "/lovable-uploads/10f79791-8753-45ac-b3eb-74ca64e881d5.png"
    },
    {
      id: "p4",
      name: "Magenta Bridal Lehenga",
      category: "lehenga",
      price: 1299.99,
      image: "/lovable-uploads/10f79791-8753-45ac-b3eb-74ca64e881d5.png"
    },
    {
      id: "p5",
      name: "Ivory Wedding Gown",
      category: "gown",
      price: 1099.99,
      image: "/lovable-uploads/10f79791-8753-45ac-b3eb-74ca64e881d5.png"
    },
    {
      id: "p6",
      name: "Royal Blue Anarkali",
      category: "anarkali",
      price: 499.99,
      image: "/lovable-uploads/10f79791-8753-45ac-b3eb-74ca64e881d5.png"
    }
  ];

  const filterCategories = [
    { id: "all", name: "All Products" },
    { id: "sherwani", name: "Sherwani" },
    { id: "tuxedo", name: "Tuxedo" },
    { id: "indo-western", name: "Indo Western" },
    { id: "lehenga", name: "Lehenga" },
    { id: "gown", name: "Gown" },
    { id: "anarkali", name: "Anarkali" }
  ];

  const filteredProducts = activeFilter === "all" 
    ? products 
    : products.filter(product => product.category === activeFilter);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-black text-white pt-24 pb-16 px-6 md:px-12"
    >
      <div className="container mx-auto">
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 mb-12 hover:text-primary transition-colors"
        >
          <ArrowLeft size={16} />
          <span>Back to Home</span>
        </Link>
        
        <h1 className="text-3xl md:text-4xl font-medium tracking-wider mb-8 text-center">
          OUR PRODUCTS
        </h1>
        
        <div className="mb-8 flex flex-wrap justify-center gap-3">
          {filterCategories.map(category => (
            <button
              key={category.id}
              onClick={() => setActiveFilter(category.id)}
              className={`px-4 py-2 rounded-full text-sm transition-all ${
                activeFilter === category.id 
                  ? "bg-primary text-white" 
                  : "bg-black border border-white/20 text-white/70 hover:text-white hover:border-white/40"
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="glass-card group"
            >
              <div className="relative overflow-hidden h-80">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent">
                  <div className="flex justify-between items-end">
                    <div>
                      <p className="text-xs text-primary mb-1 uppercase tracking-wider">
                        {filterCategories.find(c => c.id === product.category)?.name}
                      </p>
                      <h3 className="font-medium">{product.name}</h3>
                    </div>
                    <p className="text-lg font-semibold">${product.price}</p>
                  </div>
                </div>
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <button className="btn-outline">View Details</button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ProductsPage;
