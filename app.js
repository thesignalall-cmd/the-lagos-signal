// index.html — load the library FIRST, once:
// <script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2"></script>
// <script src="app.js"></script>

// app.js
const SUPABASE_URL = 'https://YOUR-NEW-TLS-REF.supabase.co';
const SUPABASE_ANON_KEY = 'your-publishable-anon-key';   // anon key ONLY — never the service key

// note: 'sb', not 'supabase' — this is the fix
const sb = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

async function loadSignals() {
  const { data, error } = await sb
    .from('signals')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) { console.error('Supabase error:', error); return; }
  console.log('signals:', data);
  renderSignals(data);
}

loadSignals();
