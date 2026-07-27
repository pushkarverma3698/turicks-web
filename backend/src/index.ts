import { TURICKS_BRAIN } from "./turicks-context";

export interface Env {
  GEMINI_API_KEY: string;
}

export default {
  async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
    // ─── CORS Headers ────────────────────────────────────────────────────
    const corsHeaders = {
      "Access-Control-Allow-Origin": "*", // Restrict to "https://turicks.com" in production
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    };

    if (request.method === "OPTIONS") {
      return new Response(null, { status: 204, headers: corsHeaders });
    }

    if (request.method !== "POST") {
      return new Response(JSON.stringify({ error: "Method not allowed" }), {
        status: 405,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      });
    }

    try {
      // ─── Parse Request ───────────────────────────────────────────────
      const { message, history } = (await request.json()) as {
        message: string;
        history?: Array<{ role: "user" | "model"; parts: Array<{ text: string }> }>;
      };

      if (!message) {
        return new Response(JSON.stringify({ error: "Missing message parameter" }), {
          status: 400,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        });
      }

      const apiKey = env.GEMINI_API_KEY;
      if (!apiKey) {
        return new Response(JSON.stringify({ error: "API key not configured on server" }), {
          status: 500,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        });
      }

      // ─── Build Gemini API payload ────────────────────────────────────
      const apiContents = history ? [...history] : [];
      apiContents.push({ role: "user", parts: [{ text: message }] });

      const geminiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:streamGenerateContent?alt=sse&key=${apiKey}`;

      const response = await fetch(geminiUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: apiContents,
          systemInstruction: {
            parts: [{ text: TURICKS_BRAIN }],
          },
          generationConfig: {
            temperature: 0.7,
            maxOutputTokens: 800,
          },
        }),
      });

      if (!response.ok) {
        const errorText = await response.text();
        return new Response(
          JSON.stringify({ error: `Gemini API error: ${errorText}` }),
          { status: response.status, headers: { "Content-Type": "application/json", ...corsHeaders } }
        );
      }

      // ─── Stream SSE response directly back to browser ────────────────
      return new Response(response.body, {
        status: response.status,
        headers: {
          "Content-Type": "text/event-stream",
          "Cache-Control": "no-cache",
          Connection: "keep-alive",
          ...corsHeaders,
        },
      });
    } catch (error: any) {
      return new Response(
        JSON.stringify({ error: error.message || "Internal Server Error" }),
        { status: 500, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }
  },
};
