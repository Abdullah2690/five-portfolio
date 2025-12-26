import { serve } from "https://deno.land/std@0.168.0/http/server.ts"

serve(async (req) => {
  const corsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
  }

  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const { name, email, message } = await req.json()

    if (!name || !email || !message) {
      console.error("Missing required fields")  // Added logging
      return new Response("Missing required fields", { status: 400, headers: corsHeaders })
    }

    const subject = `New contact form message from ${name}`  // Explicitly define subject
    console.log("Sending email with subject:", subject)  // Added logging

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${Deno.env.get("RESEND_API_KEY")}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        from: "Portfolio <contact@resend.dev>",  // Using Resend's default domain - verify in dashboard
        to: ["silikaabdullah@gmail.com"],
        subject: subject,
        html: `
          <h2>New Contact Message</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong></p>
          <p>${message}</p>
        `
      })
    })

    if (!res.ok) {
      const errorText = await res.text()
      console.error("Resend API Error:", res.status, errorText)  // Enhanced logging
      return new Response(`Failed to send email: ${errorText}`, { status: 500, headers: corsHeaders })
    }

    console.log("Email sent successfully")  // Added logging
    return new Response("Email sent successfully", { status: 200, headers: corsHeaders })
  } catch (err) {
    console.error("Function Error:", err.message, err.stack)  // Enhanced logging
    return new Response(`Server error: ${err.message}`, { status: 500, headers: corsHeaders })
  }
})
