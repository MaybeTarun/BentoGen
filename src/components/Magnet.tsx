import { useEffect, useRef, type ComponentPropsWithoutRef, type ReactNode } from "react";

interface MagnetProps extends ComponentPropsWithoutRef<"div"> {
  children: ReactNode;
  padding?: number;
  disabled?: boolean;
  magnetStrength?: number;
  activeTransition?: string;
  inactiveTransition?: string;
  wrapperClassName?: string;
  innerClassName?: string;
}

const Magnet: React.FC<MagnetProps> = ({
  children,
  /** Distance around the magnet where the mouse can activate it. */
  padding = 100,
  /** Disables the magnet effect entirely. */
  disabled = false,
  /** Controls how strong the magnet pull is. Higher = less offset. */
  magnetStrength = 2,
  /** Transition when the magnet is active (mouse in range). */
  activeTransition = "transform 0.3s ease-out",
  /** Transition when the magnet is inactive (mouse out of range). */
  inactiveTransition = "transform 0.5s ease-in-out",
  /** Optional class for the outer wrapper. */
  wrapperClassName = "",
  /** Optional class for the moving/inner element. */
  innerClassName = "",
  ...props
}) => {
  const magnetRef = useRef<HTMLDivElement | null>(null);
  const innerRef = useRef<HTMLDivElement | null>(null);
  const frameRef = useRef<number>(0);
  const activeRef = useRef(false);

  useEffect(() => {
    const inner = innerRef.current;
    if (!inner) return;

    if (disabled) {
      inner.style.transform = "translate3d(0px, 0px, 0)";
      return;
    }

    const setActive = (active: boolean) => {
      if (activeRef.current === active) return;
      activeRef.current = active;
      inner.style.transition = active ? activeTransition : inactiveTransition;
    };

    const moveInner = (x: number, y: number) => {
      if (frameRef.current) {
        window.cancelAnimationFrame(frameRef.current);
      }
      frameRef.current = window.requestAnimationFrame(() => {
        inner.style.transform = `translate3d(${x}px, ${y}px, 0)`;
        frameRef.current = 0;
      });
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!magnetRef.current) return;

      const { left, top, width, height } = magnetRef.current.getBoundingClientRect();
      const centerX = left + width / 2;
      const centerY = top + height / 2;

      const distX = Math.abs(centerX - e.clientX);
      const distY = Math.abs(centerY - e.clientY);

      if (distX < width / 2 + padding && distY < height / 2 + padding) {
        setActive(true);

        const offsetX = (e.clientX - centerX) / magnetStrength;
        const offsetY = (e.clientY - centerY) / magnetStrength;
        moveInner(offsetX, offsetY);
      } else {
        setActive(false);
        moveInner(0, 0);
      }
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (frameRef.current) {
        window.cancelAnimationFrame(frameRef.current);
      }
    };
  }, [activeTransition, inactiveTransition, padding, disabled, magnetStrength]);

  return (
    <div
      ref={magnetRef}
      className={wrapperClassName}
      style={{ position: "relative", display: "inline-block" }}
      {...props}
    >
      <div
        ref={innerRef}
        className={innerClassName}
        style={{
          transform: "translate3d(0px, 0px, 0)",
          transition: inactiveTransition,
          willChange: "transform",
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default Magnet;
