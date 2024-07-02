import Lamb from "./assets/lamborgini.jfif";
import Ferari from "./assets/ferari.jfif";
import Mclaren from "./assets/mclaren.jfif";
import Cyberster from "./assets/mg-cyberster.jpg";
import Laren from "./assets/car1.webp"; 

export const CARS_DATA = [
    {
        carImage : Lamb,
        model : "Lamborgini Aventador" 
    },

    {
        carImage : Ferari,
        model : "Ferari SF90" 
    },

    {
        carImage : Mclaren,
        model : "McLaren P1" 
    },

    {
        carImage : Cyberster,
        model : "Mg-Cyberster" 
    },

    {
        carImage : Laren,
        model : "McLaren 750S" 
    }
];

export const DETAILS = {
    lamb : {
        model : "Lamborgini Aventador",
        enginePower : "740 hp",
        fuelCapacity : "90 L",
        transmissionType : "automatic",
        compressionRatio : 11.8,
        cylinder : 12,
        cost: "5.32 Cr"
    },

    ferari : {
        model : "Ferari SF90",
        enginePower : "769 hp",
        fuelCapacity : "68 L",
        transmissionType : "automatic",
        compressionRatio : 9.5,
        cylinder : 8,
        cost: "7.5 Cr"
    },

    mcLaren : {
        model : "McLaren P1",
        enginePower : "903 hp",
        fuelCapacity : "3.8 L",
        transmissionType : "7 speed dual clutch",
        compressionRatio : 8.7,
        cylinder : 8,
        cost: "1.3 M"
    },

    cyberster : {
        model : "Mg-Cyberster",
        enginePower : "356 hp",
        fuelCapacity : "0 L",
        transmissionType : "electric automatic",
        compressionRatio : "NA",
        cylinder : "NA",
        cost: "53 L"
    },

    laren : {
        model : "McLaren 750S",
        enginePower : "74 hp",
        fuelCapacity : "72 L",
        transmissionType : "7 speed automatic",
        compressionRatio : 9.6,
        cylinder : 8,
        cost: "5.91 Cr"
    },
};

export const INFO = {
    contactDetails: {
        data1: 9876543210,
        data2: "abc xyz",
        data3: "000000",
    },

    downloadBrochure: {
        data1 : "brochure",
        data2 : "Subscription Details",
        data3 : "EMI Policy Details",
    },

    experienceThrill: {
        data1 : 'Experience the Thrill',
        data2 : 'Book a Test Drive',
        data3 : 'Locate Dealer Nearby',
    },

    callBack : {
        data1 : 'Request a Call Back',
        data2 : 'Get more details in a call',
        data3 : 'Request a Demo',
    },
};