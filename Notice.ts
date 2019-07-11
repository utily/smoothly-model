export interface Notice {
	type: "success" | "warning" | "danger" | "default"
	message: string
}
export namespace Notice {
	export function is(value: any | Notice): value is Notice {
		return typeof(value) == "object" &&
			value.type == "success" || value.type == "warning" || value.type == "danger" || value.type == "default" &&
			typeof(value.message) == "string"
	}
}
