import { AnimatePresence, motion } from "framer-motion";
import { BadgeCheck, BadgeInfo, CircleX, X } from "lucide-react";
import React, { useEffect, useState } from "react";

export interface ToastProps {
  message: string;
  type?: "success" | "error" | "info";
  duration?: number; // Temps avant fermeture automatique (en ms)
  onClose?: () => void;
}

export const Toast: React.FC<ToastProps> = ({
  message,
  type = "info",
  duration = 3000,
  onClose,
}) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
      onClose?.();
    }, duration);
    return () => clearTimeout(timer);
  }, [duration, onClose]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
          className={`top-5 p-4 rounded-lg shadow-lg text-white flex justify-between max-h- items-left gap-2 ${
            type === "success"
              ? "bg-emerald-50 border-emerald-500 text-emerald-700"
              : type === "error"
              ? "bg-red-50 border-red-500 text-red-700"
              : "bg-sky-50 border-sky-600 text-sky-700"
          }`}
        >
          {type === "success" && <BadgeCheck />}
          {type === "error" && <CircleX />}
          {type === "info" && <BadgeInfo />}
          <span>{message}</span>
          <button onClick={() => setVisible(false)} className="ml-2">
            <X />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
