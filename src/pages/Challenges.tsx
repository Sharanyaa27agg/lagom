import React from 'react';
import { motion } from 'framer-motion';
import { SidebarTrigger } from '@/components/ui/sidebar';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Trophy, Users, Calendar, Target, Crown, Medal, Award } from 'lucide-react';

const Challenges = () => {
  const challenges = [
    {
      id: '1',
      title: 'Most Saved This Month',
      description: 'Save the most money compared to your spending',
      participants: 24,
      timeLeft: '12 days',
      prize: '$50 Gift Card',
      status: 'active',
      myRank: 3,
      progress: 75
    },
    {
      id: '2',
      title: 'Expense Tracker Champion',
      description: 'Log expenses every day for a week',
      participants: 18,
      timeLeft: '3 days',
      prize: '$25 Cash',
      status: 'active',
      myRank: 1,
      progress: 85
    },
    {
      id: '3',
      title: 'Goal Achiever',
      description: 'Complete any savings goal this month',
      participants: 31,
      timeLeft: '18 days',
      prize: 'Premium Features',
      status: 'active',
      myRank: 7,
      progress: 45
    }
  ];

  const leaderboard = [
    { rank: 1, name: 'Alex Johnson', points: 1250, avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100' },
    { rank: 2, name: 'Sarah Kim', points: 1180, avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100' },
    { rank: 3, name: 'Mike Chen', points: 1050, avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100' },
    { rank: 4, name: 'Emma Davis', points: 980, avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100' },
    { rank: 5, name: 'Jordan Lee', points: 920, avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100' },
  ];

  const getRankIcon = (rank: number) => {
    switch (rank) {
      case 1: return <Crown className="h-5 w-5 text-yellow-500" />;
      case 2: return <Medal className="h-5 w-5 text-gray-400" />;
      case 3: return <Award className="h-5 w-5 text-amber-600" />;
      default: return <span className="text-sm font-bold">#{rank}</span>;
    }
  };

  return (
    <div className="flex flex-col h-full w-full">
      <header className="flex items-center sticky top-0 z-10 gap-4 border-b border-border/50 bg-background/80 backdrop-blur-sm px-6 py-4">
        <SidebarTrigger />
        <div>
          <h1 className="text-2xl font-bold flex items-center gap-2">
            <Trophy className="h-6 w-6 text-primary" />
            Challenges
          </h1>
          <p className="text-muted-foreground">Compete with friends and win prizes</p>
        </div>
      </header>
      
      <main className="flex-1 overflow-auto p-6 space-y-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Active Challenges */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <h2 className="text-xl font-semibold mb-4">Active Challenges</h2>
              <div className="space-y-4">
                {challenges.map((challenge, index) => (
                  <motion.div
                    key={challenge.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Card className="lagom-card">
                      <CardHeader>
                        <div className="flex items-start justify-between">
                          <div>
                            <CardTitle className="flex items-center gap-2">
                              <Target className="h-5 w-5 text-primary" />
                              {challenge.title}
                            </CardTitle>
                            <CardDescription className="mt-1">
                              {challenge.description}
                            </CardDescription>
                          </div>
                          <Badge variant="outline" className="ml-2">
                            {challenge.status}
                          </Badge>
                        </div>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="grid grid-cols-3 gap-4 text-sm">
                          <div className="flex items-center gap-2">
                            <Users className="h-4 w-4 text-muted-foreground" />
                            <span>{challenge.participants} participants</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Calendar className="h-4 w-4 text-muted-foreground" />
                            <span>{challenge.timeLeft} left</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Trophy className="h-4 w-4 text-muted-foreground" />
                            <span>{challenge.prize}</span>
                          </div>
                        </div>

                        <div className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span>Your Progress</span>
                            <span>Rank #{challenge.myRank}</span>
                          </div>
                          <div className="w-full bg-secondary rounded-full h-2">
                            <div 
                              className="bg-primary h-2 rounded-full transition-all duration-300"
                              style={{ width: `${challenge.progress}%` }}
                            />
                          </div>
                          <div className="text-xs text-muted-foreground">
                            {challenge.progress}% complete
                          </div>
                        </div>

                        <Button className="w-full" variant="outline">
                          View Details
                        </Button>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Leaderboard */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <Card className="lagom-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Crown className="h-5 w-5 text-yellow-500" />
                  Leaderboard
                </CardTitle>
                <CardDescription>Top performers this month</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {leaderboard.map((user, index) => (
                    <motion.div
                      key={user.rank}
                      initial={{ opacity: 0, x: 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4 + index * 0.1 }}
                      className={`flex items-center gap-3 p-3 rounded-lg ${
                        user.rank <= 3 ? 'bg-primary/10' : 'bg-accent/20'
                      }`}
                    >
                      <div className="flex items-center justify-center w-8 h-8">
                        {getRankIcon(user.rank)}
                      </div>
                      <img
                        src={user.avatar}
                        alt={user.name}
                        className="w-10 h-10 rounded-full object-cover"
                      />
                      <div className="flex-1">
                        <p className="font-medium text-sm">{user.name}</p>
                        <p className="text-xs text-muted-foreground">{user.points} points</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Quick Stats */}
            <Card className="lagom-card mt-6">
              <CardHeader>
                <CardTitle>Your Stats</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Total Points</span>
                  <span className="font-semibold">1,050</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Challenges Won</span>
                  <span className="font-semibold">3</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Current Rank</span>
                  <span className="font-semibold">#3</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Streak</span>
                  <span className="font-semibold">7 days</span>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default Challenges;