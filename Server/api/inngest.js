// api/inngest.js
import { serve } from "inngest/vercel";
import { inngest, functions } from "../ingest/index.js";

export default serve({
  client: inngest,
  functions,
});
