import Ferari from "./assets/ferari.png";
import Mclaren from "./assets/mclaren.png";
import Cyberster from "./assets/mg-cyberster.png";
import Laren from "./assets/mccar.png";
import contact from "./assets/contact.png";
import brochure from "./assets/brochur.png";
import testDrive from "./assets/testDrive.png";
import callBack from "./assets/req.png";

export const CARS_DATA = [
    {
        carImage : Laren,
        model : "McLaren 750S" 
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
        carImage : Ferari,
        model : "Ferari SF90" 
    },
];

export const DETAILS = {
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
        data1 : "Brochure",
        data2 : "Subscription Details",
        data3 : "EMI Policy Details",
    },

    experienceThrill: {
        data1 : 'Want a test drive',
        data2 : 'Book here',
        data3 : 'Locate Dealer Nearby',
    },

    callBack : {
        data1 : 'Want more details?',
        data2 : 'Get more information in a call',
        data3 : 'Request a Demo',
    },
};


export const INFO_DETAILS = [
   {
        details: "Contact Details",
        infoImage: contact,
        
    },

   {
        info: "Download Brochure",
        infoImage: brochure,
    },

    {
        info: 'Experience the Thrill',
        infoImage: testDrive,
    },

    {
        info: 'Request a Call Back',
        infoImage: callBack,
    },
];