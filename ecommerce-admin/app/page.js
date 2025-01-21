"use client"; // Convierte este archivo en un Client Component

import { signIn, signOut, useSession } from "next-auth/react";

export default function Home() {
  // Hook de NextAuth para obtener el estado de la sesión
  const { data: session } = useSession();

  // Si el usuario está autenticado, mostramos un mensaje de bienvenida
  if (session) {
    return (
      <div className="bg-blue-900 w-screen h-screen flex items-center">
        <div className="text-center w-full">
          <h1 className="text-white text-2xl mb-4">
            Welcome, {session.user.name}!
          </h1>
          <img
            src={session.user.image}
            alt="User profile"
            className="w-16 h-16 rounded-full mx-auto mb-4"
          />
          <p className="text-white mb-4">Email: {session.user.email}</p>
          <button
            onClick={() => signOut()} // Llama a la función para cerrar sesión
            className="bg-white p-2 px-4 rounded-lg"
          >
            Sign Out
          </button>
        </div>
      </div>
    );
  }

  // Si el usuario no está autenticado, mostramos el botón de inicio de sesión
  return (
    <div className="bg-blue-900 w-screen h-screen flex items-center">
      <div className="text-center w-full">
        <h1 className="text-white text-2xl mb-4">Welcome to our App!</h1>
        <button
          onClick={() => signIn("google")} // Llama a la función para iniciar sesión con Google
          className="bg-white p-2 px-4 rounded-lg"
        >
          Login with Google
        </button>
      </div>
    </div>
  );
}
