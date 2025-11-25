// Create a multi-page app with Home, About, and Contact pages using React Router.
// ✅Add navigation links to switch between pages.
// ✅ Create a dynamic route for /user/:id and display the user’s id.
// ✅ Implement a protected route that only shows if the user is logged in.
// ✅ Add a 404 Not Found page for unmatched routes.

import React from "react";
import { BrowserRouter,Routes, Route } from "react-router-dom";

import Home from "./components/Routing/Home";
import About from "./components/Routing/About";
import Contact from "./components/Routing/Contact";
import Users from "./components/Routing/Users";
import User from "./components/Routing/User";
import { AuthProvider } from "./context/AuthContext";
import Login from "./components/Routing/Login";
import Dashboard from "./components/Routing/Dashboard";
import ProtectedRoute from "./components/Routing/ProtectedRoute";
import NotFound from "./components/Routing/NotFound";


function AllRouting() {



    return(
        <BrowserRouter>
        <AuthProvider>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/contact" element={<Contact/>} />
            <Route path="/users" element={<Users/>} />
            <Route path="/users/:id" element={<User/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/dashboard" element={<ProtectedRoute><Dashboard/></ProtectedRoute>} />
            
            <Route path="*" element={<NotFound/>} />
         </Routes>
          </AuthProvider> 
        </BrowserRouter>
    )
}


export default AllRouting;