export interface Input {
    id?: number
    date: number
    contact: string
    from: string
    to: string
    transportation: string
    cost?: number
    memo: string
    isRoundTrip: boolean
    isChecked: boolean
}

export interface BulkInput {
    id?: number[]
    date: number[]
    contact: string
    from: string
    to: string
    transportation: string
    cost?: number
    memo: string
    isRoundTrip: boolean
}

export interface InputEntity {
    id?: number
    ymd: Date
    contact: string
    from: string
    to: string
    transportation: string
    cost?: number
    memo: string
    isRoundTrip: boolean
}

export const TransportationTypes = [
    {
        value: "1",
        label: "電車"
    },
    {
        value: "2",
        label: "航空機"
    },
    {
        value: "3",
        label: "タクシー"
    }
]

export const TransportationTypesMap = TransportationTypes.reduce((map, type) => {
    map[type.value] = type.label;
    return map;
}, {} as { [key: string]: string });


export function defaultInput(): Input {
    return {
        date: 1,
        contact: "",
        from: "",
        to: "",
        transportation: TransportationTypes[0].value,
        cost: 0,
        memo: "",
        isRoundTrip: false,
        isChecked: false
    }
}

export interface ModalConfig {
    show?: boolean
    slot?: string
    title?: string
    expandOnSp?: boolean
    header?: boolean,
    other?: any
}

const DefaultModalConfig: ModalConfig = {
    show: true,
    slot: "default",
    header: true
}

export function createModalConfig(options: ModalConfig) {
    return {
        ...DefaultModalConfig,
        ...options
    }
}


export class UpdateInfo {
    isContactUpdated: boolean = false;
    isFromUpdated: boolean = false;
    isToUpdated: boolean = false;
    isTransportationUpdated: boolean = false;
    isCostUpdated: boolean = false;
    isMemoUpdated: boolean = false;
    isRoundTripUpdated: boolean = false;
}
