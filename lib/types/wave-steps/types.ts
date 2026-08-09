export interface IWaveStepItem {
    number: string,
    title: string,
    description: string,
    icon: React.ReactNode,
    left: number,
    top: number,
    labelPosition: 'top' | 'bottom',
    textOffsetX?: number,
    textOffsetY?: number,
}