import { createClient } from '@supabase/supabase-js'

const supabase = createClient(process.env.NEXT_PUBLIC_PROJECT_CLIENT, process.env.NEXT_PUBLIC_PROJECT_KEY);

// export const getAllSites = async () =>{
//     let {data: sites, error} = await supabase
//       .from('sites')
//       .select('*')
//   console.log(sites);
// }
const logIn = async (email, password) => {
    let { data, error } = await supabase.auth.signInWithPassword({
        email: email,
        password: password,
    })
    console.log(data);
}

export const loginService = {
    logIn,
};



