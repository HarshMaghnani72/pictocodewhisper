
import { motion } from "framer-motion";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { useEffect, useState } from "react";

const CollectionPage = () => {
  const { id } = useParams<{ id: string }>();
  const [loaded, setLoaded] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 300);
    
    return () => clearTimeout(timer);
  }, []);
  
  // Collection data mapping
  const collections = {
    "sherwani": {
      name: "SHERWANI",
      description: "Our Sherwani collection embodies the essence of royal Indian heritage. Each piece is crafted with meticulous attention to detail, featuring exquisite embroidery, premium fabrics, and timeless silhouettes. Perfect for weddings, ceremonies, and special occasions where you want to make a statement of cultural elegance.",
      products: [
        { id: 1, name: "Royal Blue Sherwani", price: 599.99, image: "/lovable-uploads/10f79791-8753-45ac-b3eb-74ca64e881d5.png" },
        { id: 2, name: "Cream Wedding Sherwani", price: 699.99, image: "/lovable-uploads/10f79791-8753-45ac-b3eb-74ca64e881d5.png" },
        { id: 3, name: "Maroon Velvet Sherwani", price: 749.99, image: "/lovable-uploads/10f79791-8753-45ac-b3eb-74ca64e881d5.png" }
      ]
    },
    "tuxedo": {
      name: "TUXEDO",
      description: "Our Tuxedo collection represents the pinnacle of western formal wear. Expertly tailored with premium fabrics, each piece offers a perfect fit and timeless elegance. Whether it's for a black-tie event, wedding, or special occasion, our tuxedos ensure you look distinguished and refined.",
      products: [
        { id: 1, name: "Black Classic Tuxedo", price: 799.99, image: "/lovable-uploads/10f79791-8753-45ac-b3eb-74ca64e881d5.png" },
        { id: 2, name: "Navy Blue Slim Fit Tuxedo", price: 849.99, image: "/lovable-uploads/10f79791-8753-45ac-b3eb-74ca64e881d5.png" },
        { id: 3, name: "Charcoal Gray Tuxedo", price: 829.99, image: "/lovable-uploads/10f79791-8753-45ac-b3eb-74ca64e881d5.png" }
      ]
    },
    "indo-western": {
      name: "INDO WESTERN",
      description: "Our Indo Western collection beautifully blends traditional Indian aesthetics with contemporary western styling. These fusion outfits offer the perfect balance between cultural heritage and modern fashion. Ideal for those who appreciate tradition but want to express their individual style with a contemporary twist.",
      products: [
        { id: 1, name: "Modern Indo-Western Set", price: 649.99, image: "/lovable-uploads/10f79791-8753-45ac-b3eb-74ca64e881d5.png" },
        { id: 2, name: "Blue Bandhgala with Trousers", price: 699.99, image: "/lovable-uploads/10f79791-8753-45ac-b3eb-74ca64e881d5.png" },
        { id: 3, name: "Beige Kurta with Jacket", price: 629.99, image: "/lovable-uploads/10f79791-8753-45ac-b3eb-74ca64e881d5.png" }
      ]
    },
    "lehenga": {
      name: "LEHENGA",
      description: "Our Lehenga collection celebrates the rich tradition of Indian bridal and festive wear. Each lehenga features vibrant colors, intricate embroidery, and flowing silhouettes. Crafted with premium fabrics and adorned with detailed handwork, these pieces are perfect for weddings, festivals, and special ceremonies.",
      products: [
        { id: 1, name: "Magenta Bridal Lehenga", price: 1299.99, image: "/lovable-uploads/10f79791-8753-45ac-b3eb-74ca64e881d5.png" },
        { id: 2, name: "Red Wedding Lehenga", price: 1399.99, image: "/lovable-uploads/10f79791-8753-45ac-b3eb-74ca64e881d5.png" },
        { id: 3, name: "Pink Embellished Lehenga", price: 1199.99, image: "/lovable-uploads/10f79791-8753-45ac-b3eb-74ca64e881d5.png" }
      ]
    },
    "gown": {
      name: "GOWN",
      description: "Our Gown collection showcases the epitome of elegance and sophistication. From flowing silhouettes to structured designs, each gown is crafted to create a striking presence. Perfect for weddings, galas, and formal events, these gowns combine timeless style with contemporary details.",
      products: [
        { id: 1, name: "Ivory Wedding Gown", price: 1099.99, image: "/lovable-uploads/10f79791-8753-45ac-b3eb-74ca64e881d5.png" },
        { id: 2, name: "Blush Pink Evening Gown", price: 999.99, image: "/lovable-uploads/10f79791-8753-45ac-b3eb-74ca64e881d5.png" },
        { id: 3, name: "Royal Blue Ball Gown", price: 1149.99, image: "/lovable-uploads/10f79791-8753-45ac-b3eb-74ca64e881d5.png" }
      ]
    },
    "anarkali": {
      name: "ANARKALI",
      description: "Our Anarkali collection presents the timeless elegance of this classic Indian silhouette. Characterized by a fitted bodice flowing into a pleated skirt, each piece features intricate embroidery and premium fabrics. Perfect for weddings, receptions, and festive occasions, these Anarkalis offer grace and sophistication.",
      products: [
        { id: 1, name: "Royal Blue Anarkali", price: 499.99, image: "/lovable-uploads/10f79791-8753-45ac-b3eb-74ca64e881d5.png" },
        { id: 2, name: "Emerald Green Anarkali", price: 549.99, image: "/lovable-uploads/10f79791-8753-45ac-b3eb-74ca64e881d5.png" },
        { id: 3, name: "Maroon Embroidered Anarkali", price: 579.99, image: "/lovable-uploads/10f79791-8753-45ac-b3eb-74ca64e881d5.png" }
      ]
    }
  };
  
  // Default collection if ID doesn't match
  const defaultCollection = {
    name: "COLLECTION",
    description: "This collection is currently unavailable.",
    products: []
  };
  
  // @ts-ignore - Get the collection data based on ID
  const collection = collections[id] || defaultCollection;
  
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
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: loaded ? 1 : 0, y: loaded ? 0 : 30 }}
          transition={{ duration: 0.7 }}
        >
          <h1 className="text-3xl md:text-4xl font-medium tracking-wider mb-6 text-center">
            {collection.name}
          </h1>
          
          <p className="text-neutral-300 max-w-3xl mx-auto text-center mb-12">
            {collection.description}
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {collection.products.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: loaded ? 1 : 0, y: loaded ? 0 : 30 }}
                transition={{ duration: 0.7, delay: 0.1 + index * 0.1 }}
                className="glass-card group overflow-hidden"
              >
                <div className="relative h-96 overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black to-transparent">
                    <div>
                      <h3 className="text-xl font-medium mb-2">{product.name}</h3>
                      <div className="flex justify-between items-center">
                        <p className="text-lg font-bold">${product.price}</p>
                        <button className="btn-outline text-sm py-1.5">Add to Cart</button>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          {collection.products.length > 0 && (
            <div className="mt-12 text-center">
              <button className="btn-primary">
                View All {collection.name} Products
              </button>
            </div>
          )}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default CollectionPage;
