import Image from "next/image";
import scf from '@/public/images/scf.jpg'
import goodearth from '@/public/images/goodearth.jpg'
import soil from '@/public/images/soil.jpg'
import inertStone from '@/public/images/inert_stone.jpg'
import scrap from '@/public/images/glass.jpg'

const ProductsPage = () => {
    return (
        <div className="w-full">
            {/* 1st Banner */}
            <div className="relative w-full h-screen">
                <Image 
                    src={scf} 
                    alt="Products Banner1" 
                    fill
                    className="object-cover"
                />
                <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-6">
                    <h2 className="text-white text-2xl md:text-5xl font-bold drop-shadow-lg">
                        SEGREGATED COMBUSTIBLE FRACTIONS
                    </h2>
                    <p className="text-white text-sm md:text-lg mt-4 max-w-2xl drop-shadow-md">
                        Consists of fractions which are combustible in nature but are not recyclable such as soiled paper, 
                        soiled cloth, contaminated plastics, multi-layer packaging materials, other packaging materials, 
                        pieces of leather, rubber, tyre, polystyrene (thermocol), wood etc. and is used as alternative 
                        fuel in integrated cement and waste-to-energy plants.
                    </p>
                </div>
            </div>

            {/* 2nd Banner */}
            <div className="relative w-full h-screen">
                <Image 
                    src={goodearth} 
                    alt="Products Banner2" 
                    fill
                    className="object-cover"
                />
                <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-6">
                    <h2 className="text-white text-2xl md:text-5xl font-bold drop-shadow-lg">
                        GOOD EARTH
                    </h2>
                    <p className="text-white text-sm md:text-lg mt-4 max-w-2xl drop-shadow-md">
                        Is typically a 6mm finest fraction containing humus-rich organics 
                        that improve soil fertility along with a high proportion of soil 
                        or sand, which is why it cannot meet FCO standards for compost. 
                        It can be used for afforestation, agro-forestry and in non-edible crop farming.
                    </p>
                </div>
            </div>

            {/* 3rd Banner */}
            <div className="relative w-full h-screen">
                <Image 
                    src={soil} 
                    alt="Products Banner3" 
                    fill
                    className="object-cover"
                />
                <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-6">
                    <h2 className="text-white text-2xl md:text-5xl font-bold drop-shadow-lg">
                        SOIL ENRICHMENT
                    </h2>
                    <p className="text-white text-sm md:text-lg mt-4 max-w-2xl drop-shadow-md">
                        Consists of fractions which are combustible in nature but are not recyclable such as soiled paper, 
                        soiled cloth, contaminated plastics, multi-layer packaging materials, other packaging materials, 
                        pieces of leather, rubber, tyre, polystyrene (thermocol), wood etc. and is used as alternative 
                        fuel in integrated cement and waste-to-energy plants.
                    </p>
                </div>
            </div>

            {/* 4th Banner */}
            <div className="relative w-full h-screen">
                <Image 
                    src={inertStone} 
                    alt="Products Banner4" 
                    fill
                    className="object-cover"
                />
                <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-6">
                    <h2 className="text-white text-2xl md:text-5xl font-bold drop-shadow-lg">
                        INERT STONES
                    </h2>
                    <p className="text-white text-sm md:text-lg mt-4 max-w-2xl drop-shadow-md">
                Consists of fractions which are combustible in nature but are not recyclable such as soiled paper, 
                        soiled cloth, contaminated plastics, multi-layer packaging materials, other packaging materials, 
                        pieces of leather, rubber, tyre, polystyrene (thermocol), wood etc. and is used as alternative 
                        fuel in integrated cement and waste-to-energy plants.
                    </p>
                </div>
            </div>

            {/* 5th Banner */}
            <div className="relative w-full h-screen">
                <Image 
                    src={scrap} 
                    alt="Products Banner5" 
                    fill
                    className="object-cover"
                />
                <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-6">
                    <h2 className="text-white text-2xl md:text-5xl font-bold drop-shadow-lg">
                        SCRAP MATERIALS
                    </h2>
                    <p className="text-white text-sm md:text-lg mt-4 max-w-2xl drop-shadow-md">
                        Consists of fractions which are combustible in nature but are not recyclable such as soiled paper, 
                        soiled cloth, contaminated plastics, multi-layer packaging materials, other packaging materials, 
                        pieces of leather, rubber, tyre, polystyrene (thermocol), wood etc. and is used as alternative 
                        fuel in integrated cement and waste-to-energy plants.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ProductsPage;
