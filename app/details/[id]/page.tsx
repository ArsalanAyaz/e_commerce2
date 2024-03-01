import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { AiFillStar, AiOutlineStar, AiOutlineShoppingCart, AiOutlineHeart } from "react-icons/ai";
import { MdCompareArrows } from "react-icons/md";
import { FaFacebookSquare, FaInstagram, FaTwitter } from "react-icons/fa";

const Data = [
    {
        id: 1,
        img: "detail_1.jpg",
        name: "Product 1",
        price: "10",
        category: ["category1"],
        sale: false,
    },
    {
        id: 2,
        img: "detail_2.jpg",
        name: "Product 2",
        price: "20",
        category: ["category2"],
        sale: true,
    },
    // Add more products as needed
];

export interface IProduct {
    id: number;
    img: string;
    name: string;
    price: string;
    category: string[];
    sale: boolean;
}


const DetailPage = () => {
    const [productData, setProductData] = useState<IProduct>({
        id: 0,
        img: "",
        name: "",
        price: "0",
        category: [],
        sale: false,
    });
    

    const router = useRouter();
    
    useEffect(() => {
        const { id } = router.query;
        if (id) {
            const product = Data.find(product => product.id === Number(id));
            if (product) {
                setProductData(product);
            } else {
                console.error("Product not found");
            }
        }
    }, [router.query]);
    
    const addProductToCart = () => {
        // Add your addToCart logic here
        console.log("Add to cart clicked");
    };

    return (
        <div className="pt-8">
            <div className="bg-gray-100 py-4">
                <div className="container flex gap-4 items-center text-gray-500">
                    <Link href="/" className="cursor-pointer hover:text-accent">
                        Home
                    </Link>
                    <div className="w-[30px] h-[2px] bg-gray-400" />
                    <p className="capitalize">{productData?.category[0]}</p>
                    <div className="w-[30px] h-[2px] bg-gray-400" />
                    <p>{productData?.name}</p>
                </div>
            </div>

            <div className="container pt-8">
                <div className="grid md:grid-cols-2 gap-16">
                    <div>
                        <Image
                            className="w-full h-auto"
                            src={productData?.img}
                            width={1000}
                            height={1200}
                            alt={productData?.name}
                        />
                    </div>

                    <div className="space-y-4">
                        <div className="flex items-center text-accent ">
                            <AiFillStar />
                            <AiFillStar />
                            <AiFillStar />
                            <AiFillStar />
                            <AiOutlineStar />
                            <p className="text-gray-400 text-[14px] ml-2 hover:text-accent cursor-pointer">
                                (8 customer review)
                            </p>
                        </div>

                        <div className="text-[#161616] space-y-6">
                            <h2 className="text-3xl font-semibold">{productData?.name}</h2>
                            <p className="text-xl">${productData?.price}.00</p>
                        </div>
                        <p className="text-gray-500 text-[14px]">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Culpa dolorum veniam eius esse id laboriosam cum voluptatibus
                            itaque sit sint iusto quod ut ex provident ducimus, asperiores autem eveniet at.
                        </p>

                        <p className="text-gray-500 text-[14px]">20 in stock</p>

                        <button
                            className="uppercase bg-accent py-4 px-8 rounded-lg text-white flex gap-2 
                            items-center hover:bg-black"
                            onClick={addProductToCart}
                        >
                            <AiOutlineShoppingCart className="text-[24px]" />
                        </button>

                        <div className="flex gap-4 items-center uppercase py-4 text-[14px]">
                            <div className="flex gap-1 items-center">
                                <AiOutlineHeart />
                                Add to wish list
                            </div>
                            <div className="flex gap-1 items-center">
                                <MdCompareArrows />
                                compare
                            </div>
                        </div>

                        <div className="w-[30px] h-[2px] bg-gray-400 " />
                        <div>Name: {productData?.name}</div>
                        <div className="capitalize">
                            Category: {productData?.category}
                        </div>
                        <div className="flex gap-1 items-center capitalize">
                            Tags: {" "}
                            {productData?.category.map((item: any) => (
                                <div key={item}> {item} </div>
                            ))}
                        </div>

                        <div className="w-[30px] h-[2px] bg-gray-400 " />
                        <div className="flex gap-1 items-center pt-4">
                            SHARE: {" "}
                            <div className="flex gap-2 items-center text-[18px]">
                                <FaFacebookSquare /> <FaTwitter /> <FaInstagram />
                            </div>
                        </div>

                    </div>

                </div>
            </div>

        </div>
    );
};

export default DetailPage;
