# Project_ReactNative_NODE

Ứng dụng demo React Native + Node.js + Express + MariaDB/MySQL với chức năng Login cơ bản.

## Công nghệ sử dụng
- React Native (Expo / CLI)
- Node.js
- Express.js
- MariaDB/MySQL

## Tính năng
- Đăng ký tài khoản (Register)
- Đăng nhập (Login) với xác thực từ API Node.js
- Lưu thông tin người dùng trong AsyncStorage
- Điều hướng giữa màn hình Login và Home
- Bảo mật mật khẩu bằng md5

## Cấu trúc dự án

### Frontend (React Native)
Project_ReactNative_NODE/
┣ frontend/
┃ ┣ screens/
┃ ┃ ┣ LoginScreen.tsx
┃ ┃ ┣ HomeScreen.tsx
┃ ┣ api/
┃ ┃ ┣ auth.ts
┃ ┣ App.tsx



Project_ReactNative_NODE/
┣ backend/
┃ ┣ routes/
┃ ┃ ┣ auth.js
┃ ┣ config/
┃ ┃ ┣ db.js
┃ ┣ server.js


Tác giả

Trần Minh Tiến

Email: minhtien.dev.iuh.edu@gmail.com
