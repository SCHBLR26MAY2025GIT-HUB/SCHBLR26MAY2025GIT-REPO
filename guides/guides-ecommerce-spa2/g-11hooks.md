# ⚛️ React Hooks: Stateless by Design

> **Note**  
> Hooks themselves are **stateless**—they are just functions provided by React (like `useState`, `useEffect`, etc.) that let you "hook into" React features from function components.

---

However, when you use hooks like `useState` or `useReducer`, they let your component **hold state**.  
The hook function itself doesn’t store state; React manages the state for you and gives you access to it via the hook.

---

## 📝 Summary

- 🧩 **Hooks are stateless functions.**
- 🔄 They let your function components manage state or side effects.
- 📦 The state is stored by React, not inside the hook function itself.