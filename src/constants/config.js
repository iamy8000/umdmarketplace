const ENV = {
	isDev: process.env.NODE_ENV !== "production",
	isProd: process.env.NODE_ENV === "production",
};

const Config = {
	// BASE_URL:
	// 	process.env.NODE_ENV !== "production"
	// 		? "http://localhost:3000"
	// 		: `${window.location.origin}/api`,
	BASE_URL: "http://127.0.0.1:5000"
};

export { ENV };
export default Config;