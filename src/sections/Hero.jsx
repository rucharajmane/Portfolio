import {Canvas} from "@react-three/fiber";
import {PerspectiveCamera} from "@react-three/drei";
import { HackerRoom } from '../components/HackerRoom.jsx';
import {Suspense} from "react";
import {CanvasLoader} from "../components/CanvasLoader.jsx";
import {useMediaQuery} from "react-responsive";
import {calculateSizes} from "../constants/index.js";
import Typewriter  from "react-simple-typewriter";
import Button from "../components/Button.jsx";
import Target from "../components/Target.jsx";
import Cube from '../components/Cube.jsx';
import Rings from '../components/Rings.jsx';
import ReactLogo from '../components/ReactLogo.jsx';
import HeroCamera from "../components/HeroCamera.jsx";

const Hero = () => {

    const isSmall = useMediaQuery({maxWidth: 480})
    const isMobile = useMediaQuery({maxWidth: 768});
    const isTablet = useMediaQuery({minWidth:768, maxWidth: 1024});

    const sizes = calculateSizes(isSmall, isMobile, isTablet);

    return (
        <section className = "min-h-screen w-full flex flex-col relative">
            <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">
                <p className="sm:text-4xl text-xl font-medium text-white text-center font-generalsans">
                    Hi, I'm Rucha. <span className="waving-hand"> 👋 </span>
                </p>

                <p className="hero_tag text-gray_gradient">
                    Full Stack Developer & Graphic Designer
                </p>


                <div className="w-full h-full absolute inset-0">
                    {/*<Leva />*/}
                    <Canvas className="w-full h-full">

                        <Suspense fallback={<CanvasLoader/>}>
                            <PerspectiveCamera makeDefault position={[0, 0, 20]}/>
                            <HeroCamera isMobile={isMobile}>
                                <HackerRoom
                                    //scale = {0.07}
                                    position={sizes.deskPosition}
                                    rotation={[0, -Math.PI, 0]}
                                    scale={sizes.deskScale}
                                />
                            </HeroCamera>

                            <group>
                                <Target position={sizes.targetPosition}/>
                                <ReactLogo position={sizes.reactLogoPosition}/>
                                <Rings position={sizes.ringPosition}/>
                                <Cube position={sizes.cubePosition}/>
                            </group>

                            <ambientLight intensity={1}/>
                            <directionalLight position={[10, 10, 10]} intensity={0.5}/>
                        </Suspense>


                    </Canvas>
                </div>
                <div className="absolute bottom-7 left-0 right-0 w-full z-10 c-space">
                    <a href="#about" className="w-fit">
                        <Button name="Let's work together" isBeam containerClass="sm:w-fit w-full sm:min-w-96 "/>
                    </a>
                </div>
            </div>
        </section>
    )
}
export default Hero
