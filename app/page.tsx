'use client';

import React, { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, PieChart, Pie, Cell } from 'recharts';
import { Droplets, Sun, Thermometer, Wind, Leaf, AlertTriangle, CheckCircle, Clock } from 'lucide-react';

// Mock data generator to simulate real sensor data
const generateMockData = () => {
  const now = new Date();
  const data = [];
  
  for (let i = 23; i >= 0; i--) {
    const time = new Date(now.getTime() - i * 60 * 60 * 1000);
    data.push({
      time: time.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }),
      fullTime: time,
      soilMoisture: Math.floor(Math.random() * 40) + 30, // 30-70%
      temperature: Math.floor(Math.random() * 15) + 18, // 18-33°C
      humidity: Math.floor(Math.random() * 30) + 40, // 40-70%
      lightLevel: Math.floor(Math.random() * 800) + 200, // 200-1000 lux
      ph: (Math.random() * 2 + 6).toFixed(1), // 6.0-8.0
    });
  }
  return data;
};

// Mock plant data
const plantData = [
  {
    id: 1,
    name: "Tomatoes",
    status: "healthy",
    soilMoisture: 65,
    optimalMoisture: [60, 70],
    lastWatered: "2 hours ago",
    nextWatering: "in 6 hours"
  },
  {
    id: 2,
    name: "Basil",
    status: "needs-water",
    soilMoisture: 35,
    optimalMoisture: [50, 65],
    lastWatered: "8 hours ago",
    nextWatering: "now"
  },
  {
    id: 3,
    name: "Lettuce",
    status: "healthy",
    soilMoisture: 58,
    optimalMoisture: [55, 70],
    lastWatered: "4 hours ago",
    nextWatering: "in 4 hours"
  },
  {
    id: 4,
    name: "Carrots",
    status: "attention",
    soilMoisture: 45,
    optimalMoisture: [40, 60],
    lastWatered: "6 hours ago",
    nextWatering: "in 2 hours"
  }
];

const Dashboard = () => {
  const [sensorData, setSensorData] = useState<any[]>([]);
  const [currentWeather, setCurrentWeather] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  // Simulate fetching data from APIs
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Generate mock sensor data
      const mockSensorData = generateMockData();
      setSensorData(mockSensorData);
      
      // Mock current weather data
      setCurrentWeather({
        temperature: 24,
        humidity: 62,
        windSpeed: 8,
        condition: "Partly Cloudy",
        uvIndex: 6
      });
      
      setLoading(false);
    };

    fetchData();
    
    // Update data every 30 seconds
    const interval = setInterval(fetchData, 30000);
    return () => clearInterval(interval);
  }, []);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'healthy': return 'text-green-600 bg-green-100';
      case 'needs-water': return 'text-red-600 bg-red-100';
      case 'attention': return 'text-yellow-600 bg-yellow-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'healthy': return <CheckCircle className="w-4 h-4" />;
      case 'needs-water': return <AlertTriangle className="w-4 h-4" />;
      case 'attention': return <Clock className="w-4 h-4" />;
      default: return <Leaf className="w-4 h-4" />;
    }
  };

  const pieData = [
    { name: 'Healthy', value: 2, color: '#10B981' },
    { name: 'Needs Water', value: 1, color: '#EF4444' },
    { name: 'Attention', value: 1, color: '#F59E0B' },
  ];

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <Leaf className="w-12 h-12 text-green-600 animate-pulse mx-auto mb-4" />
          <p className="text-gray-600">Loading garden data...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Leaf className="w-8 h-8 text-green-600 mr-3" />
              <h1 className="text-2xl font-bold text-gray-900">
                Sustainable Garden Dashboard
              </h1>
            </div>
            <div className="text-sm text-gray-500">
              Last updated: {new Date().toLocaleTimeString()}
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Weather Overview */}
        {currentWeather && (
          <div className="bg-white rounded-lg shadow p-6 mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              Current Weather Conditions
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              <div className="text-center">
                <Thermometer className="w-8 h-8 text-red-500 mx-auto mb-2" />
                <p className="text-2xl font-bold text-gray-900">
                  {currentWeather.temperature}°C
                </p>
                <p className="text-sm text-gray-600">Temperature</p>
              </div>
              <div className="text-center">
                <Droplets className="w-8 h-8 text-blue-500 mx-auto mb-2" />
                <p className="text-2xl font-bold text-gray-900">
                  {currentWeather.humidity}%
                </p>
                <p className="text-sm text-gray-600">Humidity</p>
              </div>
              <div className="text-center">
                <Wind className="w-8 h-8 text-gray-500 mx-auto mb-2" />
                <p className="text-2xl font-bold text-gray-900">
                  {currentWeather.windSpeed} km/h
                </p>
                <p className="text-sm text-gray-600">Wind Speed</p>
              </div>
              <div className="text-center">
                <Sun className="w-8 h-8 text-yellow-500 mx-auto mb-2" />
                <p className="text-2xl font-bold text-gray-900">
                  {currentWeather.uvIndex}
                </p>
                <p className="text-sm text-gray-600">UV Index</p>
              </div>
              <div className="text-center">
                <div className="w-8 h-8 mx-auto mb-2 bg-blue-200 rounded-full flex items-center justify-center">
                  ☁️
                </div>
                <p className="text-sm font-bold text-gray-900">
                  {currentWeather.condition}
                </p>
                <p className="text-sm text-gray-600">Conditions</p>
              </div>
            </div>
          </div>
        )}

        {/* Plant Status Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {plantData.map((plant) => (
            <div key={plant.id} className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-900">
                  {plant.name}
                </h3>
                <div className={`flex items-center px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(plant.status)}`}>
                  {getStatusIcon(plant.status)}
                  <span className="ml-1 capitalize">
                    {plant.status.replace('-', ' ')}
                  </span>
                </div>
              </div>
              
              <div className="mb-4">
                <div className="flex justify-between text-sm text-gray-600 mb-1">
                  <span>Soil Moisture</span>
                  <span>{plant.soilMoisture}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className={`h-2 rounded-full ${
                      plant.soilMoisture >= plant.optimalMoisture[0] && 
                      plant.soilMoisture <= plant.optimalMoisture[1]
                        ? 'bg-green-600' 
                        : plant.soilMoisture < plant.optimalMoisture[0]
                        ? 'bg-red-600'
                        : 'bg-yellow-600'
                    }`}
                    style={{ width: `${plant.soilMoisture}%` }}
                  ></div>
                </div>
                <div className="text-xs text-gray-500 mt-1">
                  Optimal: {plant.optimalMoisture[0]}-{plant.optimalMoisture[1]}%
                </div>
              </div>
              
              <div className="text-sm text-gray-600 space-y-1">
                <div>Last watered: {plant.lastWatered}</div>
                <div>Next watering: {plant.nextWatering}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Soil Moisture Trends */}
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              24-Hour Soil Moisture Trends
            </h2>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={sensorData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis 
                  dataKey="time" 
                  tick={{ fontSize: 12 }}
                  interval="preserveStartEnd"
                />
                <YAxis tick={{ fontSize: 12 }} />
                <Tooltip 
                  formatter={(value) => [`${value}%`, 'Soil Moisture']}
                  labelFormatter={(label) => `Time: ${label}`}
                />
                <Line 
                  type="monotone" 
                  dataKey="soilMoisture" 
                  stroke="#10B981" 
                  strokeWidth={2}
                  dot={{ fill: '#10B981', strokeWidth: 2, r: 3 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Temperature & Humidity */}
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              Temperature & Humidity
            </h2>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={sensorData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis 
                  dataKey="time" 
                  tick={{ fontSize: 12 }}
                  interval="preserveStartEnd"
                />
                <YAxis tick={{ fontSize: 12 }} />
                <Tooltip />
                <Line 
                  type="monotone" 
                  dataKey="temperature" 
                  stroke="#EF4444" 
                  strokeWidth={2}
                  name="Temperature (°C)"
                />
                <Line 
                  type="monotone" 
                  dataKey="humidity" 
                  stroke="#3B82F6" 
                  strokeWidth={2}
                  name="Humidity (%)"
                />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Light Levels */}
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              Light Levels (Lux)
            </h2>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={sensorData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis 
                  dataKey="time" 
                  tick={{ fontSize: 12 }}
                  interval="preserveStartEnd"
                />
                <YAxis tick={{ fontSize: 12 }} />
                <Tooltip formatter={(value) => [`${value} lux`, 'Light Level']} />
                <Bar dataKey="lightLevel" fill="#F59E0B" />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Plant Health Overview */}
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              Garden Health Overview
            </h2>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={pieData}
                  cx="50%"
                  cy="50%"
                  outerRadius={100}
                  dataKey="value"
                  label={({ name, value }) => `${name}: ${value}`}
                >
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Recommendations Section */}
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            AI-Powered Recommendations
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="border border-green-200 rounded-lg p-4 bg-green-50">
              <div className="flex items-center mb-2">
                <Droplets className="w-5 h-5 text-green-600 mr-2" />
                <h3 className="font-semibold text-green-800">Watering Alert</h3>
              </div>
              <p className="text-sm text-green-700">
                Basil needs immediate watering. Soil moisture is 20% below optimal range.
              </p>
            </div>
            
            <div className="border border-blue-200 rounded-lg p-4 bg-blue-50">
              <div className="flex items-center mb-2">
                <Sun className="w-5 h-5 text-blue-600 mr-2" />
                <h3 className="font-semibold text-blue-800">Light Optimization</h3>
              </div>
              <p className="text-sm text-blue-700">
                Consider relocating lettuce to receive 2-3 more hours of morning sunlight.
              </p>
            </div>
            
            <div className="border border-purple-200 rounded-lg p-4 bg-purple-50">
              <div className="flex items-center mb-2">
                <Leaf className="w-5 h-5 text-purple-600 mr-2" />
                <h3 className="font-semibold text-purple-800">Growth Tip</h3>
              </div>
              <p className="text-sm text-purple-700">
                Tomatoes are in optimal conditions. Expect 15% faster growth this week!
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;