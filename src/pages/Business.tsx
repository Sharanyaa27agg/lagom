import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { SidebarTrigger } from '@/components/ui/sidebar';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Store, Search, Filter, Plus } from 'lucide-react';

const Business = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const products = [
    {
      id: '1',
      title: 'Vintage Denim Jacket',
      price: 25,
      image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=300',
      seller: 'Sarah M.',
      category: 'Clothing',
      condition: 'Good',
      description: 'Barely worn vintage denim jacket, perfect for casual outfits'
    },
    {
      id: '2',
      title: 'Gaming Headset',
      price: 45,
      image: 'https://images.unsplash.com/photo-1599669454699-248893623440?w=300',
      seller: 'Mike K.',
      category: 'Electronics',
      condition: 'Excellent',
      description: 'High-quality gaming headset with noise cancellation'
    },
    {
      id: '3',
      title: 'Skateboard Deck',
      price: 30,
      image: 'https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=300',
      seller: 'Alex R.',
      category: 'Sports',
      condition: 'Good',
      description: 'Custom skateboard deck, great for beginners'
    },
    {
      id: '4',
      title: 'Math Textbooks Set',
      price: 20,
      image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=300',
      seller: 'Emma L.',
      category: 'Books',
      condition: 'Fair',
      description: 'Complete set of high school math textbooks'
    },
    {
      id: '5',
      title: 'Wireless Earbuds',
      price: 35,
      image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=300',
      seller: 'Jordan P.',
      category: 'Electronics',
      condition: 'Excellent',
      description: 'Brand new wireless earbuds, never used'
    },
    {
      id: '6',
      title: 'Thrift Store Sweater',
      price: 15,
      image: 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=300',
      seller: 'Taylor S.',
      category: 'Clothing',
      condition: 'Good',
      description: 'Cozy vintage sweater, perfect for winter'
    }
  ];

  const categories = ['all', 'Clothing', 'Electronics', 'Sports', 'Books', 'Other'];

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="flex flex-col h-full w-full">
      <header className="flex items-center sticky top-0 z-10 gap-4 border-b border-border/50 bg-background/80 backdrop-blur-sm px-6 py-4">
        <SidebarTrigger />
        <div className="flex-1">
          <h1 className="text-2xl font-bold flex items-center gap-2">
            <Store className="h-6 w-6 text-primary" />
            LAGOM Business
          </h1>
          <p className="text-muted-foreground">Buy and sell affordable items with other teens</p>
        </div>
        <Button className="gap-2">
          <Plus className="h-4 w-4" />
          List Item
        </Button>
      </header>
      
      <main className="flex-1 overflow-auto p-6 space-y-6">
        {/* Search and Filter */}
        <Card className="lagom-card">
          <CardContent className="p-4">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search for items..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              <div className="flex gap-2 flex-wrap">
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={selectedCategory === category ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedCategory(category)}
                    className="capitalize"
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Link to={`/business/product/${product.id}`}>
                <Card className="lagom-card hover:shadow-lg transition-all duration-300 cursor-pointer group">
                  <div className="relative overflow-hidden rounded-t-xl">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <Badge 
                      className="absolute top-2 right-2 bg-background/80 text-foreground"
                      variant="secondary"
                    >
                      {product.condition}
                    </Badge>
                  </div>
                  <CardContent className="p-4">
                    <div className="space-y-2">
                      <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">
                        {product.title}
                      </h3>
                      <p className="text-sm text-muted-foreground line-clamp-2">
                        {product.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-2xl font-bold text-primary">
                          ${product.price}
                        </span>
                        <Badge variant="outline">
                          {product.category}
                        </Badge>
                      </div>
                      <div className="text-sm text-muted-foreground">
                        Sold by {product.seller}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <Store className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">No items found</h3>
            <p className="text-muted-foreground">Try adjusting your search or filters</p>
          </motion.div>
        )}
      </main>
    </div>
  );
};

export default Business;