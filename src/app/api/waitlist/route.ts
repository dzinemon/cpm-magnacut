import { getCloudflareContext } from "@opennextjs/cloudflare"

export async function POST(request: Request) {
	try {
		const { email }: { email: string } = await request.json()

		if (!email || !email.includes("@")) {
			return Response.json({ error: "Invalid email" }, { status: 400 })
		}

		const { env } = await getCloudflareContext()

		await env.DB.prepare(
			"INSERT INTO subscribers (email) VALUES (?) ON CONFLICT(email) DO NOTHING",
		)
			.bind(email)
			.run()

		return Response.json({ success: true })
	} catch (error) {
		console.error("Waitlist error:", error)
		return Response.json({ error: "Failed to subscribe" }, { status: 500 })
	}
}
