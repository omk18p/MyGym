# MyGym - Complete Gym Management System

A comprehensive gym management solution featuring both Android mobile app and React web dashboard for gym owners, trainers, and members.

![MyGym Logo](https://img.shields.io/badge/MyGym-Gym%20Management-blue?style=for-the-badge&logo=android)
![Android](https://img.shields.io/badge/Android-3DDC84?style=for-the-badge&logo=android&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Firebase](https://img.shields.io/badge/Firebase-039BE5?style=for-the-badge&logo=Firebase&logoColor=white)

## 📱 Overview

MyGym is a full-stack gym management system that provides real-time attendance tracking, member management, health monitoring, and communication features. The system consists of:

- **Android Mobile App**: For gym members with QR-based attendance, health tracking, and social features
- **React Web Dashboard**: For gym administrators to manage members, view analytics, and monitor gym operations

## ✨ Features

### 🏋️‍♂️ For Gym Members (Android App)
- **QR Code Attendance**: Scan QR codes for check-in/check-out
- **Live Attendance Tracking**: Real-time view of current gym capacity
- **Health Reports**: Track and monitor health metrics
- **Weight Tracker**: Monitor fitness progress over time
- **Gym Atmosphere**: Rate and view gym environment
- **Chat System**: Communicate with other gym members
- **Profile Management**: Personal information and preferences
- **Push Notifications**: Stay updated with gym announcements

### 👨‍💼 For Gym Administrators (Web Dashboard)
- **Member Management**: Add, edit, and manage gym members
- **Attendance Analytics**: View detailed attendance reports and trends
- **Live Dashboard**: Real-time gym capacity and member statistics
- **Health Reports**: Monitor member health data and progress
- **Gym Atmosphere Monitoring**: Track member satisfaction
- **User Authentication**: Secure admin access with role-based permissions

## 🛠️ Tech Stack

### Android App
- **Language**: Java
- **Framework**: Android SDK
- **Database**: Firebase Realtime Database & Firestore
- **Authentication**: Firebase Auth
- **Push Notifications**: Firebase Cloud Messaging (FCM)
- **QR Code**: ZXing Library
- **Charts**: MPAndroidChart
- **Image Loading**: Glide

### Web Dashboard
- **Frontend**: React.js
- **Routing**: React Router DOM
- **Styling**: CSS3 with custom components
- **Charts**: Chart.js with react-chartjs-2
- **Database**: Firebase Realtime Database & Firestore
- **Authentication**: Firebase Auth
- **Build Tool**: Vite
- **Icons**: FontAwesome

### Backend & Infrastructure
- **Database**: Firebase Realtime Database
- **Authentication**: Firebase Authentication
- **Storage**: Firebase Storage
- **Hosting**: Firebase Hosting (Web)
- **Cloud Functions**: Firebase Functions (if needed)

## 📋 Prerequisites

Before running this project, make sure you have the following installed:

- **For Android Development**:
  - Android Studio (latest version)
  - Java Development Kit (JDK) 8 or higher
  - Android SDK (API level 26+)
  - Google Play Services

- **For Web Development**:
  - Node.js (v16 or higher)
  - npm or yarn package manager

- **Firebase Setup**:
  - Firebase project with Realtime Database and Firestore enabled
  - Firebase configuration files

## 🚀 Installation

### 1. Clone the Repository
```bash
git clone https://github.com/omk18p/MyGym.git
cd MyGym
```

### 2. Android App Setup

#### Navigate to Android Project
```bash
cd Gym-AndroidApp
```

#### Configure Firebase
1. Create a Firebase project at [Firebase Console](https://console.firebase.google.com/)
2. Enable Authentication, Realtime Database, Firestore, and Cloud Messaging
3. Download `google-services.json` and place it in `app/` directory
4. Update Firebase configuration in your project

#### Build and Run
```bash
# Open in Android Studio
# Or use command line
./gradlew build
./gradlew installDebug
```

### 3. Web Dashboard Setup

#### Navigate to Web Project
```bash
cd Gym-Web
```

#### Install Dependencies
```bash
npm install
```

#### Configure Firebase
1. Update Firebase configuration in `src/firebase/config.js`
2. Ensure your Firebase project has the necessary services enabled

#### Run Development Server
```bash
npm run dev
```

The web dashboard will be available at `http://localhost:5173`

## 📱 Usage

### Android App
1. **Registration/Login**: Users can register with phone number or username
2. **QR Attendance**: Scan gym QR codes for attendance tracking
3. **Health Tracking**: Monitor weight and health metrics
4. **Social Features**: Chat with other members and view gym atmosphere

### Web Dashboard
1. **Admin Login**: Access with admin credentials
2. **Member Management**: Add and manage gym members
3. **Analytics**: View attendance reports and gym statistics
4. **Monitoring**: Track live attendance and member activities

## 🔧 Configuration

### Firebase Setup
1. Create a new Firebase project
2. Enable the following services:
   - Authentication (Email/Password, Phone)
   - Realtime Database
   - Firestore Database
   - Cloud Storage
   - Cloud Messaging

3. Update configuration files:
   - Android: `app/google-services.json`
   - Web: `src/firebase/config.js`

### QR Code Configuration
Update the stored QR code in `UserMenu.java`:
```java
private String storedQR = "your-gym-qr-code";
```

## 📊 Database Structure

### Firebase Realtime Database
```
attendance/
├── {userId}/
│   ├── checkIn/
│   └── checkOut/
attendanceCounters/
├── liveattendancecnt
members/
├── {memberId}/
│   ├── name
│   ├── phone
│   └── membership
```

### Firestore Collections
- `users`: User profiles and authentication data
- `chatrooms`: Chat conversations
- `healthReports`: Member health data
- `atmosphere`: Gym atmosphere ratings

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Authors

- **Omkar Patil** - *Initial work* - [omk18p](https://github.com/omk18p)

## 🙏 Acknowledgments

- Firebase for backend services
- Android community for libraries and tools
- React community for web development resources

## 🏆 Recognition
- 🏅 2nd Runner-Up, Expotech – Vision 2025
- Presented MyGym at a national-level competition for innovative engineering projects.




</rewritten_file>

