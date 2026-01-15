import { dirname } from "path"
import { fileURLToPath } from "url"
import { FlatCompat } from "@eslint/eslintrc"

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const compat = new FlatCompat({
	baseDirectory: __dirname,
})

const eslintConfig = [
	...compat.extends("next/core-web-vitals", "next/typescript"),
	{
		ignores: [
			".next/**",
			".open-next/**",
			"node_modules/**",
			"cloudflare-env.d.ts",
			"next-env.d.ts",
		],
	},
	{
		rules: {
			"react/no-unescaped-entities": "off",
		},
	},
]

export default eslintConfig
