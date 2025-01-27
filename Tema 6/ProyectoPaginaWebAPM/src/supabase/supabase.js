import { createClient } from "@supabase/supabase-js";

//Esta es la conexión de supabase.
const supabase = createClient(
    import.meta.env.VITE_SUPABASE_URL,
    import.meta.env.VITE_SUPABASE_KEY
  );
  
  export { supabase };