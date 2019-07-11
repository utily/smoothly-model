export interface Note {
	type: "success" | "warning" | "danger" | "primary"
	message: string
}
export namespace Note {
	export function is(value: any | Note): value is Note {
		return typeof(value) == "object" &&
			(value.type == ("success" || "warning" || "danger" || "primary")) &&
			(typeof(value.message) == "string")
	}
}
