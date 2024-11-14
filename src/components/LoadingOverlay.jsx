import { createSignal, onMount } from 'solid-js';
import LogoImage from '../images/abhijaan_logo.png';

const LoadingOverlay = () => {
  const [isLoading, setIsLoading] = createSignal(true);

  onMount(() => {
    // Simulate loading assets
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  });

  return (
    <>
      {isLoading() && (
        <div class="fixed top-0 left-0 w-screen h-screen bg-gray-900 flex items-center justify-center z-50">
          <div class="w-32 h-32 animate-spin">
            <img src={LogoImage} alt="Loading" class="w-full h-full" />
          </div>
        </div>
      )}
    </>
  );
};

export default LoadingOverlay;