import { Identifier } from "authly"

export abstract class ClientIdentifier {
	private constructor() {}
	private static valueCache: string | null
	static get value(): string {
		ClientIdentifier.valueCache = localStorage.getItem("clientIdentifier")
		if (!ClientIdentifier.valueCache) {
			ClientIdentifier.valueCache = Identifier.generate(10)
			localStorage.setItem("clientIdentifier", ClientIdentifier.valueCache)
		}
		return ClientIdentifier.valueCache
	}
}
