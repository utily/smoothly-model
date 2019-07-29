import { Identifier } from "authly"

export abstract class ClientIdentifier {
	private constructor() {}
	private static value: string
	get value(): string {
		ClientIdentifier.value = localStorage.getItem("clientIdentifier")
		if (!ClientIdentifier.value) {
			ClientIdentifier.value = Identifier.generate(10)
			localStorage.setItem("clientIdentifier", ClientIdentifier.value)
		}
		return ClientIdentifier.value
	}
}
