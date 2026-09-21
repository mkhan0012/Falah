import gsap from "gsap";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

export const animatePageIn = () => {
  const banner = document.getElementById("transition-banner");
  if (banner) {
    gsap.to(banner, {
      yPercent: -100,
      duration: 0.8,
      ease: "power3.inOut",
      onComplete: () => {
        gsap.set(banner, { yPercent: 100 });
      }
    });
  }
};

export const animatePageOut = (href: string, router: AppRouterInstance) => {
  const banner = document.getElementById("transition-banner");
  if (banner) {
    gsap.set(banner, { yPercent: 100 });
    gsap.to(banner, {
      yPercent: 0,
      duration: 0.8,
      ease: "power3.inOut",
      onComplete: () => {
        router.push(href);
      },
    });
  } else {
    router.push(href);
  }
};
