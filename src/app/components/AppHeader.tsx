import { createClient } from "@/lib/supabase/server";
import AppHeaderClient from "./AppHeaderClient";

export default async function AppHeader(){
const supabase = await createClient()
const {data :{user}} = await supabase.auth.getUser()

return <AppHeaderClient user={user}/>
}