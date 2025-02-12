import React from "react";
import { format } from "date-fns";
import { Notification } from "@/types/types";

interface NotificationsSectionProps {
    notifications: Notification[];
}


const NotificationsSection = ({ notifications }: NotificationsSectionProps) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow">
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-6">Notificaciones</h2>
        <div className="space-y-4">
          {notifications.map((notification) => (
            <div
              key={notification._id}
              className={`p-4 rounded-lg ${notification.isRead ? "bg-gray-50" : "bg-blue-50"} dark:bg-gray-700`}
            >
              <div className="flex justify-between items-start">
                <p className="font-medium">{notification.message}</p>
                <span className="text-sm text-gray-500">
                  {format(new Date(notification.date), "dd/MM/yyyy")}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NotificationsSection;