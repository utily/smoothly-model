import { Identifier } from "authly"

export namespace ClientIdentifier {

	export function getClientId() {
		let clientId = localStorage.getItem("clientId")
		if (!clientId)
			clientId = Identifier.generate(10)
		return clientId
	}
}
