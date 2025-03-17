import React, { createContext, ReactNode, useContext, useState } from "react";
import { Toast, ToastProps } from "./Toast";

// Type d'un toast individuel
interface ToastWithId extends ToastProps {
  id: number;
}

// Type du contexte
interface ToastContextType {
  addToast: (toast: Omit<ToastWithId, "id">) => void;
}

// Création du contexte
const ToastContext = createContext<ToastContextType | undefined>(undefined);

// Hook personnalisé pour accéder au contexte
export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error("useToast must be used within a ToastProvider");
  }
  return context;
};

// Provider pour gérer les toasts
export const ToastProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [toasts, setToasts] = useState<ToastWithId[]>([]);

  // Fonction pour ajouter un toast
  const addToast = (toast: Omit<ToastWithId, "id">) => {
    setToasts((prevToasts) => [...prevToasts, { ...toast, id: Date.now() }]);
  };

  // Fonction pour supprimer un toast
  const removeToast = (id: number) => {
    setToasts((prevToasts) => prevToasts.filter((t) => t.id !== id));
  };

  return (
    <ToastContext.Provider value={{ addToast }}>
      {children}
      <div className="fixed top-5 right-5 flex flex-col gap-2 z-50">
        {toasts.map((toast) => (
          <Toast
            key={toast.id}
            {...toast}
            onClose={() => removeToast(toast.id)}
          />
        ))}
      </div>
    </ToastContext.Provider>
  );
};
