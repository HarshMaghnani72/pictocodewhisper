
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const AboutPage = () => {
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
        
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-medium tracking-wider mb-8 text-center">
            ABOUT US
          </h1>
          
          <p className="text-neutral-300 mb-6">
            Welcome to <span className="font-semibold text-white">fad</span>, where tradition meets contemporary style. Our journey began with a simple vision: to create exquisite clothing that honors cultural heritage while embracing modern design sensibilities.
          </p>
          
          <p className="text-neutral-300 mb-6">
            Each piece in our collection is meticulously crafted, combining time-honored techniques with innovative approaches. We work with skilled artisans who bring decades of expertise to every stitch, every embellishment, and every detail.
          </p>
          
          <p className="text-neutral-300 mb-12">
            Quality is our cornerstone. We source only the finest materials, ensuring that each garment not only looks exceptional but feels extraordinary against your skin. Our commitment to excellence extends beyond our products to every aspect of your experience with us.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="glass-card p-6">
              <h3 className="text-lg font-medium mb-3">Our Mission</h3>
              <p className="text-sm text-neutral-400">
                To create clothing that empowers individuals to express their unique identity while honoring cultural traditions.
              </p>
            </div>
            
            <div className="glass-card p-6">
              <h3 className="text-lg font-medium mb-3">Our Vision</h3>
              <p className="text-sm text-neutral-400">
                To become the global destination for those seeking to blend heritage with contemporary fashion.
              </p>
            </div>
            
            <div className="glass-card p-6">
              <h3 className="text-lg font-medium mb-3">Our Values</h3>
              <p className="text-sm text-neutral-400">
                Craftsmanship, authenticity, innovation, and sustainability guide every decision we make.
              </p>
            </div>
          </div>
          
          <div className="text-center">
            <Link 
              to="/products" 
              className="btn-primary inline-block"
            >
              Explore Our Collections
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default AboutPage;
