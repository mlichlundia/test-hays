export interface RegionInterface {
  name: RegionType;
  label: string;
  img: string
}

type RegionType = 'africa' | 'america' | 'asia' | 'europe' | 'oceania'
