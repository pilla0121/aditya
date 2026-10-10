import { NextRequest, NextResponse } from "next/server";

function back(request: NextRequest, query: string) {
  return NextResponse.redirect(
    new URL(`/connect/instagram/callback?${query}`, request.url)
  );
}

export async function GET(request: NextRequest) {
  const code = request.nextUrl.searchParams.get("code");
  if (request.nextUrl.searchParams.get("error") || !code) {
    return back(request, "error=cancelled");
  }

  const tokenRes = await fetch("https://api.instagram.com/oauth/access_token", {
    method: "POST",
    body: new URLSearchParams({
      client_id: process.env.INSTAGRAM_APP_ID!,
      client_secret: process.env.INSTAGRAM_APP_SECRET!,
      grant_type: "authorization_code",
      redirect_uri: process.env.INSTAGRAM_REDIRECT_URI!,
      code: code.replace(/#_$/, ""),
    }),
  });
  const tokenData = await tokenRes.json();
  if (!tokenData.access_token) {
    return back(request, "error=token");
  }

  const profileRes = await fetch(
    `https://graph.instagram.com/me?fields=username,followers_count,media_count&access_token=${tokenData.access_token}`
  );
  const profile = await profileRes.json();
  if (!profile.username) {
    return back(request, "error=profile");
  }

  const q = new URLSearchParams({
    status: "success",
    username: profile.username,
    followers: String(profile.followers_count ?? ""),
    media: String(profile.media_count ?? ""),
  });
  return back(request, q.toString());
}