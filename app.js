// TLS - The Lagos Signal
// Supabase Connection Layer

const SUPABASE_URL = "https://qopurblqvxiqjdspvdlp.supabase.co";
const SUPABASE_KEY = "your_publishable_key_here";

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
