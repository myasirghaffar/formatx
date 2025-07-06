import { useState } from "react";

const AuthModal = ({ open, onClose, mode, onSwitchMode }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
      <div className="bg-white border-2 border-primary rounded-lg shadow-lg w-full max-w-sm p-8 relative">
        <button onClick={onClose} className="absolute top-3 right-3 text-gray-400 hover:text-gray-700 text-2xl">&times;</button>
        <h2 className="text-2xl font-bold mb-6 text-center">{mode === "signin" ? "Sign In" : "Sign Up"}</h2>
        <form className="flex flex-col gap-4">
          <input
            type="email"
            placeholder="Email"
            className="border rounded-full px-4 py-2 focus:outline-primary"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="border rounded-full px-4 py-2 focus:outline-primary"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
          />
          {mode === "signup" && (
            <input
              type="password"
              placeholder="Confirm Password"
              className="border rounded-full px-4 py-2 focus:outline-primary"
              value={confirm}
              onChange={e => setConfirm(e.target.value)}
              required
            />
          )}
          <button type="submit" className="bg-primary text-white py-2 rounded-full font-semibold hover:bg-primary/90 mt-2">
            {mode === "signin" ? "Sign In" : "Sign Up"}
          </button>
        </form>
        <div className="text-center mt-4 text-sm">
          {mode === "signin" ? (
            <span>
              Don't have an account?{' '}
              <button className="text-primary underline" onClick={onSwitchMode}>Sign Up</button>
            </span>
          ) : (
            <span>
              Already have an account?{' '}
              <button className="text-primary underline" onClick={onSwitchMode}>Sign In</button>
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default AuthModal; 