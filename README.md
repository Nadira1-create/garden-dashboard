#  Sustainable Garden Dashboard

A modern web application for monitoring plant health and environmental conditions, built with Next.js and real-time data visualization.

![Garden Dashboard](https://img.shields.io/badge/Status-Active-green) ![Next.js](https://img.shields.io/badge/Next.js-15+-black) ![TypeScript](https://img.shields.io/badge/TypeScript-blue) ![Tailwind](https://img.shields.io/badge/Tailwind-CSS-blue)

##  Project Overview

This dashboard simulates a real-world plant monitoring system that helps growers understand what their plants need through intuitive data visualization. Built to demonstrate modern frontend development skills and interest in sustainable agriculture technology.

**Perfect for AgTech companies like Gardin** - showcasing plant intelligence through fast, reliable, and intuitive interfaces.

##  Features

###  **Data Visualizations**
- Real-time soil moisture trends (24-hour history)
- Temperature and humidity monitoring with dual-line charts
- Light level analysis with interactive bar charts
- Garden health overview with pie charts
- Responsive design with hover effects and tooltips

###  **Plant Intelligence**
- Individual plant status monitoring (Tomatoes, Basil, Lettuce, Carrots)
- Soil moisture optimization with color-coded alerts
- Watering schedule recommendations
- Growth condition analysis
- Real-time health status indicators

###  **Environmental Monitoring**
- Current weather conditions display
- Temperature and humidity tracking
- Wind speed and UV index monitoring
- Integration-ready architecture for real weather APIs

###  **Accessibility & UX**
- Semantic HTML structure with proper heading hierarchy
- ARIA labels for screen readers
- Keyboard navigation support
- High contrast color schemes
- Mobile-first responsive design

##  Tech Stack

- **Framework**: Next.js 15+ with App Router
- **Language**: TypeScript for type safety
- **Styling**: Tailwind CSS for responsive design
- **Charts**: Recharts for interactive data visualization
- **Icons**: Lucide React for accessible iconography
- **Deployment**: Vercel-ready configuration

##  Getting Started

### Prerequisites
- Node.js 18+ installed
- Git installed

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Nadira1-create/garden-dashboard.git
   cd garden-dashboard
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

##  Key Sections

### **Weather Overview**
Current environmental conditions with temperature, humidity, wind speed, UV index, and weather conditions.

### **Plant Status Cards**
Individual monitoring for each plant showing:
- Current soil moisture levels
- Optimal moisture ranges
- Color-coded health status
- Watering schedules

### **Data Visualization Charts**
- **Soil Moisture Trends**: 24-hour line chart
- **Temperature & Humidity**: Dual-line comparison
- **Light Levels**: Bar chart showing lux readings
- **Garden Health**: Pie chart summary

### **AI-Powered Recommendations**
Smart growing tips including watering alerts, light optimization, and growth predictions.

##  Data Architecture

```
Mock IoT Sensors → Data Generation → React State Management → Chart Visualization → User Interface
```

Currently uses simulated data that mimics real sensor readings:
- **Soil Moisture**: 30-70% range with realistic fluctuations
- **Temperature**: 18-33°C with daily variations
- **Humidity**: 40-70% environmental readings
- **Light Intensity**: 200-1000 lux measurements
- **pH Levels**: 6.0-8.0 soil acidity tracking

##  Real-World Applications

This dashboard demonstrates concepts directly applicable to:
- **Smart Agriculture**: IoT sensor monitoring and data aggregation
- **Sustainability**: Water usage optimization and resource management
- **Data Visualization**: Making complex datasets accessible and actionable
- **User Experience**: Creating intuitive interfaces for technical data
- **AgTech Solutions**: Plant intelligence and precision agriculture

##  Development Highlights

### **React Best Practices**
- Functional components with custom hooks
- Efficient state management with useState and useEffect
- Proper component composition and reusability
- TypeScript integration for type safety

### **Performance Optimization**
- Efficient re-rendering with proper dependency arrays
- Responsive chart components with ResizeObserver
- Optimized bundle size with Next.js automatic code splitting
- Lazy loading and performance monitoring

### **Code Quality**
- ESLint configuration for consistent code style
- TypeScript for compile-time error detection
- Semantic commit messages and version control
- Modular component architecture

## 📈 Future Enhancements

- [ ] Integration with real weather APIs (OpenWeatherMap, AccuWeather)
- [ ] WebSocket connections for live sensor data streaming
- [ ] Plant identification using computer vision/AI
- [ ] Historical data storage with database integration
- [ ] Multi-garden management dashboard
- [ ] Mobile app with push notifications
- [ ] Integration with automated irrigation systems
- [ ] Machine learning for predictive plant care

##  Why This Project?

Built specifically to demonstrate skills relevant to **AgTech companies like Gardin**:
- Understanding of plant monitoring and care optimization
- Experience with data visualization for agricultural data
- Modern web development skills with React/Next.js
- Responsive design for field and office use
- Interest in sustainable technology solutions

##  Contributing

This project serves as a portfolio demonstration, but suggestions and feedback are welcome!

##  License

This project is open source and available under the [MIT License](LICENSE).

##  Developer

**Nadira Ali Robleh**
-  Computer Science Student
-  Passionate about sustainable technology and AgTech solutions
-  Interested in using technology to solve environmental challenges
-  Available for frontend development opportunities

---

*Built with  for sustainable agriculture and modern web development*

**Live Demo**: [View on GitHub](https://github.com/Nadira1-create/garden-dashboard)