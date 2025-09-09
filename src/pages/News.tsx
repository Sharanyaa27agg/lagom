import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SidebarTrigger } from '@/components/ui/sidebar';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Newspaper, TrendingUp, DollarSign, Clock } from 'lucide-react';

const News = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const newsArticles = [
    {
      id: '1',
      title: 'Teen Savings Accounts: Everything You Need to Know',
      summary: 'Learn about the best savings accounts for teenagers and how to maximize your money.',
      category: 'Personal Finance',
      readTime: '5 min read',
      publishedAt: '2 hours ago',
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400',
      source: 'Finance Today'
    },
    {
      id: '2',
      title: 'Stock Market Basics: A Beginner\'s Guide',
      summary: 'Understanding the fundamentals of stock market investing for young adults.',
      category: 'Investing',
      readTime: '8 min read',
      publishedAt: '4 hours ago',
      image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=400',
      source: 'Investment Weekly'
    },
    {
      id: '3',
      title: 'Cryptocurrency Trends: What Teens Should Know',
      summary: 'The latest developments in cryptocurrency and what it means for young investors.',
      category: 'Crypto',
      readTime: '6 min read',
      publishedAt: '6 hours ago',
      image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=400',
      source: 'Crypto News'
    },
    {
      id: '4',
      title: 'Budgeting Apps That Actually Work for Students',
      summary: 'A comprehensive review of the best budgeting apps designed for student life.',
      category: 'Technology',
      readTime: '7 min read',
      publishedAt: '8 hours ago',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400',
      source: 'Tech Finance'
    },
    {
      id: '5',
      title: 'Side Hustles That Pay: Ideas for Teen Entrepreneurs',
      summary: 'Creative ways for teenagers to earn extra money while balancing school.',
      category: 'Entrepreneurship',
      readTime: '10 min read',
      publishedAt: '12 hours ago',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400',
      source: 'Young Money'
    },
    {
      id: '6',
      title: 'Market Update: Tech Stocks Surge Amid AI Boom',
      summary: 'Technology stocks continue to rise as artificial intelligence drives innovation.',
      category: 'Market News',
      readTime: '4 min read',
      publishedAt: '1 day ago',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400',
      source: 'Market Watch'
    }
  ];

  const categories = ['all', 'Personal Finance', 'Investing', 'Crypto', 'Technology', 'Entrepreneurship', 'Market News'];

  const filteredArticles = selectedCategory === 'all' 
    ? newsArticles 
    : newsArticles.filter(article => article.category === selectedCategory);

  const getCategoryColor = (category: string) => {
    const colors = {
      'Personal Finance': 'bg-blue-500/10 text-blue-500',
      'Investing': 'bg-green-500/10 text-green-500',
      'Crypto': 'bg-orange-500/10 text-orange-500',
      'Technology': 'bg-purple-500/10 text-purple-500',
      'Entrepreneurship': 'bg-pink-500/10 text-pink-500',
      'Market News': 'bg-red-500/10 text-red-500'
    };
    return colors[category as keyof typeof colors] || 'bg-gray-500/10 text-gray-500';
  };

  return (
    <div className="flex flex-col h-full w-full">
      <header className="flex items-center sticky top-0 z-10 gap-4 border-b border-border/50 bg-background/80 backdrop-blur-sm px-6 py-4">
        <SidebarTrigger />
        <div>
          <h1 className="text-2xl font-bold flex items-center gap-2">
            <Newspaper className="h-6 w-6 text-primary" />
            Finance News
          </h1>
          <p className="text-muted-foreground">Stay updated with the latest financial trends</p>
        </div>
      </header>
      
      <main className="flex-1 overflow-auto p-6 space-y-6">
        {/* Category Filter */}
        <Card className="lagom-card">
          <CardContent className="p-4">
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Badge
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  className="cursor-pointer capitalize"
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Featured Article */}
        {filteredArticles.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <Card className="lagom-card overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/3">
                  <img
                    src={filteredArticles[0].image}
                    alt={filteredArticles[0].title}
                    className="w-full h-48 md:h-full object-cover"
                  />
                </div>
                <div className="md:w-2/3 p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Badge className={getCategoryColor(filteredArticles[0].category)}>
                      {filteredArticles[0].category}
                    </Badge>
                    <span className="text-sm text-muted-foreground">Featured</span>
                  </div>
                  <h2 className="text-2xl font-bold mb-3">{filteredArticles[0].title}</h2>
                  <p className="text-muted-foreground mb-4">{filteredArticles[0].summary}</p>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {filteredArticles[0].readTime}
                    </div>
                    <span>{filteredArticles[0].publishedAt}</span>
                    <span>{filteredArticles[0].source}</span>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        )}

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredArticles.slice(1).map((article, index) => (
            <motion.div
              key={article.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: (index + 1) * 0.1 }}
            >
              <Card className="lagom-card hover:shadow-lg transition-all duration-300 cursor-pointer group h-full">
                <div className="relative overflow-hidden rounded-t-xl">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <Badge 
                    className={`absolute top-3 left-3 ${getCategoryColor(article.category)}`}
                  >
                    {article.category}
                  </Badge>
                </div>
                <CardContent className="p-4 flex flex-col h-full">
                  <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors line-clamp-2">
                    {article.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4 flex-1 line-clamp-3">
                    {article.summary}
                  </p>
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {article.readTime}
                    </div>
                    <span>{article.publishedAt}</span>
                  </div>
                  <div className="text-xs text-muted-foreground mt-1">
                    {article.source}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {filteredArticles.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <Newspaper className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">No articles found</h3>
            <p className="text-muted-foreground">Try selecting a different category</p>
          </motion.div>
        )}
      </main>
    </div>
  );
};

export default News;