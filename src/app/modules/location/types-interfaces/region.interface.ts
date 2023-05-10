export interface RegionInterface {
  name: RegionType;
  label: string;
  img: string
}

export type RegionType = 'africa' | 'america' | 'asia' | 'europe' | 'oceania'
