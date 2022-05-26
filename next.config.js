/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	compiler: {
		styledComponents: true,
	},
	redirects() {
		return [
			{
				source: "/",
				destination: "/earth",
				permanent: true,
			},
		];
	},
};

module.exports = nextConfig;
