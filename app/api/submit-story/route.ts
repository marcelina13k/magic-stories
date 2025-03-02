import { NextResponse } from "next/server"
import { google } from "googleapis"

export async function POST(req: Request) {
  const body = await req.json()

  try {
    const auth = new google.auth.GoogleAuth({
      credentials: JSON.parse(process.env.GOOGLE_APPLICATION_CREDENTIALS!),
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    })

    const sheets = google.sheets({ version: "v4", auth })

    const response = await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.GOOGLE_SHEET_ID,
      range: "Sheet1",
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [
          [
            body.childName,
            body.childAge,
            body.favoriteToy,
            body.favoriteActivities,
            body.favoriteColor,
            body.specialInterests,
            body.specialSkill,
          ],
        ],
      },
    })

    return NextResponse.json({ message: "Story submitted successfully" })
  } catch (error) {
    console.error("Error submitting to Google Sheets:", error)
    return NextResponse.json({ error: "Failed to submit story" }, { status: 500 })
  }
}
