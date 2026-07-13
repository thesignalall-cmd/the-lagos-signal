// TLS - The Lagos Signal
// Supabase Connection Layer

const SUPABASE_URL = "YOUR_PROJECT_URL";
const SUPABASE_KEY = "YOUR_PUBLISHABLE_KEY";

const supabaseClient = supabase.createClient(
  SUPABASE_URL,
  SUPABASE_KEY
);

async function loadSignals() {

  const { data, error } = await supabaseClient
    .from("signals")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    console.error("TLS Signal Error:", error);
    return;
  }

  console.log("TLS Signals Loaded:", data);

}

loadSignals();
