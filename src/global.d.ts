declare module "*.vue" {
	global {
		const Gbrowser: "chrome" | "firefox";
	}
}
declare module "global" {
	const Gbrowser: "chrome" | "firefox";
}
