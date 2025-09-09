import React from 'react';
import { motion } from 'framer-motion';
import { useParams, useNavigate } from 'react-router-dom';
import { SidebarTrigger } from '@/components/ui/sidebar';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, MessageCircle, User, Calendar, Tag } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();

  // Mock product data - in real app, this would come from API
  const product = {
    id: '1',
    title: 'Vintage Denim Jacket',
    price: 25,
    image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=600',
    seller: 'Sarah M.',
    sellerAvatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100',
    category: 'Clothing',
    condition: 'Good',
    description: 'This vintage denim jacket is in great condition and perfect for casual outfits. It has been barely worn and comes from a smoke-free home. The jacket features classic styling with button closure and two chest pockets. Size Medium.',
    postedDate: '2 days ago',
    location: 'Downtown Area',
    images: [
      'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=600',
      'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=600',
      'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=600'
    ]
  };

  const handleMessage = () => {
    toast({
      title: "Message sent!",
      description: `Your message to ${product.seller} has been sent.`,
    });
  };

  return (
    <div className="flex flex-col h-full w-full">
      <header className="flex items-center sticky top-0 z-10 gap-4 border-b border-border/50 bg-background/80 backdrop-blur-sm px-6 py-4">
        <SidebarTrigger />
        <Button
          variant="ghost"
          size="sm"
          onClick={() => navigate('/business')}
          className="gap-2"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Business
        </Button>
        <div className="flex-1">
          <h1 className="text-2xl font-bold">{product.title}</h1>
          <p className="text-muted-foreground">Product Details</p>
        </div>
      </header>
      
      <main className="flex-1 overflow-auto p-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Product Images */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-4"
            >
              <div className="aspect-square rounded-xl overflow-hidden">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="grid grid-cols-3 gap-2">
                {product.images.slice(0, 3).map((image, index) => (
                  <div key={index} className="aspect-square rounded-lg overflow-hidden">
                    <img
                      src={image}
                      alt={`${product.title} ${index + 1}`}
                      className="w-full h-full object-cover cursor-pointer hover:opacity-80 transition-opacity"
                    />
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Product Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="space-y-6"
            >
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Badge variant="outline">{product.category}</Badge>
                  <Badge variant="secondary">{product.condition}</Badge>
                </div>
                <h1 className="text-3xl font-bold mb-2">{product.title}</h1>
                <p className="text-4xl font-bold text-primary mb-4">${product.price}</p>
              </div>

              <Card className="lagom-card">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <User className="h-5 w-5" />
                    Seller Information
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-3 mb-4">
                    <img
                      src={product.sellerAvatar}
                      alt={product.seller}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <p className="font-semibold">{product.seller}</p>
                      <p className="text-sm text-muted-foreground">{product.location}</p>
                    </div>
                  </div>
                  <Button onClick={handleMessage} className="w-full gap-2">
                    <MessageCircle className="h-4 w-4" />
                    Message Seller
                  </Button>
                </CardContent>
              </Card>

              <Card className="lagom-card">
                <CardHeader>
                  <CardTitle>Description</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    {product.description}
                  </p>
                </CardContent>
              </Card>

              <Card className="lagom-card">
                <CardHeader>
                  <CardTitle>Details</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Tag className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">Category: {product.category}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">Posted: {product.postedDate}</span>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProductDetails;