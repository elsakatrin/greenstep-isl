import { createClient } from "@supabase/supabase-js";
import { imageService } from "./imageService";

const supabase = createClient(process.env.NEXT_PUBLIC_PROJECT_CLIENT, process.env.NEXT_PUBLIC_PROJECT_KEY);

/*
RATE
*/
const getAllRate = async () => {
    let { data: rate, error } = await supabase
        .from('rate')
        .select(`id,rating,user(id),sites(id,name)`)
    //error handle side
    if (error != null && rate == null) {
        console.log('somthing happend, ErrorCode:' + error.code);
        return null;
    }
    console.log(rate);
    return rate;
}
const postRate = async (rate) => {
    const { data, error } = await supabase
        .from('rate')
        .insert([
            {
                rating: rate.rating,
                user_id: rate.user_id,
                sites_id: rate.sites_id,
            },])
    //error handle side
    if (error != null && rate == null) {
        console.log('somthing happend, ErrorCode:' + error.code);
        return null;
    }
}


/*
SITES
*/
const getAllSites = async () => {
    let { data: sites, error } = await supabase
        .from('sites')
        .select(`id,name,sites_locations(lat,lng),sites_master(type_name,icon),description,image`)
        //error handle side
        if(error!=null&&rate==null){
            console.log('somthing happend, ErrorCode:'+error.code);
            return null;
        }
    // console.log(sites);

    return sites;
}

/*
quests
*/
const getAllQuest = async () => {
    let { data: quests, error } = await supabase
        .from('quests')
        .select('id,route_basics,quest_master(id,type,description)')
    //error handle side
    if (error != null && rate == null) {
        console.log('somthing happend, ErrorCode:' + error.code);
        return null;
    }
    console.log(quests);
    return quests
}

/*
userquest
This entity hace the relation betwen users and completed quest per user
*/
const getAllQuestsPerUser = async (userID) => {
    let { data: user_quest, error } = await supabase
        .from('user_quests')
        .select('id,user(id),quests(id,route_basics,quest_master(id,type,description))').eq('userl_id', userID)
    //error handle side
    if (error != null && rate == null) {
        console.log('somthing happend, ErrorCode:' + error.code);
        return null;
    }
    console.log(user_quest);
    return user_quest
}
const postQuestPerUser = async (user_quest, image) => {
    imageService.SendImage(image).then(async (imageData) => {
        const { data, error } = await supabase
            .from('user_quests')
            .insert([
                {
                    userl_id: user_quest.userl_id,
                    quest_id: user_quest.quest_id,
                    quests_photo: imageData,
                },])
        //error handle side
        if (error != null && rate == null) {
            console.log('somthing happend, ErrorCode:' + error.code);
            return null;
        }
    })
}

/*
visited
*/
const getAllVisitedPerUser = async (userID) => {
    const { data: visited, error } = await supabase
        .from('visited')
        .select('id,sites(id,name,sites_locations(lng,lat),sites_master(type_name,icon),description,image),user(id),journeys(id,journey_name,start_date,finish_date,journey_description),photo_uri')
        .eq('user_id', userID)
    //error handle side
    if (error != null && rate == null) {
        console.log('somthing happend, ErrorCode:' + error.code);
        return null;
    }
    console.log(visited);
    return visited;
}
const postVisitedPerUser = async (visited, image) => {
    //first at all send image to backend then send data to database
    imageService.SendImage(image).then(async (imageData) => {
        const { data, error } = await supabase
            .from('visited')
            .insert([
                {
                    site_id: visited.site_id,
                    user_id: visited.user_id,
                    journey_id: visited.journey_id,
                    photo_uri: imageData,
                },]);
        //error handle side
        if (error != null && rate == null) {
            console.log('somthing happend, ErrorCode:' + error.code);
            return null;
        }
    });
}
//Can be necesary add a put one

/*
premade_routes and premade_stops
*/
const getAllPremadeRouteBasics = async () => {
    const { data: premade_routes, error } = await supabase
        .from('premade_routes')
        .select('*')
    if (error != null && premade_routes == null) {
        console.log('somthing happend, ErrorCode:' + error.code);
        return null;
    }
    console.log(premade_routes);
    return premade_routes;
}
const getOnePremadeRouteBasics = async (premade_routeID) => {
    const { data: premade_routes, error } = await supabase
        .from('premade_routes')
        .select('*')
        .eq('id', premade_routeID)
    if (error != null && premade_routes == null) {
        console.log('somthing happend, ErrorCode:' + error.code);
        return null;
    }
    console.log(premade_routes);
    return premade_routes;
}
const getAllRouteStopsPerRoute = async (premade_routeID) => {
    const { data: premade_stops, error } = await supabase
        .from('routes_stops')
        .select('id,premade_routes(name,basics,photo),lng,lat')
        .eq('premade_route_id', premade_routeID)
    if (error != null && premade_stops == null) {
        console.log('somthing happend, ErrorCode:' + error.code);
        return null;
    }
    console.log(premade_stops);
    return premade_stops;
}

/*
Journeys
*/
const getAllJourneysPerUser = async (userID) => {
    const { data: journeys, error } = await supabase
        .from('journeys')
        .select('*')
        .eq('user_id', userID)
    if (error != null && journeys == null) {
        console.log('somthing happend, ErrorCode:' + error.code);
        return null;
    }
    console.log(journeys);
    return journeys;
}
const getAllVisitedPerJourneys = async (journeyID) => {
    const { data: visited, error } = await supabase
        .from('visited')
        .select('id,sites(id,name,sites_locations(lng,lat),sites_master(type_name,icon),description,image),user(id),journeys(id,journey_name,start_date,finish_date,journey_description),photo_uri')
        .eq('journey_id', journeyID)
    if (error != null && visited == null) {
        console.log('somthing happend, ErrorCode:' + error.code);
        return null;
    }
    console.log(visited);
    return visited;
}
const postNewJourneyPerUser = async (New_journey) => {
    const { data, error } = await supabase
        .from('journeys')
        .insert([
            {
                user_id: New_journey.user_id,
                journey_name: New_journey.journey_name,
                start_date: New_journey.start_date, //this field need be entered like   ((new Date()).toISOString()).toLocaleString('zh-TW'),
                finish_date: New_journey.finish_date,
                journey_description: New_journey.journey_description,
            },])
    //error handle side
    if (error != null && rate == null) {
        console.log('somthing happend, ErrorCode:' + error.code);
        return null;
    }
}
const dataService = {
    //rating
    getAllRate,//get all rates to be calculated
    postRate,//post a new rate

    //sites
    getAllSites,//get all sites and info

    //quest
    getAllQuest,//get all quests that can be made

    //user_quests
    getAllQuestsPerUser,//get all quest gained per user
    postQuestPerUser,//post new gained quest register per user

    //visited
    getAllVisitedPerUser,//get all visited sites per user
    postVisitedPerUser,//post net visited site log per uset
    getAllVisitedPerJourneys,//get all visited sites filtered by journeys

    //premade_routes
    getAllPremadeRouteBasics,//get all premade routes basics info
    getOnePremadeRouteBasics,//get one filtered premade route info by id
    getAllRouteStopsPerRoute,//get all routes stops filtered by premade_route id

    //journeys
    getAllJourneysPerUser,//get all journeys per user
    postNewJourneyPerUser,//post new journey per user

    //NOTES
    /*
    All dates need to be implement from js in this way
    ((new Date()).toISOString()).toLocaleString('zh-TW')
    */
}

export default dataService;