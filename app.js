// TLS — The Lagos Signal
// Live Supabase Signal Reader
window.SUPABASE_URL = "https://qopurblqvxiqjdspvdlp.supabase.co";

window.SUPABASE_KEY = "YOUR_PUBLISHABLE_KEY_HERE";

const supabaseClient = window.supabase.createClient(
  SUPABASE_URL,
  SUPABASE_KEY
);
async function loadTLSsignals() {

  const { data, error } = await supabaseClient
    .from("signals")
    .select("*")
    .order("created_at", { ascending: false });


  if (error) {
    console.error("TLS Connection Error:", error);
    return;
  }


  console.log("TLS LIVE SIGNALS:", data);


  const feed = document.getElementById("feed");

  if (!feed) {
    console.log("Feed container not found yet");
    return;
  }


  feed.innerHTML = data.map(signal => `

    <div class="cable">

      <div class="cable-main">

        <div class="cable-meta">
          <span class="cable-type">
            ${signal.category || "INTELLIGENCE"}
          </span>
        </div>


        <div class="cable-head">
          ${signal.title}
        </div>


        <div class="cable-body">
          Source: ${signal.source || "CONFIRM"}
        </div>


        <div class="cable-tags">
          Confidence:
          ${signal.confidence || "N/A"}%
          
          Status:
          ${signal.status || "Pending"}
        </div>

      </div>

    </div>

  `).join("");

}


loadTLSsignals();
