import { createClient } from "@supabase/supabase-js";
import { useState } from "react";
const supabase = createClient(import.meta.env.VITE_PROJECT_CLIENT, import.meta.env.VITE_PROJECT_KEY);

//sites that need image crud
/*
GET
premade_route
sites
visited
POST
quests
visited
*/
// let bucket = urlParam = '/visited' ? 'name1' : 'name2'

// Buckets names
const PREMADE_ROUTES = 'premade-routes-photos';
const SITES = 'sites-photos';
const VISITED = 'visited-photos';
const QUESTS = 'quests-photos'
// URL selected in the WebBrowser
const MAIN_URL = "http://localhost:5173";
const TO_VISITED = MAIN_URL + "/visited";
const TO_SITES = MAIN_URL + '/sites';
const TO_PREMADE_ROUTES = MAIN_URL + '/map';
const TO_QUESTS = MAIN_URL + '/quests';

//to make a unique image id
const LetsHash = async () => {
    let EXIST = false;
    let uuid = self.crypto.randomUUID();
    while (EXIST == false) {
        uuid = self.crypto.randomUUID();
        const { data: result, error } = await supabase
            .storage
            .from('premade-routes-photos')
            .list('', {
                limit: 1,
                offset: 0,
                search: uuid,
                sortBy: { column: 'name', order: 'asc' },

            })
        // console.log(result);
        if (result.length == 0) {
            EXIST = true;
        }
    }
    return uuid;
}
//to upload the image in a bucket
async function uploadImage(imageName, file, bucketName) {
    // console.log('image', imageName)
    const { data, error } = await supabase
        .storage
        .from(bucketName)
        .upload(imageName, file[0], {
            cacheControl: '3600',
            upsert: false,
        })
}
//to download an image of one bucket
async function downloadImage(imageNameID,bucketName) {
    const {data:imageURL,error} = await supabase
        .storage
        .from(bucketName)
        .getPublicUrl(imageNameID)
    return imageURL.publicUrl;
}
//mixed method of uploadImage and LetsHash to make easyer
const sendImage = async (file) => {
    //validate where the user is 
    let url_location = window.location.href;

    const filename = await imageService.LetsHash();

    switch (url_location) {
        case (TO_VISITED):
            uploadImage(filename, file, VISITED);
            break;
        case (TO_SITES):
            uploadImage(filename, file, SITES);
            break;
        case (TO_PREMADE_ROUTES):
            console.log(filename);
            uploadImage(filename, file, PREMADE_ROUTES);
            break;
        case (TO_QUESTS):
            uploadImage(filename, file, QUESTS);
        default:
            console.log('doest works');
            break;
    }
    return filename;
}
//mixed method of downloadImage and LetsHash to make easyer
const findImageByNameID = async (imageid) =>{

    switch (url_location) {
        case (TO_VISITED):
            uploadImage(filename, file, VISITED);
            break;
        case (TO_SITES):
            uploadImage(filename, file, SITES);
            break;
        case (TO_PREMADE_ROUTES):
            console.log(filename);
            uploadImage(filename, file, PREMADE_ROUTES);
            break;
        case (TO_QUESTS):
            uploadImage(filename, file, QUESTS);
        default:
            console.log('doest works');
            break;
    }
    return 
}

export const imageService = {
    sendImage,
    uploadImage,
    downloadImage,
    findImageByNameID,
    LetsHash,
}