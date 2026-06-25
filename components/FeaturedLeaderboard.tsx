'use client';

import { TrendingUp, Medal, Zap } from 'lucide-react';

export default function FeaturedLeaderboard() {
  const topPlayers = [
    { rank: 1, name: 'Alex Champion', elo: 2150, wins: 65, paloPoints: 5200 },
    { rank: 2, name: 'Jordan Pro', elo: 2080, wins: 58, paloPoints: 4850 },
    { rank: 3, name: 'Casey Elite', elo: 2020, wins: 52, paloPoints: 4500 },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container">
        <h2 className="text-4xl font-bold mb-12 text-center">Featured Leaderboard</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Top Players */}
          <div className="lg:col-span-2 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg p-8">
            <div className="space-y-4">
              {topPlayers.map((player) => (
                <div key={player.rank} className="flex items-center justify-between bg-white rounded-lg p-4 hover:shadow-md transition">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-white font-bold text-lg">
                      {player.rank}
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">{player.name}</h3>
                      <p className="text-sm text-gray-600">{player.wins} Wins</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-primary text-lg">{player.elo}</p>
                    <p className="text-sm text-gray-600">ELO Rating</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Stats */}
          <div className="space-y-4">
            <div className="bg-gradient-to-br from-accent to-accent/70 text-white rounded-lg p-6">
              <div className="flex items-center gap-3 mb-3">
                <TrendingUp size={24} />
                <h4 className="font-bold text-lg">Total Players</h4>
              </div>
              <p className="text-4xl font-bold">2,450+</p>
            </div>

            <div className="bg-gradient-to-br from-primary to-primary/70 text-white rounded-lg p-6">
              <div className="flex items-center gap-3 mb-3">
                <Medal size={24} />
                <h4 className="font-bold text-lg">Tournaments</h4>
              </div>
              <p className="text-4xl font-bold">45</p>
            </div>

            <div className="bg-gradient-to-br from-secondary to-secondary/70 text-dark rounded-lg p-6">
              <div className="flex items-center gap-3 mb-3">
                <Zap size={24} />
                <h4 className="font-bold text-lg">Active Games</h4>
              </div>
              <p className="text-4xl font-bold">128</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
