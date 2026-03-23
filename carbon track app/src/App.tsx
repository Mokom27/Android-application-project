import React, { useState } from "react";
import {
  Leaf,
  TrendingDown,
  ShoppingBag,
  Utensils,
  Car,
  Home,
  Award,
  Users,
  PlusCircle,
  Share2,
  Heart,
  X,
} from "lucide-react";

export default function CarbonTracker() {
  const [view, setView] = useState<"dashboard" | "transactions" | "squad">("dashboard");
  const [selectedSquad, setSelectedSquad] = useState<string | null>(null);

  // Interactive states
  const [squads, setSquads] = useState(["Dorm Eco Team", "CS Study Squad"]);
  const [habits, setHabits] = useState([
    "Used reusable cup today",
    "Walked to lecture hall",
    "Meat-free lunch",
  ]);
  const [badges] = useState(["Shuttle Star", "First Week Done", "Low Carbon Hero"]);
  const [streak] = useState(6);
  const [gardenProgress] = useState(62);

  // Modal & input states
  const [showSquadModal, setShowSquadModal] = useState(false);
  const [newSquadName, setNewSquadName] = useState("");
  const [newHabit, setNewHabit] = useState("");

  const transactions = [
    {
      id: 1,
      name: "Campus Shuttle",
      category: "transport",
      amount: 3.5,
      carbon: 0.8,
      date: "Dec 18",
      icon: Car,
      color: "bg-orange-100 text-orange-600",
    },
    {
      id: 2,
      name: "Campus Cafeteria",
      category: "food",
      amount: 8.5,
      carbon: 2.1,
      date: "Dec 18",
      icon: Utensils,
      color: "bg-red-100 text-red-600",
    },
    {
      id: 3,
      name: "Online Textbooks",
      category: "shopping",
      amount: 35.0,
      carbon: 4.2,
      date: "Dec 17",
      icon: ShoppingBag,
      color: "bg-purple-100 text-purple-600",
    },
    {
      id: 4,
      name: "Dorm Electricity",
      category: "utilities",
      amount: 25.0,
      carbon: 8.5,
      date: "Dec 16",
      icon: Home,
      color: "bg-blue-100 text-blue-600",
    },
    {
      id: 5,
      name: "Coffee Shop",
      category: "food",
      amount: 5.0,
      carbon: 1.2,
      date: "Dec 15",
      icon: Utensils,
      color: "bg-red-100 text-red-600",
    },
    {
      id: 6,
      name: "Ride Share",
      category: "transport",
      amount: 12.0,
      carbon: 2.5,
      date: "Dec 14",
      icon: Car,
      color: "bg-orange-100 text-orange-600",
    },
    {
      id: 7,
      name: "Grocery Store",
      category: "shopping",
      amount: 28.0,
      carbon: 3.8,
      date: "Dec 13",
      icon: ShoppingBag,
      color: "bg-purple-100 text-purple-600",
    },
  ];

  const totalCarbon = transactions.reduce((sum, t) => sum + t.carbon, 0);
  const avgCarbon = (totalCarbon / 7).toFixed(1);

  const suggestions = [
    {
      title: "Use Campus Bike Share",
      saving: "Save 1.8 kg CO2/trip",
      description: "Free with student ID! Better than ride-sharing apps",
      color: "border-l-green-500",
    },
    {
      title: "Join Meal Prep Group",
      saving: "Save 3.2 kg CO2/week",
      description: "Cook with roommates - cheaper and greener!",
      color: "border-l-blue-500",
    },
    {
      title: "Buy Digital Textbooks",
      saving: "Save 4.0 kg CO2/book",
      description: "E-books have 75% less carbon than printed versions",
      color: "border-l-yellow-500",
    },
  ];

  // Create new squad
  const createSquad = () => {
    if (newSquadName.trim()) {
      setSquads([...squads, newSquadName.trim()]);
      setNewSquadName("");
      setShowSquadModal(false);
    }
  };

  // Add new habit
  const addHabit = () => {
    if (newHabit.trim()) {
      setHabits([...habits, newHabit.trim()]);
      setNewHabit("");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-cyan-50 to-blue-50 p-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-3xl shadow-lg p-6 mb-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="bg-gradient-to-br from-teal-500 to-cyan-600 p-3 rounded-2xl">
                <Leaf className="text-white" size={28} />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-800">CarbonTrack</h1>
                <p className="text-sm text-gray-500">Student Edition</p>
              </div>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => setView("dashboard")}
                className={`px-4 py-2 rounded-xl font-medium transition-all ${
                  view === "dashboard" ? "bg-teal-500 text-white" : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                Dashboard
              </button>
              <button
                onClick={() => setView("transactions")}
                className={`px-4 py-2 rounded-xl font-medium transition-all ${
                  view === "transactions" ? "bg-teal-500 text-white" : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                Spending
              </button>
            </div>
          </div>
        </div>

        {view === "dashboard" && (
          <>
            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div className="bg-gradient-to-br from-teal-400 to-teal-600 rounded-2xl p-6 text-white shadow-lg">
                <p className="text-teal-100 text-sm mb-1">Weekly Footprint</p>
                <p className="text-4xl font-bold">{totalCarbon.toFixed(1)} kg</p>
                <p className="text-teal-100 text-sm mt-2">CO2 emissions</p>
              </div>

              <div className="bg-gradient-to-br from-cyan-400 to-cyan-600 rounded-2xl p-6 text-white shadow-lg">
                <p className="text-cyan-100 text-sm mb-1">Daily Average</p>
                <p className="text-4xl font-bold">{avgCarbon} kg</p>
                <p className="text-cyan-100 text-sm mt-2">per day</p>
              </div>

              <div className="bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl p-6 text-white shadow-lg">
                <div className="flex items-center gap-2 mb-1">
                  <Users size={18} />
                  <p className="text-blue-100 text-sm">Campus Ranking</p>
                </div>
                <p className="text-4xl font-bold">#142</p>
                <p className="text-blue-100 text-sm mt-2">out of 523 students</p>
              </div>
            </div>

            {/* Challenge Banner */}
            <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl p-5 mb-6 text-white shadow-lg">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-bold text-lg mb-1">🎯 Campus Challenge</h3>
                  <p className="text-purple-100 text-sm">
                    Reduce 5kg CO2 this week - 289 students joined!
                  </p>
                </div>
                <button className="bg-white text-purple-600 px-4 py-2 rounded-xl font-semibold hover:bg-purple-50 transition-all">
                  Join
                </button>
              </div>
            </div>

            {/* Comparison Chart */}
            <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
              <h2 className="text-xl font-bold text-gray-800 mb-4">You vs Campus Average</h2>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium text-gray-700">You: {avgCarbon} kg/day</span>
                    <span className="text-sm text-teal-600 font-medium">18% below average! 🌱</span>
                  </div>
                  <div className="h-4 bg-gray-100 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-teal-400 to-teal-600 rounded-full"
                      style={{ width: "64%" }}
                    ></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium text-gray-400">Campus Average: 4.0 kg/day</span>
                  </div>
                  <div className="h-4 bg-gray-100 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gray-300 rounded-full"
                      style={{ width: "78%" }}
                    ></div>
                  </div>
                </div>
              </div>
              <div className="mt-4 p-3 bg-teal-50 rounded-xl">
                <p className="text-sm text-gray-700">
                  💡 <span className="font-semibold">Tip:</span> You're doing great! Share your progress on the campus leaderboard to inspire others.
                </p>
              </div>
            </div>

            {/* Badges */}
            <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
              <div className="flex items-center gap-3 mb-4">
                <Award className="text-yellow-600" size={26} />
                <h2 className="text-xl font-bold text-gray-800">Achievements</h2>
              </div>
              <div className="flex flex-wrap gap-2 mb-4">
                {badges.map((badge, i) => (
                  <div
                    key={i}
                    className="px-4 py-2 bg-yellow-50 text-yellow-800 rounded-full text-sm font-medium flex items-center gap-2 shadow-sm"
                  >
                    <Award size={16} /> {badge}
                  </div>
                ))}
              </div>
              {streak > 0 && (
                <p className="text-lg font-semibold text-orange-700 flex items-center gap-2">
                  🔥 {streak}-day streak – you're on fire!
                </p>
              )}
            </div>

            {/* Squads */}
            <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
              <div className="flex items-center gap-3 mb-4">
                <Users className="text-blue-600" size={26} />
                <h2 className="text-xl font-bold text-gray-800">Your Squads</h2>
              </div>
              <div className="space-y-3">
                {squads.map((squad, i) => (
                  <div
                    key={i}
                    className="p-4 bg-blue-50 rounded-xl border border-blue-100 flex justify-between items-center"
                  >
                    <span className="font-medium">{squad}</span>
                    <button
                      onClick={() => {
                        setSelectedSquad(squad);
                        setView("squad");
                      }}
                      className="px-4 py-1 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700 transition"
                    >
                      View →
                    </button>
                  </div>
                ))}
              </div>
              <button
                onClick={() => setShowSquadModal(true)}
                className="mt-4 text-blue-600 flex items-center gap-2 text-sm font-medium"
              >
                <PlusCircle size={18} /> Join or create a new squad
              </button>
            </div>

            {/* Eco Garden */}
            <div className="bg-white rounded-2xl shadow-lg p-6 mb-6 text-center">
              <div className="flex items-center justify-center gap-3 mb-4">
                <Heart className="text-emerald-600" size={26} />
                <h2 className="text-xl font-bold text-gray-800">Campus Eco Garden</h2>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-5 overflow-hidden mb-3">
                <div
                  className="h-full bg-gradient-to-r from-emerald-400 to-emerald-600"
                  style={{ width: `${gardenProgress}%` }}
                ></div>
              </div>
              <p className="text-lg font-semibold text-emerald-700">
                {gardenProgress}% grown • {Math.floor(gardenProgress / 10)} virtual trees planted
              </p>
              <p className="text-sm text-gray-600 mt-2">Every kg saved helps the garden grow!</p>
            </div>

            {/* Habits */}
            <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
              <div className="flex items-center gap-3 mb-4">
                <PlusCircle className="text-purple-600" size={26} />
                <h2 className="text-xl font-bold text-gray-800">Recent Habits Logged</h2>
              </div>
              <ul className="space-y-2 mb-5">
                {habits.map((habit, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-700">
                    <span className="text-green-600 text-xl">✓</span> {habit}
                  </li>
                ))}
              </ul>
              <div className="flex gap-3">
                <input
                  type="text"
                  value={newHabit}
                  onChange={(e) => setNewHabit(e.target.value)}
                  placeholder="e.g. Turned off lights in dorm"
                  className="flex-1 px-4 py-3 border border-purple-200 rounded-xl focus:outline-none focus:border-purple-500"
                />
                <button
                  onClick={addHabit}
                  className="bg-purple-600 text-white px-6 rounded-xl hover:bg-purple-700 transition"
                >
                  Add
                </button>
              </div>
            </div>

            {/* Share Button */}
            <button className="w-full py-4 bg-gradient-to-r from-teal-500 to-cyan-600 text-white rounded-2xl font-bold text-lg shadow-lg hover:from-teal-600 hover:to-cyan-700 transition-all flex items-center justify-center gap-3 mb-8">
              <Share2 size={22} />
              Share My Weekly Impact
            </button>

            {/* Suggestions */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <div className="flex items-center gap-2 mb-4">
                <TrendingDown className="text-teal-600" size={24} />
                <h2 className="text-xl font-bold text-gray-800">Student-Friendly Tips</h2>
              </div>
              <div className="space-y-3">
                {suggestions.map((sug, i) => (
                  <div
                    key={i}
                    className={`border-l-4 ${sug.color} bg-gray-50 p-4 rounded-r-xl hover:bg-gray-100 transition-all cursor-pointer`}
                  >
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-semibold text-gray-800">{sug.title}</h3>
                        <p className="text-sm text-gray-600 mt-1">{sug.description}</p>
                      </div>
                      <span className="text-xs font-bold text-teal-600 bg-teal-100 px-3 py-1 rounded-full whitespace-nowrap">
                        {sug.saving}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </>
        )}

        {view === "transactions" && (
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Recent Spending</h2>
            <div className="space-y-3">
              {transactions.map((t) => {
                const Icon = t.icon;
                return (
                  <div
                    key={t.id}
                    className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-all"
                  >
                    <div className={`p-3 rounded-xl ${t.color}`}>
                      <Icon size={24} />
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold text-gray-800">{t.name}</p>
                      <p className="text-sm text-gray-500">{t.date}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold text-gray-800">${t.amount.toFixed(2)}</p>
                      <p className="text-sm font-medium text-orange-500">{t.carbon} kg CO₂</p>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="mt-4 p-4 bg-blue-50 rounded-xl border border-blue-200">
              <p className="text-sm text-gray-700">
                📊 <span className="font-semibold">This Week:</span> $
                {transactions.reduce((sum, t) => sum + t.amount, 0).toFixed(2)} spent •{" "}
                {totalCarbon.toFixed(1)} kg CO₂
              </p>
            </div>
          </div>
        )}

        {view === "squad" && selectedSquad && (
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <button
              onClick={() => {
                setView("dashboard");
                setSelectedSquad(null);
              }}
              className="flex items-center gap-2 text-teal-600 mb-6 hover:underline"
            >
              ← Back to Dashboard
            </button>

            <h1 className="text-3xl font-bold text-gray-800 mb-2">{selectedSquad}</h1>
            <p className="text-teal-600 mb-8">Group Challenge • 12 members</p>

            <div className="bg-teal-50 p-6 rounded-2xl mb-6">
              <p className="font-semibold text-lg mb-2">This week's group goal</p>
              <p className="text-4xl font-bold text-teal-600">Reduce 18 kg CO₂ together</p>
              <p className="text-sm text-teal-700 mt-3">8.4 kg already saved • 47% complete</p>
            </div>

            <div className="text-center text-gray-500 italic">
              (In a real app this would show live group progress, chat, member list, etc.)
            </div>
          </div>
        )}

        {/* Squad Creation Modal */}
        {showSquadModal && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-3xl p-8 w-full max-w-md">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold text-gray-800">Create New Squad</h3>
                <button
                  onClick={() => setShowSquadModal(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <X size={28} />
                </button>
              </div>

              <input
                type="text"
                value={newSquadName}
                onChange={(e) => setNewSquadName(e.target.value)}
                placeholder="Squad name (e.g. Bio Lab Warriors)"
                className="w-full px-5 py-4 border border-gray-300 rounded-2xl text-lg focus:outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-200 mb-6"
              />

              <button
                onClick={createSquad}
                className="w-full bg-teal-600 text-white py-4 rounded-2xl font-semibold text-lg hover:bg-teal-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={!newSquadName.trim()}
              >
                Create Squad
              </button>
            </div>
          </div>
        )}

        {/* Footer */}
        <div className="mt-8 text-center">
          <p className="text-sm text-gray-500">🎓 Business Innovation Project Demo</p>
        </div>
      </div>
    </div>
  );
}