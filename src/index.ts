import { serve } from "https://deno.land/std@0.85.0/http/server.ts";

// let port = parseInt(Deno.env.get("PORT") ?? "8000")
let port = 8081;
const s = serve({ port });

console.log(`http://localhost:${port}/`);

for await (const req of s) {
  req.respond({ body: "Choo Choo! Welcome the ZONE\n" });
}
