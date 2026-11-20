import { gsap } from "gsap";
import { Draggable } from "gsap/Draggable";
import { InertiaPlugin } from "gsap/InertiaPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { useGSAP } from "@gsap/react";

// Os plugins só existem no navegador; no servidor (SSR) o registro é ignorado.
if (typeof window !== "undefined") {
  gsap.registerPlugin(useGSAP, ScrollTrigger, SplitText, Draggable, InertiaPlugin);
}

/** Use em gsap.matchMedia(): anima só quem não pediu "reduzir movimento". */
export const FULL_MOTION = "(prefers-reduced-motion: no-preference)";

export { Draggable, gsap, InertiaPlugin, ScrollTrigger, SplitText, useGSAP };
