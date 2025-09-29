import { useEffect } from "react";

export default function CustomCursor() {
  useEffect(() => {
    const cursor = document.createElement("div");
    cursor.style.position = "fixed";
    cursor.style.pointerEvents = "none";
    cursor.style.width = "20px";
    cursor.style.height = "20px";
    cursor.style.background = "radial-gradient(circle, #ff5a00 0%, transparent 70%)";
    cursor.style.borderRadius = "50%";
    cursor.style.zIndex = "9999";
    cursor.style.transform = "translate(-50%, -50%)";
    cursor.style.transition = "all 0.1s ease";
    cursor.style.boxShadow = "0 0 15px #ff5a00, 0 0 30px #ff5a00";
    document.body.appendChild(cursor);

    const onMouseMove = (e: MouseEvent) => {
      cursor.style.left = e.clientX + "px";
      cursor.style.top = e.clientY + "px";
    };

    const onMouseDown = () => {
      cursor.style.transform = "translate(-50%, -50%) scale(1.5)";
    };

    const onMouseUp = () => {
      cursor.style.transform = "translate(-50%, -50%) scale(1)";
    };

    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mousedown", onMouseDown);
    document.addEventListener("mouseup", onMouseUp);

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mousedown", onMouseDown);
      document.removeEventListener("mouseup", onMouseUp);
      document.body.removeChild(cursor);
    };
  }, []);

  return null;
}