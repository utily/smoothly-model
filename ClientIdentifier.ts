import { Identifier } from "authly"

export abstract class ClientIdentifier {
	private constructor() {}
	static set id(id: string) {
		ClientIdentifier.id = id
	}
	static get id(): string {
		ClientIdentifier.id = localStorage.getItem("clientId")
		if (!ClientIdentifier.id) {
			ClientIdentifier.id = Identifier.generate(10)
			localStorage.setItem("clientId", ClientIdentifier.id)
		}
		return ClientIdentifier.id
	}
}
