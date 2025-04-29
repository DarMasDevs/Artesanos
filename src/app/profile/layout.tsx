"use client";
import Sidebar from "@/components/Profile/Sidebar";
import { RootState } from "@/types/types";
import React, { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { useSelector } from "react-redux";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const userProfile = useSelector(
    (state: RootState) => state.userReducer?.user,
  );
  const [activeTab, setActiveTab] = useState("profile");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  return (
    <div className="bg-gray-50 mt-20">
      <div className="flex flex-col md:flex-row">
        <Sidebar
          userProfile={userProfile}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          isMobileMenuOpen={isMobileMenuOpen}
          setIsMobileMenuOpen={setIsMobileMenuOpen}
        />
        <div className="flex-1 p-4">
          <div className="mb-4 flex items-center justify-between">
            <button
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <FiMenu className="h-6 w-6" />
            </button>
          </div>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;
