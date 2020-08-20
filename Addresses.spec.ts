import * as model from "./"

describe("Addresses", () => {
	it("is", () =>
		expect(
			model.Addresses.is({
				primary: { street: "Merchant Street 18", zipCode: "12345", city: "Merchantilium", countryCode: "SE" },
			})
		).toBeTruthy())
	it("is not undefined", () => expect(model.Addresses.is(undefined)).toBeFalsy())
	it("is not {}", () => expect(model.Addresses.is({})).toBeFalsy())
	it("get undefined", () => expect(model.Addresses.get(undefined)).toBeUndefined())
	it("get address", () =>
		expect(
			model.Addresses.get({ street: "Merchant Street 18", zipCode: "12345", city: "Merchantilium", countryCode: "SE" })
		).toEqual({ street: "Merchant Street 18", zipCode: "12345", city: "Merchantilium", countryCode: "SE" }))
	it("get primary", () =>
		expect(
			model.Addresses.get({
				primary: { street: "Merchant Street 18", zipCode: "12345", city: "Merchantilium", countryCode: "SE" },
			})
		).toEqual({ street: "Merchant Street 18", zipCode: "12345", city: "Merchantilium", countryCode: "SE" }))
	it("get delivery", () =>
		expect(
			model.Addresses.get({
				delivery: { street: "Merchant Street 18", zipCode: "12345", city: "Merchantilium", countryCode: "SE" },
			})
		).toEqual({ street: "Merchant Street 18", zipCode: "12345", city: "Merchantilium", countryCode: "SE" }))
	it("types", () => expect(model.Addresses.types).toEqual(["primary", "billing", "delivery", "visit"]))
	it("map", () => {
		const addresses: model.Addresses = {
			delivery: { street: "Merchant Street 18", zipCode: "12345", city: "Merchantilium", countryCode: "SE" },
		}
		const mapped = model.Addresses.map(addresses, type => type)
		expect(mapped).toEqual(["delivery"])
	})
})
