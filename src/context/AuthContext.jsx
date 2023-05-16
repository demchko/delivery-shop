import React, { createContext, useState, useEffect } from 'react';
import { auth } from '../firebase';

// Створюємо контекст
const AuthContext = createContext();

// Створюємо провайдер контексту
export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  // Підписка на зміни стану автентифікації користувача
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      setCurrentUser(user);
    });

    // Відписуємося від підписки під час очищення ефекту
    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider value={currentUser}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContext;
