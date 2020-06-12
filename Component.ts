import * as isoly from "isoly"
import { Autocomplete } from "./Autocomplete"

export interface Component<T> {
	type: string
	value?: T
	minLength?: number
	maxLength?: number
	required?: boolean
	autocomplete?: Autocomplete
	pattern?: RegExp
	placeholder?: string
	currency?: isoly.Currency
}
