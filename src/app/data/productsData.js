// fashion img 
import img1 from '../../assets/img/product-image/product1.png'
import img2 from '../../assets/img/product-image/product2.png'
import img3 from '../../assets/img/product-image/product3.png'
import img4 from '../../assets/img/product-image/product4.png'
import img5 from '../../assets/img/product-image/product5.png'
import img6 from '../../assets/img/product-image/product6.png'
import img7 from '../../assets/img/product-image/product7.png'
import img8 from '../../assets/img/product-image/product8.png'
import img9 from '../../assets/img/product-image/product9.png'
import img10 from '../../assets/img/product-image/product10.png'

// furniture img 
import imgf1 from '../../assets/img/furniture/product/1.png'
import imgf2 from '../../assets/img/furniture/product/2.png'
import imgf3 from '../../assets/img/furniture/product/3.png'
import imgf4 from '../../assets/img/furniture/product/4.png'
import imgf5 from '../../assets/img/furniture/product/5.png'
import imgf6 from '../../assets/img/furniture/product/6.png'
import imgf7 from '../../assets/img/furniture/product/7.png'
import imgf8 from '../../assets/img/furniture/product/8.png'
import imgf9 from '../../assets/img/furniture/product/9.png'
import imgf10 from '../../assets/img/furniture/product/10.png'

// electronics img 
import imge1 from '../../assets/img/electronics/product/1.png'
import imge2 from '../../assets/img/electronics/product/2.png'
import imge3 from '../../assets/img/electronics/product/3.png'
import imge4 from '../../assets/img/electronics/product/4.png'
import imge5 from '../../assets/img/electronics/product/5.png'
import imge6 from '../../assets/img/electronics/product/6.png'
import imge7 from '../../assets/img/electronics/product/7.png'
import imge8 from '../../assets/img/electronics/product/8.png'
import imge9 from '../../assets/img/electronics/product/9.png'
import imge10 from '../../assets/img/electronics/product/10.png'


export const ProductData = [
    {
        id: 1,
        labels: "Trending",
        category: "fashion",
        img: img1,
        hover_img: img10,
        title: "Green Dress For Woman",
        price: 38,
        description: `It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. 
        The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.`,
        rating: {
            rate: 3.9,
            count: 30
        },
        color: [
            {
                color: "green",
                img: img8,
                quantity: 1,
            },
            {
                color: "red",
                img: img9,
                quantity: 1,
            },
            {
                color: "blue",
                img: img7,
                quantity: 1,
            },
        ]
    },
    {
        id: 2,
        labels: "45% OFF",
        category: "fashion",
        img: img2,
        hover_img: img9,
        title: "T-Shirt For Men",
        price: 72,
        description: `Vivamus suscipit tortor eget felis porttitor volutpat. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
         Proin eget tortor risus. Nulla porttitor accumsan tincidunt. Pellentesque in ipsum id orci porta dapibus.`,
        rating: {
            rate: 3.3,
            count: 80
        },
        color: [
            {
                color: "green",
                img: img6,
                quantity: 1,
            },
            {
                color: "red",
                img: img10,
                quantity: 1,
            },
            {
                color: "blue",
                img: img5,
                quantity: 1,
            },
        ]
    },
    {
        id: 3,
        labels: "50% OFF",
        category: "fashion",
        img: img3,
        hover_img: img7,
        title: "V-Neck Dress",
        price: 34,
        description: `Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Vestibulum ante ipsum primis in 
        faucibus orci luctus et ultrices posuere cubilia Curae;`,
        rating: {
            rate: 4.9,
            count: 156
        },
        color: [
            {
                color: "green",
                img: img6,
                quantity: 1,
            },
            {
                color: "red",
                img: img7,
                quantity: 1,
            },
            {
                color: "blue",
                img: img8,
                quantity: 1,
            },
        ]
    },
    {
        id: 4,
        labels: "Hot",
        category: "fashion",
        img: img4,
        hover_img: img6,
        title: "Maxi Dress",
        price: 43,
        description: `Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Vestibulum ac diam sit 
        amet quam vehicula elementum sed sit amet dui. Quisque velit nisi, pretium ut lacinia in, elementum id enim.`,
        rating: {
            rate: 1.9,
            count: 190
        },
        color: [
            {
                color: "green",
                img: img3,
                quantity: 1,
            },
            {
                color: "red",
                img: img9,
                quantity: 1,
            },
            {
                color: "blue",
                img: img5,
                quantity: 1,
            },
        ]
    },
    {
        id: 5,
        labels: "Upcoming",
        category: "fashion",
        img: img5,
        hover_img: img1,
        title: "Fit-Flare Dress",
        price: 52,
        description: `Donec sollicitudin molestie malesuada. Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Vivamus suscipit tortor eget felis porttitor volutpat. Nulla quis lorem ut libero malesuada feugiat.`,
        rating: {
            rate: 3.6,
            count: 20
        },
        color: [
            {
                color: "green",
                img: img10,
                quantity: 1,
            },
            {
                color: "red",
                img: img9,
                quantity: 1,
            },
            {
                color: "blue",
                img: img2,
                quantity: 1,
            },
        ]
    },
    {
        id: 6,
        labels: "Upcoming",
        category: "fashion",
        img: img6,
        hover_img: img4,
        title: "Midi Dress",
        price: 14,
        description: `Nulla quis lorem ut libero malesuada feugiat. Quisque velit nisi, pretium ut lacinia in, elementum id enim. 
        Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Donec sollicitudin molestie malesuada`,
        rating: {
            rate: 3.9,
            count: 120
        },
        color: [
            {
                color: "green",
                img: img7,
                quantity: 1,
            },
            {
                color: "red",
                img: img8,
                quantity: 1,
            },
            {
                color: "blue",
                img: img9,
                quantity: 1,
            },
        ]
    },
    {
        id: 7,
        labels: "Trending",
        category: "fashion",
        img: img7,
        hover_img: img3,
        title: "Tulip Dress",
        price: 41,
        description: `Donec rutrum congue leo eget malesuada. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. 
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque velit nisi, pretium ut lacinia in, elementum id enim.`,
        rating: {
            "rate": 1.9,
            "count": 10
        },
        color: [
            {
                color: "green",
                img: img2,
                quantity: 1,
            },
            {
                color: "red",
                img: img8,
                quantity: 1,
            },
            {
                color: "blue",
                img: img1,
                quantity: 1,
            },
        ]
    },
    {
        id: 8,
        labels: "Best Selling",
        category: "fashion",
        img: img8,
        hover_img: img2,
        title: "Skater Dress",
        price: 21,
        description: `Nulla quis lorem ut libero malesuada feugiat. Donec sollicitudin molestie malesuada.
         Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec rutrum congue leo eget malesuada.`,
        rating: {
            rate: 2.9,
            count: 20
        },
        color: [
            {
                color: "green",
                img: img9,
                quantity: 1,
            },
            {
                color: "red",
                img: img8,
                quantity: 1,
            },
            {
                color: "blue",
                img: img10,
                quantity: 1,
            },
        ]
    },
    {
        id: 9,
        labels: "Popular",
        category: "fashion",
        img: img9,
        hover_img: img1,
        title: "Boho Tops for Girls",
        price: 46,
        description: ` Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. 
        Cras ultricies ligula sed magna dictum porta. Donec sollicitudin molestie malesuada.`,
        rating: {
            rate: 3.9,
            count: 120
        },
        color: [
            {
                color: "green",
                img: img5,
                quantity: 1,
            },
            {
                color: "red",
                img: img6,
                quantity: 1,
            },
            {
                color: "blue",
                img: img7,
                quantity: 1,
            },
        ]
    },
    {
        id: 10,
        labels: "Top Choice",
        category: "fashion",
        img: img10,
        hover_img: img3,
        title: "Skater Dress",
        price: 74,
        description: `Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Donec
         rutrum congue leo eget malesuada. Sed porttitor lectus nibh. Proin eget tortor risus. Curabitur aliquet quam id dui posuere blandit. `,
        rating: {
            rate: 3.9,
            count: 220
        },
        color: [
            {
                color: "green",
                img: img2,
                quantity: 1,
            },
            {
                color: "red",
                img: img3,
                quantity: 1,
            },
            {
                color: "blue",
                img: img4,
                quantity: 1,
            },
        ]
    },


    // furniture data
    {
        id: 11,
        labels: "Popular",
        category: "furniture",
        img: imgf1,
        hover_img: imgf10,
        title: "Rocking Chair",
        price: 918,
        description: `Semi rubber foam cushioning seat fixed on Plywood and with best quality fabric upholstery. 
        The main structure of the chair is 2mm thick and 32mm dia round MS tube.`,
        rating: {
            rate: 3.9,
            count: 320
        },
        color: [
            {
                color: "green",
                img: imgf2,
                quantity: 1,
            },
            {
                color: "red",
                img: imgf3,
                quantity: 1,
            },
            {
                color: "blue",
                img: imgf4,
                quantity: 1,
            },
        ]
    },
    {
        id: 12,
        labels: "Popular",
        category: "furniture",
        img: imgf2,
        hover_img: imgf9,
        title: "Easy Chair ",
        price: 864,
        description: `The Easy/ Rocking Chair is made of comfortable and good quality Fabrics/Artificial leather.
         Best quality Super Soft Foam.  Frame & Leg Material: Solid Mahogany Wood`,
        rating: {
            rate: 3.9,
            count: 120
        },
        color: [
            {
                color: "green",
                img: imgf5,
                quantity: 1,
            },
            {
                color: "red",
                img: imgf6,
                quantity: 1,
            },
            {
                color: "blue",
                img: imgf7,
                quantity: 1,
            },
        ]
    },
    {
        id: 13,
        labels: "Popular",
        category: "furniture",
        img: imgf3,
        hover_img: imgf8,
        title: "Center Table Glass Metal",
        price: 263,
        description: `The Center Table is made of durable Veneered Engineered Wood that lasts longer
         and better withstands wear and tear, 600-pound weight limit. Frame & Floor Touch Material: Solid Mahogany Wood`,
        rating: {
            rate: 4.9,
            count: 201
        },
        color: [
            {
                color: "green",
                img: imgf8,
                quantity: 1,
            },
            {
                color: "red",
                img: imgf9,
                quantity: 1,
            },
            {
                color: "blue",
                img: imgf10,
                quantity: 1,
            },
        ]
    },
    {
        id: 14,
        labels: "Popular",
        category: "furniture",
        img: imgf4,
        hover_img: imgf9,
        title: "Rehal for the Holy Quraan",
        price: 591,
        description: `Made from Treated & Seasoned (KILN Dried) Local Mahagony Wood and 18mm Thick Okume Veneered MDF
        Environment Friendly High Quality European UV (Ultra Violet) Lacquer Finished`,
        rating: {
            rate: 1.9,
            count: 20
        },
        color: [
            {
                color: "green",
                img: imgf8,
                quantity: 1,
            },
            {
                color: "red",
                img: imgf7,
                quantity: 1,
            },
            {
                color: "blue",
                img: imgf1,
                quantity: 1,
            },
        ]
    },
    {
        id: 15,
        labels: "Up coming",
        category: "furniture",
        img: imgf5,
        hover_img: imgf8,
        title: "Dining Set",
        price: 743,
        description: `Made from Treated & Seasoned (KILN Dried) Local Mahagony Wood and 18mm Thick Okume Veneered MDF
        Environment Friendly High Quality European UV (Ultra Violet) Lacquer Finished.`,
        rating: {
            rate: 4.9,
            count: 620
        },
        color: [
            {
                color: "green",
                img: imgf2,
                quantity: 1,
            },
            {
                color: "red",
                img: imgf3,
                quantity: 1,
            },
            {
                color: "blue",
                img: imgf4,
                quantity: 1,
            },
        ]
    },
    {
        id: 16,
        labels: "Popular",
        category: "furniture",
        img: imgf6,
        hover_img: imgf7,
        title: "Wooden Dining Chair",
        price: 963,
        description: `Denali has a contemporary look within its shape. This chair can be a set for your 
        dining table as well as can be used as an accent chair for the distinguished look.`,
        rating: {
            rate: 4.2,
            count: 20
        },
        color: [
            {
                color: "green",
                img: imgf5,
                quantity: 1,
            },
            {
                color: "red",
                img: imgf6,
                quantity: 1,
            },
            {
                color: "blue",
                img: imgf7,
                quantity: 1,
            },
        ]
    },
    {
        id: 17,
        labels: "Best Seller",
        category: "furniture",
        img: imgf7,
        hover_img: imgf6,
        title: "Classic Dining Chair",
        price: 789,
        description: `Are you looking for a chair that is affordable, simple yet sophisticated, and comfortable? Look no further, Fairbanks-109,
         and serves all these purposes and much more with agility. This piece of furniture is strong and sturdy.`,
        rating: {
            rate: 3.9,
            count: 45
        },
        color: [
            {
                color: "green",
                img: imgf8,
                quantity: 1,
            },
            {
                color: "red",
                img: imgf9,
                quantity: 1,
            },
            {
                color: "blue",
                img: imgf10,
                quantity: 1,
            },
        ]
    },
    {
        id: 18,
        labels: "On sell",
        category: "furniture",
        img: imgf8,
        hover_img: imgf5,
        title: "Lemon Chair Classic",
        price: 852,
        description: `The chair has a straight backside with designs consisting of empty box-like structures right in the middle.
         Both sides of the invention in the middle have spaces. The horizontal sitting area is slightly curved.`,
        rating: {
            rate: 2.9,
            count: 920
        },
        color: [
            {
                color: "green",
                img: imgf9,
                quantity: 1,
            },
            {
                color: "red",
                img: imgf10,
                quantity: 1,
            },
            {
                color: "blue",
                img: imgf1,
                quantity: 1,
            },
        ]
    },
    {
        id: 19,
        labels: "Popular",
        category: "furniture",
        img: imgf9,
        hover_img: imgf4,
        title: "Wooden Dining Chair",
        price: 784,
        description: `This item of the furniture fits perfectly in most rooms. It is designed to achieve its goal of relieving you from a 
        day of stress and hard work, 
        and with the homely feel the chair itself emanates, you can rely on this product to provide comfort throughout the day. `,
        rating: {
            rate: 4.9,
            count: 520
        },
        color: [
            {
                color: "green",
                img: imgf2,
                quantity: 1,
            },
            {
                color: "red",
                img: imgf3,
                quantity: 1,
            },
            {
                color: "blue",
                img: imgf4,
                quantity: 1,
            },
        ]
    },
    {
        id: 20,
        labels: "New Arrival",
        category: "furniture",
        img: imgf10,
        hover_img: imgf3,
        title: "LB Shoe Rack ",
        price: 434,
        description: `Having a Lacquer finish in antique, the chair’s innate homely feel makes it
         fantastic for home usage, more so than anywhere else.
         Kiln-dried beech wood and veneered engineered wood have been used to make this chair.`,
        rating: {
            rate: 2.5,
            count: 230
        },
        color: [
            {
                color: "green",
                img: imgf5,
                quantity: 1,
            },
            {
                color: "red",
                img: imgf6,
                quantity: 1,
            },
            {
                color: "blue",
                img: imgf7,
                quantity: 1,
            },
        ]
    },
    // category data
    {
        id: 21,
        labels: "New",
        category: "electronics",
        img: imge1,
        hover_img: imge10,
        title: "Movie Projector HD Outdoor",
        price: 334,
        description: `BIG SCREEN HOME THEATER：2021 technology features higher color contrast,full HD 1080P supported.
        Image is brighter and sharper.Up to 200-inches projection size,equipped built-in 10 Watts audio original fidelity stereo.`,
        rating: {
            rate: 4.9,
            count: 20
        },
        color: [
            {
                color: "green",
                img: imge2,
                quantity: 1,
            },
            {
                color: "red",
                img: imge3,
                quantity: 1,
            },
            {
                color: "blue",
                img: imge4,
                quantity: 1,
            },
        ]
    },
    {
        id: 22,
        labels: "Hot",
        category: "electronics",
        img: imge2,
        hover_img: imge9,
        title: "Bopmen T3 Ear Headphones",
        price: 714,
        description: `The wideband frequency range – spanning 20Hz to 20kHz – is designed for today’s bass-heavy music. 
        The 20Hz low end of the frequency range picks up every powerful sub-bass note, while at the 20kHz high-end, you’ll be 
        able to enjoy vocal melodies in outstanding clarity`,
        rating: {
            rate: 2.9,
            count: 120
        },
        color: [
            {
                color: "green",
                img: imge5,
                quantity: 1,
            },
            {
                color: "red",
                img: imge6,
                quantity: 1,
            },
            {
                color: "blue",
                img: imge7,
                quantity: 1,
            },
        ]
    },
    {
        id: 23,
        labels: "New Arrival",
        category: "electronics",
        img: imge3,
        hover_img: imge8,
        title: "Belkin Boost Up Power Pack",
        price: 344,
        description: `Introducing a compact, portable power bank designed exclusively for Apple Watch. With the power to add up 
        to 63 hours of battery life, you can stay charged for days without needing to bring a wall charger.*Perfect for travel and on-the-go, 
        this Apple Watch power bank allows you to track your fitness goals, use Apple Pay, and receive notifications from anywhere.`,
        rating: {
            rate: 1.9,
            count: 10
        },
        color: [
            {
                color: "green",
                img: imge8,
                quantity: 1,
            },
            {
                color: "red",
                img: imge9,
                quantity: 1,
            },
            {
                color: "blue",
                img: imge10,
                quantity: 1,
            },
        ]
    },
    {
        id: 24,
        labels: "New",
        category: "electronics",
        img: imge4,
        hover_img: imge7,
        title: "Fossil Men's Quartz Watch",
        price: 1044,
        description: `Fossil has always been inspired by American creativity and ingenuity. 
        Since 1984, we’ve strived to bring new life into the industry by making quality,
         fashionable watches and accessories that were both fun and accessible.`,
        rating: {
            rate: 3.9,
            count: 100
        },
        color: [
            {
                color: "green",
                img: imge1,
                quantity: 1,
            },
            {
                color: "red",
                img: imge2,
                quantity: 1,
            },
            {
                color: "blue",
                img: imge3,
                quantity: 1,
            },
        ]
    },
    {
        id: 25,
        labels: "Hot",
        category: "electronics",
        img: imge5,
        hover_img: imge6,
        title: "Powerbeats Pro Wireless Earbuds",
        price: 344,
        description: `Up to 9 hours of listening time (more than 24 hours with charge case)
        Adjustable, secure-fit ear hooks for lightweight comfort, stability
        Reinforced design for sweat and water resistance during tough workouts and running
        Protect your Beats with AppleCare+ - Add AppleCare+ to your order and receive accidental damage`,
        rating: {
            rate: 2.9,
            count: 610
        },
        color: [
            {
                color: "green",
                img: imge4,
                quantity: 1,
            },
            {
                color: "red",
                img: imge5,
                quantity: 1,
            },
            {
                color: "blue",
                img: imge6,
                quantity: 1,
            },
        ]
    },
    {
        id: 26,
        labels: "New Arrival",
        category: "electronics",
        img: imge6,
        hover_img: imge5,
        title: "New Apple AirPods Max",
        price: 944,
        description: `Apple-designed dynamic driver provides high-fidelity audio﻿
        Active Noise Cancellation blocks outside noise, so you can immerse yourself in music﻿
        Transparency mode for hearing and interacting with the world around you﻿
        Spatial audio with dynamic head tracking provides theater-like sound that surrounds you﻿`,
        rating: {
            rate: 4.9,
            count: 1110
        },
        color: [
            {
                color: "green",
                img: imge7,
                quantity: 1,
            },
            {
                color: "red",
                img: imge8,
                quantity: 1,
            },
            {
                color: "blue",
                img: imge9,
                quantity: 1,
            },
        ]
    },
    {
        id: 27,
        labels: "20% OFF",
        category: "electronics",
        img: imge7,
        hover_img: imge4,
        title: "Fire HD 10 Tablet – White",
        price: 144,
        description: `10.1" 1080p full HD display; 32 or 64 GB of internal storage (add up to 512 GB with microSD)
        Now 30% faster thanks to the new 2.0 GHz octa-core processor and 2 GB of RAM
        Longer battery life—Up to 12 hours of reading, browsing the web, watching video, and listening to music`,
        rating: {
            rate: 1.9,
            count: 10
        },
        color: [
            {
                color: "green",
                img: imge10,
                quantity: 1,
            },
            {
                color: "red",
                img: imge1,
                quantity: 1,
            },
            {
                color: "blue",
                img: imge2,
                quantity: 1,
            },
        ]
    },
    {
        id: 28,
        labels: "20% OFF",
        category: "electronics",
        img: imge8,
        hover_img: imge3,
        title: "New Apple AirPods Max",
        price: 544,
        description: `Apple-designed dynamic driver provides high-fidelity audio﻿
        Active Noise Cancellation blocks outside noise, so you can immerse yourself in music﻿
        Transparency mode for hearing and interacting with the world around you﻿
        Spatial audio with dynamic head tracking provides theater-like sound that surrounds you﻿`,
        rating: {
            rate: 3.9,
            count: 2510
        },
        color: [
            {
                color: "green",
                img: imge3,
                quantity: 1,
            },
            {
                color: "red",
                img: imge4,
                quantity: 1,
            },
            {
                color: "blue",
                img: imge5,
                quantity: 1,
            },
        ]
    },
    {
        id: 29,
        labels: "20% OFF",
        category: "electronics",
        img: imge9,
        hover_img: imge2,
        title: "Canon PowerShot Digital Camera",
        price: 544,
        description: `Powerful 42x Optical Zoom with Optical Image Stabilizer for outstanding optical performance
        Aspect Ratio: 16:9/3:2/4:3/1:1. Built-in Wi-Fi and NFC allows for easy sharing and transferring of images and videos.
        20.0 Megapixel sensor with DIGIC 4+ Image Processor helps deliver stunning image quality and approx number 
        of shots recordable to 16 GB memory card`,
        rating: {
            rate: 2.9,
            count: 910
        },
        color: [
            {
                color: "green",
                img: imge6,
                quantity: 1,
            },
            {
                color: "red",
                img: imge7,
                quantity: 1,
            },
            {
                color: "blue",
                img: imge8,
                quantity: 1,
            },
        ]
    },
    {
        id: 30,
        labels: "20% OFF",
        category: "electronics",
        img: imge10,
        hover_img: imge1,
        title: "Apple EarPods with Lightning",
        price: 544,
        description: `Unlike traditional, circular earbuds, the design of the EarPods is defined by the geometry of the ear which 
        makes them more comfortable for more people than any other earbud-style headphones
        The speakers inside the EarPods have been engineered to maximize sound output and minimize
         sound loss, which means you get high-quality audio`,
        rating: {
            rate: 4.9,
            count: 510
        },
        color: [
            {
                color: "green",
                img: imge9,
                quantity: 1,
            },
            {
                color: "red",
                img: imge10,
                quantity: 1,
            },
            {
                color: "blue",
                img: imge1,
                quantity: 1,
            },
        ]
    },
]