import { A } from "@solidjs/router";
import CompassLogo from "../images/abhijaan_logo.png";
import { createSignal, onMount } from "solid-js";

export default function Home() {
  const textOptions = ["অভিযান...", "अभियान...", "Abhijaan..."];
  const [displayedText, setDisplayedText] = createSignal("");
  const [currentIndex, setCurrentIndex] = createSignal(0);
  let charIndex = 0;

  const typewriterEffect = () => {
    const currentText = textOptions[currentIndex()];
    
    if (charIndex < currentText.length) {
      setDisplayedText((prev) => prev + currentText[charIndex]);
      charIndex += 1;
      setTimeout(typewriterEffect, 200);
    } else {
      setTimeout(() => {
        setDisplayedText("");
        charIndex = 0;
        setCurrentIndex((currentIndex() + 1) % textOptions.length);
        typewriterEffect();
      }, 5000);
    }
  };

  onMount(typewriterEffect);

  return (
    <main class="min-h-screen w-full overflow-x-hidden bg-gray-100 dot-pattern">
      <div class="bg-customImage w-full p-2 pt-4 sm:p-10 shadow-lg">
        <div class="max-w-6xl mx-auto text-center">
          {/* Flex container for logo and text */}
          <div class="flex items-center justify-start space-x-8">
            <img
              src={CompassLogo}
              alt="Logo"
              class="w-8/12 max-w-[200px] sm:w-auto ml-[100px]"
            />
            
            <p
              class="typewriter-text text-3xl font-bold"
              style={{
                color: "#ff3a00",
              }}
            >
              {displayedText()}<span class="cursor">.</span>
            </p>
          </div>

          <p class="text-tag text-sm sm:text-base text-sky-500 font-semibold tracking-wide mt-4">
            A BEGINNER PHP FRAMEWORK
          </p>
          <br/>

          <div class="mb-6 sm:mb-10">
            <p class="text-center text-2xl sm:text-4xl font-black tracking-tight pb-2 text-sky-300 font-sans">
              Begin your exploration of framework
            </p>
          </div>
          <div class="flex align-middle mb-6 sm:mb-10">
          <div class="indexbutton">
  <A href="/docs/" class="custom-button"><span>Explore Now !</span></A>
</div>

          </div>
        </div>
      </div>
      <br/> <br/>
      <div class="w-full max-w-7xl mx-auto px-4">
        <div class="relative grid grid-cols-1 gap-8">
          <div class="rounded-s-3xl bg-customBlue p-8 mx-auto w-11/12"></div>
          <div class="rounded-e-3xl bg-customOrange p-8 mx-auto w-11/12"></div>
        </div>
      </div>
    </main>
  );
}